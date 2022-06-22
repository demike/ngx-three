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
import { Vector3, XRGripSpace } from 'three';
import { applyValue } from '../util';
import { ThGroup } from './ThGroup';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-xRGripSpace',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThXRGripSpace) },
  ],
})
export class ThXRGripSpace<
  T extends XRGripSpace = XRGripSpace,
  TARGS = []
> extends ThGroup<T, TARGS> {
  public getType(): Type<XRGripSpace> {
    return XRGripSpace;
  }

  @Input()
  public set hasLinearVelocity(value: boolean) {
    if (this._objRef) {
      this._objRef.hasLinearVelocity = value;
    }
  }

  @Input()
  public set linearVelocity(
    value: Vector3 | [x: number, y: number, z: number]
  ) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.linearVelocity, value);
    }
  }
  @Input()
  public set hasAngularVelocity(value: boolean) {
    if (this._objRef) {
      this._objRef.hasAngularVelocity = value;
    }
  }

  @Input()
  public set angularVelocity(
    value: Vector3 | [x: number, y: number, z: number]
  ) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.angularVelocity, value);
    }
  }
}
