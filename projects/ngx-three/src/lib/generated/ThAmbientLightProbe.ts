/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { AmbientLightProbe, Color } from 'three';
import { ThLightProbe } from './ThLightProbe';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-ambientLightProbe',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLightProbe) },
  ],
})
export class ThAmbientLightProbe<
  TARGS extends any[] = [color?: Color | string | number, intensity?: number]
> extends ThLightProbe<TARGS> {
  @Input()
  public obj!: AmbientLightProbe;
  protected getType(): Type<AmbientLightProbe> {
    return AmbientLightProbe;
  }
}
