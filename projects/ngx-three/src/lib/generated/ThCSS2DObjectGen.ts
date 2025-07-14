/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Camera, Object3DEventMap, Scene, Vector2 } from 'three';
import { CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-cSS2DObjectGen',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCSS2DObjectGen) },
  ],
})
export class ThCSS2DObjectGen<
  T extends CSS2DObject = CSS2DObject,
  TARGS = /* element */ HTMLElement,
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<CSS2DObject> {
    return CSS2DObject;
  }

  @Input()
  public set element(value: HTMLElement) {
    if (this._objRef) {
      this._objRef.element = value;
    }
  }

  public get element(): HTMLElement | undefined {
    return this._objRef?.element;
  }
  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.center = applyValue<Vector2>(this._objRef.center, value);
    }
  }
  public get center(): Vector2 | undefined {
    return this._objRef?.center;
  }
  @Input()
  public set onBeforeRender(
    value: (renderer: unknown, scene: Scene, camera: Camera) => void,
  ) {
    if (this._objRef) {
      this._objRef.onBeforeRender = value;
    }
  }

  public get onBeforeRender():
    | ((renderer: unknown, scene: Scene, camera: Camera) => void)
    | undefined {
    return this._objRef?.onBeforeRender;
  }
  @Input()
  public set onAfterRender(
    value: (renderer: unknown, scene: Scene, camera: Camera) => void,
  ) {
    if (this._objRef) {
      this._objRef.onAfterRender = value;
    }
  }

  public get onAfterRender():
    | ((renderer: unknown, scene: Scene, camera: Camera) => void)
    | undefined {
    return this._objRef?.onAfterRender;
  }
}
