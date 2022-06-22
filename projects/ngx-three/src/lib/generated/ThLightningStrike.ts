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
import {
  LightningStrike,
  RayParameters,
} from 'three/examples/jsm/geometries/LightningStrike';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-lightningStrike',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThLightningStrike),
    },
  ],
})
export class ThLightningStrike<
  T extends LightningStrike = LightningStrike,
  TARGS = /* rayParameters? */ RayParameters
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<LightningStrike> {
    return LightningStrike;
  }

  @Input()
  public set state(value: number) {
    if (this._objRef) {
      this._objRef.state = value;
    }
  }
}
