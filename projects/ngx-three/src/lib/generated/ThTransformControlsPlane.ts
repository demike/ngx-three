/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { BufferGeometry, Material, Quaternion, Vector3 } from 'three';
import { TransformControlsPlane } from 'three/examples/jsm/controls/TransformControls';
import { ThControlBase } from '../ThControlBase';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';

@Component({
    selector: 'th-transformControlsPlane',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ThControlBase,
            useExisting: forwardRef(() => ThTransformControlsPlane),
        },
    ],
    standalone: false
})
export class ThTransformControlsPlane<
  T extends TransformControlsPlane = TransformControlsPlane,
  TARGS = [],
> extends ThMesh<BufferGeometry, Material | Material[], T, TARGS> {
  public getType(): Type<TransformControlsPlane> {
    return TransformControlsPlane;
  }

  @Input()
  public set type(value: 'TransformControlsPlane') {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set isTransformControlsPlane(value: true) {
    if (this._objRef) {
      this._objRef.isTransformControlsPlane = value;
    }
  }

  @Input()
  public set mode(value: 'translate' | 'scale' | 'rotate') {
    if (this._objRef) {
      this._objRef.mode = value;
    }
  }

  @Input()
  public set axis(value: 'X' | 'Y' | 'Z' | 'XY' | 'YZ' | 'XZ' | 'XYZ' | 'E') {
    if (this._objRef) {
      this._objRef.axis = value;
    }
  }

  @Input()
  public set space(value: 'local' | 'world') {
    if (this._objRef) {
      this._objRef.space = value;
    }
  }

  @Input()
  public set eye(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.eye = applyValue<Vector3>(this._objRef.eye, value);
    }
  }
  @Input()
  public set worldPosition(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.worldPosition = applyValue<Vector3>(this._objRef.worldPosition, value);
    }
  }
  @Input()
  public set worldQuaternion(value: Quaternion | [x: number, y: number, z: number, w: number]) {
    if (this._objRef) {
      this._objRef.worldQuaternion = applyValue<Quaternion>(this._objRef.worldQuaternion, value);
    }
  }
}
