/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Type,
} from '@angular/core';
import { BoxLineGeometry } from 'three/examples/jsm/geometries/BoxLineGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-boxLineGeometry',
  template: '',
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
    depthSegments?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<BoxLineGeometry> {
    return BoxLineGeometry;
  }
}
