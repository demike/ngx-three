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
  TARGS extends any[] = [skyColor?: Color | string | number, groundColor?: Color | string | number, intensity?: number]
> extends ThLight<TARGS> {
  @Input()
  public objRef!: HemisphereLight;
  protected getType(): Type<HemisphereLight> {
    return HemisphereLight;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      this.objRef.position = applyValue<Vector3>(this.objRef.position, value);
    }
  }
  @Input()
  public set groundColor(value: Color | [color: Color | string | number]) {
    if (this.objRef) {
      this.objRef.groundColor = applyValue<Color>(this.objRef.groundColor, value);
    }
  }
}
