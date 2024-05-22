/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { NormalBufferAttributes, Vector3 } from 'three';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-convexGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThConvexGeometry),
    },
  ],
})
export class ThConvexGeometry<
  T extends ConvexGeometry = ConvexGeometry,
  TARGS = /* points? */ Vector3[],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<ConvexGeometry> {
    return ConvexGeometry;
  }
}
