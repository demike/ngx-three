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
import { BoxHelper, Object3DEventMap } from 'three';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Object3D } from 'three/src/core/Object3D.js';
import { LineBasicMaterial } from 'three/src/materials/LineBasicMaterial.js';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
    selector: 'th-boxHelper',
    template: '<ng-content/>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: ThObject3D, useExisting: forwardRef(() => ThBoxHelper) },
    ],
    standalone: false
})
export class ThBoxHelper<
  T extends BoxHelper = BoxHelper,
  TARGS = [object: Object3D, color?: ColorRepresentation],
> extends ThLineSegments<
  BufferGeometry,
  LineBasicMaterial,
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<BoxHelper> {
    return BoxHelper;
  }

  public get type(): (string | 'BoxHelper') | undefined {
    return this._objRef?.type;
  }
}
