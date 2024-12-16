/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { GridHelper, Object3DEventMap } from 'three';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { LineBasicMaterial } from 'three/src/materials/LineBasicMaterial.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-gridHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThGridHelper) },
  ],
})
export class ThGridHelper<
  T extends GridHelper = GridHelper,
  TARGS = [
    size?: number,
    divisions?: number,
    color1?: ColorRepresentation,
    color2?: ColorRepresentation,
  ],
> extends ThLineSegments<
  BufferGeometry,
  LineBasicMaterial,
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<GridHelper> {
    return GridHelper;
  }

  public get type(): (string | 'GridHelper') | undefined {
    return this._objRef?.type;
  }
}
