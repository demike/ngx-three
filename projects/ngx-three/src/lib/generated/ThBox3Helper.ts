/* eslint-disable @typescript-eslint/ban-types */
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
import {
  Box3,
  Box3Helper,
  BufferGeometry,
  Material,
  Object3DEventMap,
} from 'three';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-box3Helper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) },
  ],
})
export class ThBox3Helper<
  T extends Box3Helper = Box3Helper,
  TARGS = [box: Box3, color?: ColorRepresentation],
> extends ThLineSegments<
  BufferGeometry,
  Material | Material[],
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<Box3Helper> {
    return Box3Helper;
  }

  public get type(): (string | 'Box3Helper') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set box(value: Box3 | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.box = applyValue<Box3>(this._objRef.box, value);
    }
  }
  public get box(): Box3 | undefined {
    return this._objRef?.box;
  }
}
