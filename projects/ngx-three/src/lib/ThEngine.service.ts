import * as THREE from 'three';
import {
  ElementRef,
  Injectable,
  NgZone,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ThView } from './ThView';
import { Vector4 } from 'three';
import { EventEmitter } from '@angular/core';
import { ThScene } from './generated/ThScene';
import { ThCamera } from './generated/ThCamera';

@Injectable()
export class ThEngineService implements OnDestroy {
  private canvas?: HTMLCanvasElement;
  private renderer?: THREE.WebGLRenderer;
  private views: ThView[] = [];

  private frameId?: number;

  public onRender = new EventEmitter<{
    renderer: THREE.WebGLRenderer;
    scene: ThScene;
    camera: ThCamera;
  }>();

  public constructor(private ngZone: NgZone) {}

  public ngOnDestroy(): void {
    if (this.frameId !== undefined) {
      cancelAnimationFrame(this.frameId);
    }
  }

  public initRenderer(): void {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true, // transparent background
      antialias: true, // smooth edges
    });

    this.resize();

    // this.renderer.setSize(this.canvas?.width ?? 0, this.canvas?.width ?? 0);

    // We have to run this outside angular zones,
    // because it could trigger heavy changeDetection cycles.
    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('resize', () => {
        this.resize();
      });
    });
  }

  public setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
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
      this.initRenderer();
    }
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

      if (!camera || !scene) {
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

      this.renderer.render(scene.obj, camera.obj);
    }
  }

  public resize(): void {
    if (!this.renderer) {
      return;
    }
    const width = this.canvas?.parentElement?.clientWidth ?? 0;
    const height = this.canvas?.parentElement?.clientHeight ?? 0;

    this.renderer.setSize(width, height);

    for (const view of this.views) {
      if (!view.viewPort && view.camera && (view.camera.obj as any).aspect) {
        (view.camera.obj as any).aspect = width / height;
        (view.camera.obj as any).updateProjectionMatrix();
      }
    }
  }
}
