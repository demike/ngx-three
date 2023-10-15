/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import {
  WebXRSpaceEventMap,
  XRHandInputState,
  XRHandJoints,
  XRHandSpace,
} from 'three';
import { ThGroup } from './ThGroup';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-xRHandSpace',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThXRHandSpace) },
  ],
})
export class ThXRHandSpace<
  T extends XRHandSpace = XRHandSpace,
  TARGS = [],
> extends ThGroup<WebXRSpaceEventMap, T, TARGS> {
  public getType(): Type<XRHandSpace> {
    return XRHandSpace;
  }

  public get joints(): Partial<XRHandJoints> | undefined {
    return this._objRef?.joints;
  }
  public get inputState(): XRHandInputState | undefined {
    return this._objRef?.inputState;
  }
}
