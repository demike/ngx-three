/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Color, Matrix4, PointLight, PointLightHelper } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-pointLightHelper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLightHelper) },
  ],
})
export class ThPointLightHelper<
  T extends PointLightHelper = PointLightHelper,
  TARGS extends any[] = [
    light: PointLight,
    sphereSize?: number,
    color?: Color | string | number
  ]
> extends ThObject3D<T, TARGS> {
  public getType(): Type<PointLightHelper> {
    return PointLightHelper;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set light(value: PointLight) {
    if (this._objRef) {
      this._objRef.light = value;
    }
  }

  @Input()
  public set color(
    value:
      | Color
      | string
      | number
      | undefined
      | [color: Color | string | number]
  ) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color | string | number | undefined>(
        this._objRef.color,
        value
      );
    }
  }
  @Input()
  public set matrix(
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
    if (this._objRef) {
      this._objRef.matrix = applyValue<Matrix4>(this._objRef.matrix, value);
    }
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }
}
