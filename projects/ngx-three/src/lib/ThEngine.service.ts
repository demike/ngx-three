import * as THREE from 'three';
import { Injectable, NgZone, OnDestroy } from '@angular/core';
import { ThView } from './ThView';
import { Vector4 } from 'three';
import { EventEmitter } from '@angular/core';
import { ThScene } from './generated/ThScene';
import { ThCamera } from './generated/ThCamera';

@Injectable()
export class ThEngineService implements OnDestroy {
  private renderer?: THREE.WebGLRenderer;
  private views: ThView[] = [];
  private frameId?: number;

  public canvas?: HTMLCanvasElement;

  public readonly onRender = new EventEmitter<{
    renderer: THREE.WebGLRenderer;
    scene: ThScene;
    camera: ThCamera;
  }>();

  // @ts-ignore
  private resizeObserver?: ResizeObserver;

  public constructor(private ngZone: NgZone) {}

  // renderer parameters
  /**
   * enable / disable shadows
   */
  public set shadow(enable: boolean) {
    if (this.renderer) {
      this.renderer.shadowMap.enabled = enable;
    }
  }
  public get shadow() {
    return this.renderer?.shadowMap.enabled ?? false;
  }

  public ngOnDestroy(): void {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId);
    }

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
    if (this.renderer) {
      return;
    }
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true, // smooth edges
      preserveDrawingBuffer: true,
    });

    this.resize();

    // this.renderer.setSize(this.canvas?.width ?? 0, this.canvas?.width ?? 0);
  }

  public setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.initRenderer();
    this.initResizeObserver();
  }

  public addView(view: ThView) {
    this.views.push(view);
  }

  public requestAnimationFrame() {
    if (this.frameId === undefined) {
      this.ngZone.runOutsideAngular(
        () =>
          (this.frameId = requestAnimationFrame(() => {
            this.render();
          }))
      );
    }
  }

  /*
  public animate(): void {
    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      if (document.readyState !== 'loading') {
        this.render();
      } else {
        window.addEventListener('DOMContentLoaded', () => {
          this.render();
        });
      }
    });
  }
  */

  protected render(): void {
    this.frameId = undefined;

    // TODO: conditional rendere loop
    this.requestAnimationFrame();

    if (!this.renderer) {
      return;
    }

    const renderer = this.renderer;

    for (const view of this.views) {
      if (view.viewPort) {
        if (view.viewPort instanceof Vector4) {
          this.renderer.setViewport(view.viewPort);
        } else {
          this.renderer.setViewport(
            view.viewPort.x,
            view.viewPort.y,
            view.viewPort.width,
            view.viewPort.height
          );
        }
      }

      const camera = view.camera;
      const scene = view.scene;

      if (!camera || !scene || !camera.objRef || !scene.objRef) {
        return;
      }

      if (this.onRender.observers.length) {
        this.ngZone.run(() =>
          this.onRender.emit({
            renderer,
            scene,
            camera,
          })
        );
      }

      this.renderer.render(scene.objRef, camera.objRef);
    }
  }

  public resize(): void {
    if (!this.renderer) {
      return;
    }
    const width = this.canvas?.parentElement?.clientWidth ?? 0;
    const height = this.canvas?.parentElement?.clientHeight ?? 0;

    this.renderer.setSize(width, height, false);

    for (const view of this.views) {
      if (!view.viewPort && view.camera && (view.camera.objRef as any).aspect) {
        (view.camera.objRef as any).aspect = width / height;
        (view.camera.objRef as any).updateProjectionMatrix();
      }
    }
  }
}
