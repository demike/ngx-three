/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, DirectionalLight, DirectionalLightShadow, Object3D, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-directionalLight',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThDirectionalLight) }]
})
export class ThDirectionalLight<TARGS extends any[] = [color?: Color | string | number, intensity?: number]> extends ThLight<TARGS> {
  @Input()
  public objRef!: DirectionalLight;
  protected getType(): Type<DirectionalLight> {
    return DirectionalLight;
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
  public set shadow(value: DirectionalLightShadow) {
    if (this.objRef) {
      this.objRef.shadow = value;
    }
  }
}
