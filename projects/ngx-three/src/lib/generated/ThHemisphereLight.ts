/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { Color, ColorRepresentation, HemisphereLight } from 'three';
import { applyValue } from '../util';
import { ThLight } from './ThLight';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-hemisphereLight',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThHemisphereLight) },
  ],
})
export class ThHemisphereLight<
  T extends HemisphereLight = HemisphereLight,
  TARGS = [
    skyColor?: ColorRepresentation,
    groundColor?: ColorRepresentation,
    intensity?: number,
  ],
> extends ThLight<T, TARGS> {
  public getType(): Type<HemisphereLight> {
    return HemisphereLight;
  }

  public get isHemisphereLight(): boolean | undefined {
    return this._objRef?.isHemisphereLight;
  }
  @Input()
  public set groundColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.groundColor = applyValue<Color>(
        this._objRef.groundColor,
        value,
      );
    }
  }
  public get groundColor(): Color | undefined {
    return this._objRef?.groundColor;
  }
}
