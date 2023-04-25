/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { ColorRepresentation, HemisphereLightProbe } from 'three';
import { ThLightProbe } from './ThLightProbe';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-hemisphereLightProbe',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThHemisphereLightProbe),
    },
  ],
})
export class ThHemisphereLightProbe<
  T extends HemisphereLightProbe = HemisphereLightProbe,
  TARGS = [
    skyColor?: ColorRepresentation,
    groundColor?: ColorRepresentation,
    intensity?: number
  ]
> extends ThLightProbe<T, TARGS> {
  public getType(): Type<HemisphereLightProbe> {
    return HemisphereLightProbe;
  }

  // @ts-ignore
  public get isHemisphereLightProbe(): true | undefined {
    return this._objRef?.isHemisphereLightProbe;
  }
}
