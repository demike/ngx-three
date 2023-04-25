/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
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
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLightProbe) },
  ],
})
export class ThLightProbe<
  T extends LightProbe = LightProbe,
  TARGS = [sh?: SphericalHarmonics3, intensity?: number]
> extends ThLight<T, TARGS> {
  public getType(): Type<LightProbe> {
    return LightProbe;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get isLightProbe(): true | undefined {
    return this._objRef?.isLightProbe;
  }
  @Input()
  public set sh(value: SphericalHarmonics3 | [coefficients: Vector3[]]) {
    if (this._objRef) {
      this._objRef.sh = applyValue<SphericalHarmonics3>(this._objRef.sh, value);
    }
  }
  // @ts-ignore
  public get sh(): SphericalHarmonics3 | undefined {
    return this._objRef?.sh;
  }
}
