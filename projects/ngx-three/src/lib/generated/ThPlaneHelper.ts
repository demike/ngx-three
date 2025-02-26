/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import {
  BufferGeometry,
  Material,
  Object3DEventMap,
  Plane,
  PlaneHelper,
} from 'three';
import { Vector3 } from 'three/src/math/Vector3.js';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
    selector: 'th-planeHelper',
    template: '<ng-content/>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
    ],
    standalone: false
})
export class ThPlaneHelper<
  T extends PlaneHelper = PlaneHelper,
  TARGS = [plane: Plane, size?: number, hex?: number],
> extends ThLineSegments<
  BufferGeometry,
  Material | Material[],
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<PlaneHelper> {
    return PlaneHelper;
  }

  public get type(): (string | 'PlaneHelper') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set plane(value: Plane | [normal: Vector3, constant: number]) {
    if (this._objRef) {
      this._objRef.plane = applyValue<Plane>(this._objRef.plane, value);
    }
  }
  public get plane(): Plane | undefined {
    return this._objRef?.plane;
  }
  @Input()
  public set size(value: number) {
    if (this._objRef) {
      this._objRef.size = value;
    }
  }

  public get size(): number | undefined {
    return this._objRef?.size;
  }
}
