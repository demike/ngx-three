/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { AxesHelper, BufferGeometry, Material, Object3DEventMap } from 'three';
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
> extends ThLineSegments<
  BufferGeometry,
  Material | Material[],
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<AxesHelper> {
    return AxesHelper;
  }

  public get type(): (string | 'AxesHelper') | undefined {
    return this._objRef?.type;
  }
}
