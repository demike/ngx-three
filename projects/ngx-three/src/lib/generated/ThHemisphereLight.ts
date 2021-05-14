/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, HemisphereLight, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-hemisphereLight',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThHemisphereLight) }]
})
export class ThHemisphereLight<
  T extends HemisphereLight = HemisphereLight,
  TARGS extends any[] = [skyColor?: Color | string | number, groundColor?: Color | string | number, intensity?: number]
> extends ThLight<T, TARGS> {
  public getType(): Type<HemisphereLight> {
    return HemisphereLight;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.position = applyValue<Vector3>(this._objRef.position, value);
    }
  }
  @Input()
  public set groundColor(value: Color | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.groundColor = applyValue<Color>(this._objRef.groundColor, value);
    }
  }
}
