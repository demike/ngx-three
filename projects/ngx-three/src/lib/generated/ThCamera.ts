/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { Camera, CoordinateSystem, Event, Layers, Matrix4 } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-camera',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }],
})
export class ThCamera<T extends Camera = Camera, TARGS = []> extends ThObject3D<
  Event,
  T,
  TARGS
> {
  public getType(): Type<Camera> {
    return Camera;
  }

  // @ts-ignore
  public get isCamera(): true | undefined {
    return this._objRef?.isCamera;
  }
  // @ts-ignore
  public get type(): (string | 'Camera') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set layers(value: Layers | [layer: number]) {
    if (this._objRef) {
      this._objRef.layers = applyValue<Layers>(this._objRef.layers, value);
    }
  }
  // @ts-ignore
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
  // @ts-ignore
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
  // @ts-ignore
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
  // @ts-ignore
  public get projectionMatrixInverse(): Matrix4 | undefined {
    return this._objRef?.projectionMatrixInverse;
  }
  @Input()
  public set coordinateSystem(value: CoordinateSystem) {
    if (this._objRef) {
      this._objRef.coordinateSystem = value;
    }
  }

  // @ts-ignore
  public get coordinateSystem(): CoordinateSystem | undefined {
    return this._objRef?.coordinateSystem;
  }
}
