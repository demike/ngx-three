/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { Object3DEventMap, XRJointSpace } from 'three';
import { ThGroup } from './ThGroup';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-xRJointSpace',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThXRJointSpace) },
  ],
})
export class ThXRJointSpace<
  T extends XRJointSpace = XRJointSpace,
  TARGS = [],
> extends ThGroup<Object3DEventMap, T, TARGS> {
  public getType(): Type<XRJointSpace> {
    return XRJointSpace;
  }

  public get jointRadius(): (number | undefined) | undefined {
    return this._objRef?.jointRadius;
  }
}
