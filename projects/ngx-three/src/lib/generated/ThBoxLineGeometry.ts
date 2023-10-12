/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { NormalBufferAttributes } from 'three';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-boxLineGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThBoxLineGeometry),
    },
  ],
})
export class ThBoxLineGeometry<
  T extends BoxLineGeometry = BoxLineGeometry,
  TARGS = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<BoxLineGeometry> {
    return BoxLineGeometry;
  }
}
