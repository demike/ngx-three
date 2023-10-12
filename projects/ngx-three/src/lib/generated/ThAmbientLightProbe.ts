/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { AmbientLightProbe, ColorRepresentation } from 'three';
import { ThLightProbe } from './ThLightProbe';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-ambientLightProbe',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLightProbe) },
  ],
})
export class ThAmbientLightProbe<
  T extends AmbientLightProbe = AmbientLightProbe,
  TARGS = [color?: ColorRepresentation, intensity?: number],
> extends ThLightProbe<T, TARGS> {
  public getType(): Type<AmbientLightProbe> {
    return AmbientLightProbe;
  }

  public get isAmbientLightProbe(): true | undefined {
    return this._objRef?.isAmbientLightProbe;
  }
}
