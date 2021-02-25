// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Color, HemisphereLightProbe } from 'three';
import { ThLightProbe } from './ThLightProbe';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-hemisphereLightProbe',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThHemisphereLightProbe),
    },
  ],
})
export class ThHemisphereLightProbe<
  TARGS extends any[] = [
    skyColor?: Color | string | number,
    groundColor?: Color | string | number,
    intensity?: number
  ]
> extends ThLightProbe<TARGS> {
  @Input()
  public obj!: HemisphereLightProbe;
  protected getType(): Type<HemisphereLightProbe> {
    return HemisphereLightProbe;
  }
}
