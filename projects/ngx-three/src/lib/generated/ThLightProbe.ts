/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { LightProbe, SphericalHarmonics3, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-lightProbe',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLightProbe) },
  ],
})
export class ThLightProbe<
  TARGS extends any[] = [sh?: SphericalHarmonics3, intensity?: number]
> extends ThLight<TARGS> {
  @Input()
  public obj!: LightProbe;
  protected getType(): Type<LightProbe> {
    return LightProbe;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set sh(value: SphericalHarmonics3 | [coefficients: Vector3[]]) {
    if (this.obj) {
      this.obj.sh = applyValue<SphericalHarmonics3>(this.obj.sh, value);
    }
  }
}
