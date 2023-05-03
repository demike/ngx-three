/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera, Scene, Vector3 } from 'three';
import { ArcballControls } from 'three/examples/jsm/controls/ArcballControls';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-arcballControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThArcballControls)
    }
  ]
})
export class ThArcballControls<
  T extends ArcballControls = ArcballControls,
  TARGS = [camera: Camera, domElement: HTMLElement, scene?: Scene | null]
> extends ThControlBase<T, TARGS> {
  public getType(): Type<ArcballControls> {
    return ArcballControls;
  }

  @Input()
  public set camera(value: Camera | null) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  // @ts-ignore
  public get camera(): (Camera | null) | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set domElement(value: HTMLElement) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  // @ts-ignore
  public get domElement(): HTMLElement | undefined {
    return this._objRef?.domElement;
  }
  @Input()
  public set scene(value: Scene | null | undefined) {
    if (this._objRef) {
      this._objRef.scene = value;
    }
  }

  // @ts-ignore
  public get scene(): (Scene | null | undefined) | undefined {
    return this._objRef?.scene;
  }
  @Input()
  public set focusAnimationTime(value: number) {
    if (this._objRef) {
      this._objRef.focusAnimationTime = value;
    }
  }

  // @ts-ignore
  public get focusAnimationTime(): number | undefined {
    return this._objRef?.focusAnimationTime;
  }
  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  // @ts-ignore
  public get enabled(): boolean | undefined {
    return this._objRef?.enabled;
  }
  @Input()
  public set enablePan(value: boolean) {
    if (this._objRef) {
      this._objRef.enablePan = value;
    }
  }

  // @ts-ignore
  public get enablePan(): boolean | undefined {
    return this._objRef?.enablePan;
  }
  @Input()
  public set enableRotate(value: boolean) {
    if (this._objRef) {
      this._objRef.enableRotate = value;
    }
  }

  // @ts-ignore
  public get enableRotate(): boolean | undefined {
    return this._objRef?.enableRotate;
  }
  @Input()
  public set enableZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.enableZoom = value;
    }
  }

  // @ts-ignore
  public get enableZoom(): boolean | undefined {
    return this._objRef?.enableZoom;
  }
  @Input()
  public set enableGizmos(value: boolean) {
    if (this._objRef) {
      this._objRef.enableGizmos = value;
    }
  }

  // @ts-ignore
  public get enableGizmos(): boolean | undefined {
    return this._objRef?.enableGizmos;
  }
  @Input()
  public set adjustNearFar(value: boolean) {
    if (this._objRef) {
      this._objRef.adjustNearFar = value;
    }
  }

  // @ts-ignore
  public get adjustNearFar(): boolean | undefined {
    return this._objRef?.adjustNearFar;
  }
  @Input()
  public set scaleFactor(value: number) {
    if (this._objRef) {
      this._objRef.scaleFactor = value;
    }
  }

  // @ts-ignore
  public get scaleFactor(): number | undefined {
    return this._objRef?.scaleFactor;
  }
  @Input()
  public set dampingFactor(value: number) {
    if (this._objRef) {
      this._objRef.dampingFactor = value;
    }
  }

  // @ts-ignore
  public get dampingFactor(): number | undefined {
    return this._objRef?.dampingFactor;
  }
  @Input()
  public set wMax(value: number) {
    if (this._objRef) {
      this._objRef.wMax = value;
    }
  }

  // @ts-ignore
  public get wMax(): number | undefined {
    return this._objRef?.wMax;
  }
  @Input()
  public set enableAnimations(value: boolean) {
    if (this._objRef) {
      this._objRef.enableAnimations = value;
    }
  }

  // @ts-ignore
  public get enableAnimations(): boolean | undefined {
    return this._objRef?.enableAnimations;
  }
  @Input()
  public set enableGrid(value: boolean) {
    if (this._objRef) {
      this._objRef.enableGrid = value;
    }
  }

  // @ts-ignore
  public get enableGrid(): boolean | undefined {
    return this._objRef?.enableGrid;
  }
  @Input()
  public set cursorZoom(value: boolean) {
    if (this._objRef) {
      this._objRef.cursorZoom = value;
    }
  }

  // @ts-ignore
  public get cursorZoom(): boolean | undefined {
    return this._objRef?.cursorZoom;
  }
  @Input()
  public set minFov(value: number) {
    if (this._objRef) {
      this._objRef.minFov = value;
    }
  }

  // @ts-ignore
  public get minFov(): number | undefined {
    return this._objRef?.minFov;
  }
  @Input()
  public set maxFov(value: number) {
    if (this._objRef) {
      this._objRef.maxFov = value;
    }
  }

  // @ts-ignore
  public get maxFov(): number | undefined {
    return this._objRef?.maxFov;
  }
  @Input()
  public set minDistance(value: number) {
    if (this._objRef) {
      this._objRef.minDistance = value;
    }
  }

  // @ts-ignore
  public get minDistance(): number | undefined {
    return this._objRef?.minDistance;
  }
  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
    }
  }

  // @ts-ignore
  public get maxDistance(): number | undefined {
    return this._objRef?.maxDistance;
  }
  @Input()
  public set minZoom(value: number) {
    if (this._objRef) {
      this._objRef.minZoom = value;
    }
  }

  // @ts-ignore
  public get minZoom(): number | undefined {
    return this._objRef?.minZoom;
  }
  @Input()
  public set maxZoom(value: number) {
    if (this._objRef) {
      this._objRef.maxZoom = value;
    }
  }

  // @ts-ignore
  public get maxZoom(): number | undefined {
    return this._objRef?.maxZoom;
  }
  @Input()
  public set target(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.target = applyValue<Vector3>(this._objRef.target, value);
    }
  }
  // @ts-ignore
  public get target(): Vector3 | undefined {
    return this._objRef?.target;
  }
  @Input()
  public set radiusFactor(value: number) {
    if (this._objRef) {
      this._objRef.radiusFactor = value;
    }
  }

  // @ts-ignore
  public get radiusFactor(): number | undefined {
    return this._objRef?.radiusFactor;
  }
}
