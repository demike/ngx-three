/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { NormalBufferAttributes, PlaneGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-planeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThPlaneGeometry),
    },
  ],
})
export class ThPlaneGeometry<
  T extends PlaneGeometry = PlaneGeometry,
  TARGS = [
    width?: number,
    height?: number,
    widthSegments?: number,
    heightSegments?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<PlaneGeometry> {
    return PlaneGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'PlaneGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly width: number;
        readonly height: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
