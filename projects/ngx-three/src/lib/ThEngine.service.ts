import { EventEmitter, inject, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { Clock, Vector4, WebGLRenderer } from 'three';
import { HOST_ELEMENT, ThView } from './ThView';
import { isObserved } from './util';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Renderer, RENDERER_PROVIDERS } from './renderer/renderer-providers';

export interface RenderState {
  engine: ThEngineService;
  delta: number;
}

@Injectable()
export class ThEngineService implements OnDestroy {
  public readonly beforeRender$: Observable<RenderState>;
  public readonly resize$: Observable<{ width: number; height: number }>;

  private readonly hostElement = inject(HOST_ELEMENT);
  public readonly canvas?: HTMLCanvasElement;
  public readonly wegblRenderer?: THREE.WebGLRenderer;

  /**
   * all injected renderers
   */
  public readonly renderers: Renderer[];

  private clock = new Clock();
  private destroyed$ = new Subject<void>();
  private readonly resizeEmitter = new EventEmitter();
  private readonly beforeRenderEmitter = new EventEmitter<RenderState>();
  private views: ThView[] = [];

  private resizeObserver?: ResizeObserver;

  public constructor(private ngZone: NgZone) {
    this.beforeRender$ = this.beforeRenderEmitter.pipe(takeUntil(this.destroyed$));
    this.resize$ = this.resizeEmitter.pipe(takeUntil(this.destroyed$));

    const args = this.initRenderer();
    this.renderers = args.renderers;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.canvas = args.canvas;
    this.wegblRenderer = args.mainRenderer as WebGLRenderer;

    this.initResizeObserver();
  }

  public ngOnDestroy(): void {
    if (this.resizeObserver && this.hostElement) {
      this.resizeObserver.unobserve(this.hostElement.nativeElement);
    }
  }

  private initResizeObserver() {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      this.initCanvasSize();
      if (!this.resizeObserver) {
        this.resizeObserver = new ResizeObserver(() => {
          this.resize();
        });
      }
      this.resizeObserver.observe(this.hostElement.nativeElement);
    });
  }

  private initCanvasSize() {
    this.canvas?.style.setProperty('width', '100%');
    this.canvas?.style.setProperty('height', '100%');
  }

  private initRenderer() {
    const renderers = inject<Renderer[]>(RENDERER_PROVIDERS);
    let canvas: HTMLCanvasElement | undefined;
    let mainRenderer: Renderer | undefined;
    for (const renderer of renderers) {
      if (renderer.domElement instanceof HTMLCanvasElement) {
        mainRenderer = renderer;
        canvas = renderer.domElement;
      }
    }

    if (!renderers || renderers.length < 1) {
      throw new Error('missing Canvas Renderer');
    }

    return {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      canvas,
      mainRenderer,
      renderers,
    };
  }

  public setViews(views: ThView[]) {
    this.views = views;
  }

  public addView(view: ThView) {
    this.views.push(view);
    const canvasDimensions = this.calcRendererSize();
    if (canvasDimensions) {
      this.adjustViewDimensions(view, canvasDimensions.width, canvasDimensions.height);
    }
  }

  public render(): void {
    this.beforeRenderEmitter.emit({ engine: this, delta: this.clock.getDelta() });
    for (const view of this.views) {
      this.renderView(view);
    }
  }

  protected renderView(view: ThView) {
    const camera = view.camera;
    const scene = view.scene;

    if (!camera || !scene || !camera.objRef || !scene.objRef) {
      return;
    }

    if (isObserved(view.onRender)) {
      this.ngZone.run(() =>
        view.onRender.emit({
          renderer: this.renderers,
          scene,
          camera,
        }),
      );
    }

    for (const renderer of this.renderers) {
      if (view.effectComposer && !(renderer instanceof WebGLRenderer)) {
        // effect composer needs a webgl renderer
        continue;
      }
      this.applyRendererParametersFromView(view, renderer as Partial<WebGLRenderer>);
      if (isObserved(view.onCurrentRendererPass)) {
        this.ngZone.run(() => view.onCurrentRendererPass.emit({ renderer, scene, camera, engine: this }));
      }
      if (view.effectComposer) {
        view.effectComposer.render();
        return;
      } else {
        renderer.render(scene.objRef, camera.objRef);
      }
    }
  }

  protected applyRendererParametersFromView(view: ThView, renderer: Partial<WebGLRenderer>) {
    if (view.viewPort && renderer.setViewport) {
      if (view.viewPort instanceof Vector4) {
        renderer.setViewport(view.viewPort);
      } else {
        renderer.setViewport(view.viewPort.x, view.viewPort.y, view.viewPort.width, view.viewPort.height);
      }
    }

    if (view.scissor && renderer.setScissor) {
      if (view.scissor instanceof Vector4) {
        renderer.setScissor(view.scissor);
      } else {
        renderer.setScissor(view.scissor.x, view.scissor.y, view.scissor.width, view.scissor.height);
      }
    }

    if (view.scissorTest !== undefined && renderer.setScissorTest) {
      renderer.setScissorTest(view.scissorTest);
    }

    if (view.clearColor && renderer.setClearColor) {
      renderer.setClearColor(view.clearColor);
    }

    if (view.clearAlpha !== undefined && renderer.setClearAlpha) {
      renderer.setClearAlpha(view.clearAlpha);
    }

    if (view.shadow !== undefined && renderer.shadowMap) {
      renderer.shadowMap.enabled = true;
    }
  }

  public resize() {
    const { width, height } = this.calcRendererSize();

    // this.wegblRenderer?.setSize(width, height, false);
    this.renderers?.forEach((renderer) => renderer.setSize(width, height, false));

    for (const view of this.views) {
      this.adjustViewDimensions(view, width, height);
    }

    this.resizeEmitter.emit({ width, height });

    return true;
  }

  protected calcRendererSize() {
    // const pixelRatio = window.devicePixelRatio;
    return {
      width: this.hostElement.nativeElement.clientWidth ?? 0 /* * pixelRatio */,
      height: this.hostElement.nativeElement.clientHeight ?? 0 /* * pixelRatio */,
    };
  }

  protected adjustViewDimensions(view: ThView, width: number, height: number) {
    if (!view.viewPort) {
      if (view.camera && (view.camera.objRef as any).aspect) {
        (view.camera.objRef as any).aspect = width / height;
        (view.camera.objRef as any).updateProjectionMatrix();
      }

      view.effectComposer?.setSize(width, height);
    }
  }
}
