// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Color, Object3D, SpotLight, SpotLightShadow, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-spotLight',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) },
  ],
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
  public obj!: SpotLight;
  protected getType(): Type<SpotLight> {
    return SpotLight;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.position = applyValue<Vector3>(this.obj.position, value);
    }
  }
  @Input()
  public set target(value: Object3D) {
    if (this.obj) {
      this.obj.target = value;
    }
  }

  @Input()
  public set intensity(value: number) {
    if (this.obj) {
      this.obj.intensity = value;
    }
  }

  @Input()
  public set distance(value: number) {
    if (this.obj) {
      this.obj.distance = value;
    }
  }

  @Input()
  public set angle(value: number) {
    if (this.obj) {
      this.obj.angle = value;
    }
  }

  @Input()
  public set decay(value: number) {
    if (this.obj) {
      this.obj.decay = value;
    }
  }

  @Input()
  public set shadow(value: SpotLightShadow) {
    if (this.obj) {
      this.obj.shadow = value;
    }
  }

  @Input()
  public set power(value: number) {
    if (this.obj) {
      this.obj.power = value;
    }
  }

  @Input()
  public set penumbra(value: number) {
    if (this.obj) {
      this.obj.penumbra = value;
    }
  }
}
