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

  public static readonly RAY_INITIALIZED = LightningStrike.RAY_INITIALIZED;

  public static readonly RAY_UNBORN = LightningStrike.RAY_UNBORN;

  public static readonly RAY_PROPAGATING = LightningStrike.RAY_PROPAGATING;

  public static readonly RAY_STEADY = LightningStrike.RAY_STEADY;

  public static readonly RAY_VANISHING = LightningStrike.RAY_VANISHING;

  public static readonly RAY_EXTINGUISHED = LightningStrike.RAY_EXTINGUISHED;

  @Input()
  public set state(value: number) {
    if (this._objRef) {
      this._objRef.state = value;
    }
  }

  // @ts-ignore
  public get state(): number | undefined {
    return this._objRef?.state;
  }
}
