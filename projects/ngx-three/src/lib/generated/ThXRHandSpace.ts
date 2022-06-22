/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { XRHandSpace } from 'three';
import { ThGroup } from './ThGroup';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-xRHandSpace',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThXRHandSpace) },
  ],
})
export class ThXRHandSpace<
  T extends XRHandSpace = XRHandSpace,
  TARGS = []
> extends ThGroup<T, TARGS> {
  public getType(): Type<XRHandSpace> {
    return XRHandSpace;
  }
}
