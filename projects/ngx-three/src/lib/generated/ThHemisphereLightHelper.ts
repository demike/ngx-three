/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, HemisphereLight, HemisphereLightHelper, Matrix4, MeshBasicMaterial } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-hemisphereLightHelper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThHemisphereLightHelper)
    }
  ]
})
export class ThHemisphereLightHelper<
  TARGS extends any[] = [light: HemisphereLight, size: number, color?: Color | number | string]
> extends ThObject3D<TARGS> {
  @Input()
  public obj!: HemisphereLightHelper;
  protected getType(): Type<HemisphereLightHelper> {
    return HemisphereLightHelper;
  }

  @Input()
  public set light(value: HemisphereLight) {
    if (this.obj) {
      this.obj.light = value;
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
    if (this.obj) {
      this.obj.matrix = applyValue<Matrix4>(this.obj.matrix, value);
    }
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this.obj) {
      this.obj.matrixAutoUpdate = value;
    }
  }

  @Input()
  public set material(value: MeshBasicMaterial) {
    if (this.obj) {
      this.obj.material = value;
    }
  }

  @Input()
  public set color(value: Color | string | number | undefined | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.color = applyValue<Color | string | number | undefined>(this.obj.color, value);
    }
  }
}
