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
import { BufferGeometry, Material, Plane, PlaneHelper, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-planeHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
  ],
})
export class ThPlaneHelper<
  T extends PlaneHelper = PlaneHelper,
  TARGS = [plane: Plane, size?: number, hex?: number]
> extends ThLineSegments<BufferGeometry, Material | Material[], T, TARGS> {
  public getType(): Type<PlaneHelper> {
    return PlaneHelper;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set plane(value: Plane | [normal: Vector3, constant: number]) {
    if (this._objRef) {
      this._objRef.plane = applyValue<Plane>(this._objRef.plane, value);
    }
  }
  @Input()
  public set size(value: number) {
    if (this._objRef) {
      this._objRef.size = value;
    }
  }
}
