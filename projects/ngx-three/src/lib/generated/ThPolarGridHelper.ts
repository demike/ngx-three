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
  BufferGeometry,
  ColorRepresentation,
  Material,
  PolarGridHelper,
} from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-polarGridHelper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPolarGridHelper) },
  ],
})
export class ThPolarGridHelper<
  T extends PolarGridHelper = PolarGridHelper,
  TARGS = [
    radius?: number,
    radials?: number,
    circles?: number,
    divisions?: number,
    color1?: ColorRepresentation,
    color2?: ColorRepresentation
  ]
> extends ThLineSegments<BufferGeometry, Material | Material[], T, TARGS> {
  public getType(): Type<PolarGridHelper> {
    return PolarGridHelper;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
