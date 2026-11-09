import { EventEmitter, NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { vi } from 'vitest';
import { ThEngineService } from './ThEngine.service';
import { HOST_ELEMENT, ThView } from './ThView';
import { RENDERER_PROVIDERS } from './renderer/renderer-providers';

function createRenderer() {
  return {
    domElement: document.createElement('canvas'),
    setSize: vi.fn(),
    render: vi.fn(),
    dispose: vi.fn(),
    shadowMap: { enabled: false },
  };
}

function createView(shadow?: boolean) {
  return {
    camera: { objRef: {} },
    scene: { objRef: {} },
    onRender: new EventEmitter(),
    onCurrentRendererPass: new EventEmitter(),
    beforeViewRender$: new Subject(),
    shadow,
  } as unknown as ThView;
}

describe('ThEngineService', () => {
  let engine: ThEngineService;
  let renderer: ReturnType<typeof createRenderer>;
  let zoneRun: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.stubGlobal(
      'ResizeObserver',
      class {
        observe() {}
        unobserve() {}
      },
    );
    renderer = createRenderer();
    TestBed.configureTestingModule({
      providers: [
        ThEngineService,
        { provide: HOST_ELEMENT, useValue: { nativeElement: document.createElement('div') } },
        { provide: RENDERER_PROVIDERS, useValue: [renderer] },
      ],
    });
    engine = TestBed.inject(ThEngineService);
    zoneRun = vi.spyOn(TestBed.inject(NgZone), 'run');
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('does not enter the angular zone when nobody listens to onRender', () => {
    engine.setViews([createView(), createView()]);
    for (let i = 0; i < 3; i++) {
      engine.render();
    }
    expect(zoneRun).not.toHaveBeenCalled();
    expect(renderer.render).toHaveBeenCalledTimes(6);
  });

  it('enters the angular zone once per frame, no matter how many views listen to onRender', () => {
    const views = [createView(), createView(), createView()];
    const emitted = vi.fn();
    views.forEach((v) => v.onRender.subscribe(emitted));
    engine.setViews(views);

    const frames = 4;
    for (let i = 0; i < frames; i++) {
      engine.render();
    }

    expect(emitted).toHaveBeenCalledTimes(views.length * frames);
    expect(zoneRun).toHaveBeenCalledTimes(frames);
  });

  it('emits beforeViewRender$ once per view and frame', () => {
    const view = createView();
    const hook = vi.fn();
    view.beforeViewRender$.subscribe(hook);
    engine.setViews([view]);

    engine.render();
    engine.render();

    expect(hook).toHaveBeenCalledTimes(2);
    expect(zoneRun).not.toHaveBeenCalled();
  });

  it('applies the shadow flag as given', () => {
    engine.setViews([createView(false)]);
    renderer.shadowMap.enabled = true;
    engine.render();
    expect(renderer.shadowMap.enabled).toBe(false);

    engine.setViews([createView(true)]);
    engine.render();
    expect(renderer.shadowMap.enabled).toBe(true);
  });
});
