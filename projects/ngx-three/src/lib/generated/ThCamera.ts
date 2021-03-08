/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera, Matrix4 } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-camera',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }]
})
export class ThCamera<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  @Input()
  public obj!: Camera;
  protected getType(): Type<Camera> {
    return Camera;
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
          n44: number
        ]
  ) {
    if (this.obj) {
      this.obj.matrixWorldInverse = applyValue<Matrix4>(this.obj.matrixWorldInverse, value);
    }
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
          n44: number
        ]
  ) {
    if (this.obj) {
      this.obj.projectionMatrix = applyValue<Matrix4>(this.obj.projectionMatrix, value);
    }
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
          n44: number
        ]
  ) {
    if (this.obj) {
      this.obj.projectionMatrixInverse = applyValue<Matrix4>(this.obj.projectionMatrixInverse, value);
    }
  }
}
