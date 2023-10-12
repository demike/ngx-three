/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  forwardRef,
} from '@angular/core';
import { Color, ColorRepresentation, Event, Light, LightShadow } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-light',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLight) }],
})
export abstract class ThLight<
  TShadowSupport extends LightShadow | undefined = LightShadow | undefined,
  T extends Light<TShadowSupport> = Light<TShadowSupport>,
  TARGS = [color?: ColorRepresentation, intensity?: number],
> extends ThObject3D<Event, T, TARGS> {
  public get isLight(): true | undefined {
    return this._objRef?.isLight;
  }
  public get type(): (string | 'Light') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set color(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  public get color(): Color | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set intensity(value: number) {
    if (this._objRef) {
      this._objRef.intensity = value;
    }
  }

  public get intensity(): number | undefined {
    return this._objRef?.intensity;
  }
  @Input()
  public set shadow(value: TShadowSupport) {
    if (this._objRef) {
      this._objRef.shadow = value;
    }
  }

  public get shadow(): TShadowSupport | undefined {
    return this._objRef?.shadow;
  }
}
