/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry';
import { ThBoxGeometry } from './ThBoxGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-roundedBoxGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThRoundedBoxGeometry),
    },
  ],
})
export class ThRoundedBoxGeometry<
  T extends RoundedBoxGeometry = RoundedBoxGeometry,
  TARGS = [
    width?: number,
    height?: number,
    depth?: number,
    segments?: number,
    radius?: number,
  ],
> extends ThBoxGeometry<T, TARGS> {
  public getType(): Type<RoundedBoxGeometry> {
    return RoundedBoxGeometry;
  }
}
