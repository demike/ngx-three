/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, PointLight, PointLightShadow } from 'three';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-pointLight',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPointLight) }]
})
export class ThPointLight<
  TARGS extends any[] = [color?: Color | string | number, intensity?: number, distance?: number, decay?: number]
> extends ThLight<TARGS> {
  @Input()
  public objRef!: PointLight;
  protected getType(): Type<PointLight> {
    return PointLight;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set intensity(value: number) {
    if (this.objRef) {
      this.objRef.intensity = value;
    }
  }

  @Input()
  public set distance(value: number) {
    if (this.objRef) {
      this.objRef.distance = value;
    }
  }

  @Input()
  public set decay(value: number) {
    if (this.objRef) {
      this.objRef.decay = value;
    }
  }

  @Input()
  public set shadow(value: PointLightShadow) {
    if (this.objRef) {
      this.objRef.shadow = value;
    }
  }

  @Input()
  public set power(value: number) {
    if (this.objRef) {
      this.objRef.power = value;
    }
  }
}
