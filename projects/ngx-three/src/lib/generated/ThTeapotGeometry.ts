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
import { BufferGeometryEventMap, NormalBufferAttributes } from 'three';
import { TeapotGeometry } from 'three/examples/jsm/geometries/TeapotGeometry.js';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-teapotGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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
> extends ThBufferGeometry<
  NormalBufferAttributes,
  BufferGeometryEventMap,
  T,
  TARGS
> {
  public getType(): Type<TeapotGeometry> {
    return TeapotGeometry;
  }
}
