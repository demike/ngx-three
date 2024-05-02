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
  Camera,
  CoordinateSystem,
  Layers,
  Matrix4,
  Object3DEventMap,
  Vector4,
} from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-camera',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }],
})
export class ThCamera<T extends Camera = Camera, TARGS = []> extends ThObject3D<
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<Camera> {
    return Camera;
  }

  public get isCamera(): true | undefined {
    return this._objRef?.isCamera;
  }
  public get type(): (string | 'Camera') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set layers(value: Layers | [layer: number]) {
    if (this._objRef) {
      this._objRef.layers = applyValue<Layers>(this._objRef.layers, value);
    }
  }
  public get layers(): Layers | undefined {
    return this._objRef?.layers;
  }
  @Input()
  public set matrixWorldInverse(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.matrixWorldInverse = applyValue<Matrix4>(
        this._objRef.matrixWorldInverse,
        value,
      );
    }
  }
  public get matrixWorldInverse(): Matrix4 | undefined {
    return this._objRef?.matrixWorldInverse;
  }
  @Input()
  public set projectionMatrix(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.projectionMatrix = applyValue<Matrix4>(
        this._objRef.projectionMatrix,
        value,
      );
    }
  }
  public get projectionMatrix(): Matrix4 | undefined {
    return this._objRef?.projectionMatrix;
  }
  @Input()
  public set projectionMatrixInverse(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.projectionMatrixInverse = applyValue<Matrix4>(
        this._objRef.projectionMatrixInverse,
        value,
      );
    }
  }
  public get projectionMatrixInverse(): Matrix4 | undefined {
    return this._objRef?.projectionMatrixInverse;
  }
  @Input()
  public set coordinateSystem(value: CoordinateSystem) {
    if (this._objRef) {
      this._objRef.coordinateSystem = value;
    }
  }

  public get coordinateSystem(): CoordinateSystem | undefined {
    return this._objRef?.coordinateSystem;
  }
  @Input()
  public set viewport(
    value: Vector4 | [x: number, y: number, z: number, w: number],
  ) {
    if (this._objRef) {
      this._objRef.viewport = applyValue<Vector4 | undefined>(
        this._objRef.viewport,
        value,
      );
    }
  }
  public get viewport(): Vector4 | undefined {
    return this._objRef?.viewport;
  }
}
