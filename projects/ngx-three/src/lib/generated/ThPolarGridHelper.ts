/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import {
  BufferGeometry,
  Material,
  Object3DEventMap,
  PolarGridHelper,
} from 'three';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-polarGridHelper',
  template: '<ng-content/>',
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
    color2?: ColorRepresentation,
  ],
> extends ThLineSegments<
  BufferGeometry,
  Material | Material[],
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<PolarGridHelper> {
    return PolarGridHelper;
  }

  public get type(): (string | 'PolarGridHelper') | undefined {
    return this._objRef?.type;
  }
}
