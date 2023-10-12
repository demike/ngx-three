/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { AxesHelper, BufferGeometry, Material } from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-axesHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAxesHelper) },
  ],
})
export class ThAxesHelper<
  T extends AxesHelper = AxesHelper,
  TARGS = /* size? */ number,
> extends ThLineSegments<BufferGeometry, Material | Material[], T, TARGS> {
  public getType(): Type<AxesHelper> {
    return AxesHelper;
  }

  public get type(): (string | 'AxesHelper') | undefined {
    return this._objRef?.type;
  }
}
