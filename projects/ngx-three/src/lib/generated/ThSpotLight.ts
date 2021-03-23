/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, Object3D, SpotLight, SpotLightShadow, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-spotLight',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) }]
})
export class ThSpotLight<
  TARGS extends any[] = [
    color?: Color | string | number,
    intensity?: number,
    distance?: number,
    angle?: number,
    penumbra?: number,
    decay?: number
  ]
> extends ThLight<TARGS> {
  @Input()
  public objRef!: SpotLight;
  protected getType(): Type<SpotLight> {
    return SpotLight;
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
  public set target(value: Object3D) {
    if (this.objRef) {
      this.objRef.target = value;
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
  public set angle(value: number) {
    if (this.objRef) {
      this.objRef.angle = value;
    }
  }

  @Input()
  public set decay(value: number) {
    if (this.objRef) {
      this.objRef.decay = value;
    }
  }

  @Input()
  public set shadow(value: SpotLightShadow) {
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

  @Input()
  public set penumbra(value: number) {
    if (this.objRef) {
      this.objRef.penumbra = value;
    }
  }
}
