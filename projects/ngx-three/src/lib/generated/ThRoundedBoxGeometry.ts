/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
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
    standalone: false
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
