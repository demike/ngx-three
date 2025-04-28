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
import { Matrix4, Object3DEventMap, PointLightHelper } from 'three';
import { PointLight } from 'three/src/lights/PointLight.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-pointLightHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLightHelper) },
  ],
})
export class ThPointLightHelper<
  T extends PointLightHelper = PointLightHelper,
  TARGS = [light: PointLight, sphereSize?: number, color?: ColorRepresentation],
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<PointLightHelper> {
    return PointLightHelper;
  }

  public get type(): (string | 'PointLightHelper') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set light(value: PointLight) {
    if (this._objRef) {
      this._objRef.light = value;
    }
  }

  public get light(): PointLight | undefined {
    return this._objRef?.light;
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
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.matrix = applyValue<Matrix4>(this._objRef.matrix, value);
    }
  }
  public get matrix(): Matrix4 | undefined {
    return this._objRef?.matrix;
  }
  @Input()
  public set color(value: ColorRepresentation | undefined) {
    if (this._objRef) {
      this._objRef.color = value;
    }
  }

  public get color(): (ColorRepresentation | undefined) | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }

  public get matrixAutoUpdate(): boolean | undefined {
    return this._objRef?.matrixAutoUpdate;
  }
}
