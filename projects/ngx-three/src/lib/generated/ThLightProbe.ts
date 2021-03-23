/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { LightProbe, SphericalHarmonics3, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-lightProbe',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLightProbe) }]
})
export class ThLightProbe<TARGS extends any[] = [sh?: SphericalHarmonics3, intensity?: number]> extends ThLight<TARGS> {
  @Input()
  public objRef!: LightProbe;
  protected getType(): Type<LightProbe> {
    return LightProbe;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set sh(value: SphericalHarmonics3 | [coefficients: Vector3[]]) {
    if (this.objRef) {
      this.objRef.sh = applyValue<SphericalHarmonics3>(this.objRef.sh, value);
    }
  }
}
