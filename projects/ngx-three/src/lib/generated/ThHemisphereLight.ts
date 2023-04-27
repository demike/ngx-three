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
import { Color, ColorRepresentation, HemisphereLight, Vector3 } from 'three';
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
    intensity?: number
  ]
> extends ThLight<T, TARGS> {
  public getType(): Type<HemisphereLight> {
    return HemisphereLight;
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
  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.position, value);
    }
  }
  // @ts-ignore
  public get position(): Vector3 | undefined {
    return this._objRef?.position;
  }
  @Input()
  public set groundColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.groundColor = applyValue<Color>(
        this._objRef.groundColor,
        value
      );
    }
  }
  // @ts-ignore
  public get groundColor(): Color | undefined {
    return this._objRef?.groundColor;
  }
  // @ts-ignore
  public get isHemisphereLight(): true | undefined {
    return this._objRef?.isHemisphereLight;
  }
}
