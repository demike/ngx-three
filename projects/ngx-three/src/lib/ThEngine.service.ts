import { EventEmitter, forwardRef, Inject, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { Clock, Vector4, WebGLRenderer, WebGLRendererParameters } from 'three';
import { ThView } from './ThView';
import { isObserved } from './util';
import { Observable, Subject, takeUntil } from 'rxjs';

export interface RenderState {
  engine: ThEngineService;
  delta: number;
}
export interface ThRendererParameters extends Partial<WebGLRenderer> {
  domElement: HTMLCanvasElement;
}

const RENDERER_DEFAULTS: WebGLRendererParameters = {
  alpha: true, // transparent background
  antialias: true, // smooth edges
  preserveDrawingBuffer: true
};

@Injectable()
export class ThEngineService implements OnDestroy {

  public readonly beforeRender$: Observable<RenderState>;
  public readonly resize$: Observable<{ width: number; height: number }>;

  private _renderer?: THREE.WebGLRenderer;
  private rendererParameters?: ThRendererParameters;
  private clock = new Clock();
  private destroyed$ = new Subject<void>();
  private readonly resizeEmitter = new EventEmitter();
  private readonly beforeRenderEmitter = new EventEmitter<RenderState>();
  private views: ThView[] = [];

  public get canvas(): HTMLCanvasElement | undefined {
    return this.rendererParameters?.domElement;
  }

  private resizeObserver?: ResizeObserver;

  public constructor(private ngZone: NgZone) {
    this.beforeRender$ = this.beforeRenderEmitter.pipe(takeUntil(this.destroyed$));
    this.resize$ = this.resizeEmitter.pipe(takeUntil(this.destroyed$));
  }

  public get renderer() {
    return this._renderer;
  }

  public ngOnDestroy(): void {
    if (this.resizeObserver && this.canvas) {
      this.resizeObserver.unobserve(this.canvas);
    }
  }

  private initResizeObserver() {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (!this.canvas) {
        throw new Error('missing canvas element');
      }

      this.resize();
      if (!this.resizeObserver) {
        // @ts-ignore
        this.resizeObserver = new ResizeObserver(() => {
          this.resize();
        });
      }
      this.resizeObserver.observe(this.canvas);
    });
  }

  private initRenderer(): void {
    if (this._renderer) {
      return;
    }
    this._renderer = new THREE.WebGLRenderer({
      canvas: this.rendererParameters?.domElement,
      ...RENDERER_DEFAULTS
    });

    Object.assign(this._renderer, { ...RENDERER_DEFAULTS, ...this.rendererParameters });
    this.resize();
  }

  public setRenderer(options: ThRendererParameters) {
    this.rendererParameters = options;
    this.initRenderer();
    this.initResizeObserver();
  }

  public addView(view: ThView) {
    this.views.push(view);
    const canvasDimensions = this.calcRendererSize();
    if (canvasDimensions) {
      this.adjustViewDimensions(view, canvasDimensions.width, canvasDimensions.height);
    }
  }

  public render(): void {
    this.beforeRenderEmitter.emit({engine: this, delta: this.clock.getDelta()});
    for (const view of this.views) {
      this.renderView(view);
    }
  }

  protected renderView(view: ThView) {
    if (!this._renderer) {
      return;
    }

    const camera = view.camera;
    const scene = view.scene;

    if (!camera || !scene || !camera.objRef || !scene.objRef) {
      return;
    }

    const renderer = this._renderer;

    if (isObserved(view.onRender)) {
      this.ngZone.run(() =>
        view.onRender.emit({
          renderer,
          scene,
          camera
        })
      );
    }

    this.applyRendererParametersFromView(view);
    if (view.effectComposer) {
      view.effectComposer.render();
    } else {
      this._renderer.render(scene.objRef, camera.objRef);
    }
  }

  protected applyRendererParametersFromView(view: ThView) {
    if (!this._renderer) {
      return;
    }
    if (view.viewPort) {
      if (view.viewPort instanceof Vector4) {
        this._renderer.setViewport(view.viewPort);
      } else {
        this._renderer.setViewport(view.viewPort.x, view.viewPort.y, view.viewPort.width, view.viewPort.height);
      }
    }

    if (view.scissor) {
      if (view.scissor instanceof Vector4) {
        this._renderer.setScissor(view.scissor);
      } else {
        this._renderer.setScissor(view.scissor.x, view.scissor.y, view.scissor.width, view.scissor.height);
      }
    }

    if (view.scissorTest !== undefined) {
      this._renderer.setScissorTest(view.scissorTest);
    }

    if (view.clearColor) {
      this._renderer.setClearColor(view.clearColor);
    }

    if (view.clearAlpha !== undefined) {
      this._renderer.setClearAlpha(view.clearAlpha);
    }

    if (view.shadow !== undefined) {
      this._renderer.shadowMap.enabled = true;
    }
  }

  public resize() {
    if (!this._renderer || !this.canvas) {
      return false;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { width, height } = this.calcRendererSize()!;

    this._renderer.setSize(width, height, false);

    for (const view of this.views) {
      this.adjustViewDimensions(view, width, height);
    }

    this.resizeEmitter.emit({ width, height });

    return true;
  }

  protected calcRendererSize() {
    if (!this._renderer || !this.canvas) {
      return;
    }

    const pixelRatio = window.devicePixelRatio;
    return {
      width: (this.canvas.clientWidth ?? 0) * pixelRatio,
      height: (this.canvas.clientHeight ?? 0) * pixelRatio
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
