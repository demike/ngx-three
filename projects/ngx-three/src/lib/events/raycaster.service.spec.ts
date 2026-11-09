import { NgZone } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Raycaster } from 'three';
import { vi } from 'vitest';
import { ThCamera } from '../generated/ThCamera';
import { RaycasterEventDirective } from './raycaster.events.directive';
import { RAYCASTER, RaycasterService } from './raycaster.service';

const SIZE = 100;

function pointerEvent(type: string, x = SIZE / 2, y = SIZE / 2) {
  return Object.assign(new Event(type), { layerX: x, layerY: y, width: 1 });
}

/** a fake event target listening to the given raycaster events, with a box at the origin */
function createTarget(...events: ('mouseEnter' | 'click' | 'pointerUp' | 'pointerDown')[]) {
  const target: Record<string, unknown> = {
    host: { objRef: new Mesh(new BoxGeometry(), new MeshBasicMaterial()) },
    emitOnMouseEnter: vi.fn(),
    emitOnMouseExit: vi.fn(),
    emitOnClick: vi.fn(),
    emitOnPointerUp: vi.fn(),
    emitOnPointerDown: vi.fn(),
  };
  events.forEach((e) => (target[e] = {}));
  return target as unknown as RaycasterEventDirective & Record<string, ReturnType<typeof vi.fn>>;
}

describe('RaycasterService', () => {
  let service: RaycasterService;
  let raycaster: Raycaster;
  let canvas: HTMLElement;
  let intersect: ReturnType<typeof vi.spyOn>;
  let frames: FrameRequestCallback[];

  const flushFrames = () => {
    const pending = frames;
    frames = [];
    pending.forEach((cb) => cb(performance.now()));
  };

  beforeEach(() => {
    frames = [];
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => frames.push(cb));
    vi.stubGlobal('cancelAnimationFrame', () => (frames = []));

    raycaster = new Raycaster();
    TestBed.configureTestingModule({
      providers: [RaycasterService, { provide: RAYCASTER, useValue: raycaster }],
    });
    service = TestBed.inject(RaycasterService);
    intersect = vi.spyOn(raycaster, 'intersectObject');

    canvas = document.createElement('div');
    Object.defineProperty(canvas, 'clientWidth', { value: SIZE });
    Object.defineProperty(canvas, 'clientHeight', { value: SIZE });

    const camera = new PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    camera.updateMatrixWorld();
    service.init({ objRef: camera } as unknown as ThCamera, canvas);
  });

  afterEach(() => {
    service.ngOnDestroy();
    vi.unstubAllGlobals();
  });

  it('raycasts at most once per animation frame for a burst of pointermoves', () => {
    const target = createTarget('mouseEnter');
    service.addEventTarget(target);

    for (let i = 0; i < 20; i++) {
      canvas.dispatchEvent(pointerEvent('pointermove'));
    }
    expect(intersect).toHaveBeenCalledTimes(0);

    flushFrames();

    expect(intersect).toHaveBeenCalledTimes(1);
    expect(target.emitOnMouseEnter).toHaveBeenCalledTimes(1);
  });

  it('emits mouseExit when the pointer leaves the target', () => {
    const target = createTarget('mouseEnter');
    service.addEventTarget(target);

    canvas.dispatchEvent(pointerEvent('pointermove'));
    flushFrames();
    canvas.dispatchEvent(pointerEvent('pointermove', 1, 1)); // corner: misses the box
    flushFrames();

    expect(target.emitOnMouseEnter).toHaveBeenCalledTimes(1);
    expect(target.emitOnMouseExit).toHaveBeenCalledTimes(1);
  });

  it('shares one raycast between pointerup and click', () => {
    const target = createTarget('click', 'pointerUp');
    service.addEventTarget(target);
    const zoneRun = vi.spyOn(TestBed.inject(NgZone), 'run');

    canvas.dispatchEvent(pointerEvent('pointerdown'));
    canvas.dispatchEvent(pointerEvent('pointerup'));

    expect(intersect).toHaveBeenCalledTimes(1);
    expect(target.emitOnPointerUp).toHaveBeenCalledTimes(1);
    expect(target.emitOnClick).toHaveBeenCalledTimes(1);
    expect(zoneRun).toHaveBeenCalledTimes(1);
  });

  it('registers the dom listeners outside the angular zone', () => {
    const outside = vi.spyOn(TestBed.inject(NgZone), 'runOutsideAngular');
    service.init(service['camera'] as ThCamera, document.createElement('div'));
    expect(outside).toHaveBeenCalled();
  });
});
