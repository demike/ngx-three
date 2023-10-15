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
import { Vector3, WebXRSpaceEventMap, XRTargetRaySpace } from 'three';
import { applyValue } from '../util';
import { ThGroup } from './ThGroup';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-xRTargetRaySpace',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThXRTargetRaySpace) },
  ],
})
export class ThXRTargetRaySpace<
  T extends XRTargetRaySpace = XRTargetRaySpace,
  TARGS = [],
> extends ThGroup<WebXRSpaceEventMap, T, TARGS> {
  public getType(): Type<XRTargetRaySpace> {
    return XRTargetRaySpace;
  }

  @Input()
  public set hasLinearVelocity(value: boolean) {
    if (this._objRef) {
      this._objRef.hasLinearVelocity = value;
    }
  }

  public get hasLinearVelocity(): boolean | undefined {
    return this._objRef?.hasLinearVelocity;
  }
  @Input()
  public set linearVelocity(
    value: Vector3 | [x: number, y: number, z: number],
  ) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.linearVelocity, value);
    }
  }
  public get linearVelocity(): Vector3 | undefined {
    return this._objRef?.linearVelocity;
  }
  @Input()
  public set hasAngularVelocity(value: boolean) {
    if (this._objRef) {
      this._objRef.hasAngularVelocity = value;
    }
  }

  public get hasAngularVelocity(): boolean | undefined {
    return this._objRef?.hasAngularVelocity;
  }
  @Input()
  public set angularVelocity(
    value: Vector3 | [x: number, y: number, z: number],
  ) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.angularVelocity, value);
    }
  }
  public get angularVelocity(): Vector3 | undefined {
    return this._objRef?.angularVelocity;
  }
}
