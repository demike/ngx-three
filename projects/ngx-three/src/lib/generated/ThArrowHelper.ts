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
import { ArrowHelper, Object3DEventMap } from 'three';
import { ColorRepresentation } from 'three/src/math/Color.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import { Line } from 'three/src/objects/Line.js';
import { Mesh } from 'three/src/objects/Mesh.js';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-arrowHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
  ],
})
export class ThArrowHelper<
  T extends ArrowHelper = ArrowHelper,
  TARGS = [
    dir?: Vector3,
    origin?: Vector3,
    length?: number,
    color?: ColorRepresentation,
    headLength?: number,
    headWidth?: number,
  ],
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<ArrowHelper> {
    return ArrowHelper;
  }

  public get type(): (string | 'ArrowHelper') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set line(value: Line) {
    if (this._objRef) {
      this._objRef.line = value;
    }
  }

  public get line(): Line | undefined {
    return this._objRef?.line;
  }
  @Input()
  public set cone(value: Mesh) {
    if (this._objRef) {
      this._objRef.cone = value;
    }
  }

  public get cone(): Mesh | undefined {
    return this._objRef?.cone;
  }
}
