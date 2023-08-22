/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { NormalBufferAttributes } from 'three';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-teapotGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTeapotGeometry),
    },
  ],
})
export class ThTeapotGeometry<
  T extends TeapotGeometry = TeapotGeometry,
  TARGS = [
    size?: number,
    segments?: number,
    bottom?: boolean,
    lid?: boolean,
    body?: boolean,
    fitLid?: boolean,
    blinn?: boolean,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<TeapotGeometry> {
    return TeapotGeometry;
  }
}
