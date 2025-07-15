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
import {
  BufferGeometryEventMap,
  NormalBufferAttributes,
  PlaneGeometry,
} from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-planeGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
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
> extends ThBufferGeometry<
  NormalBufferAttributes,
  BufferGeometryEventMap,
  T,
  TARGS
> {
  public getType(): Type<PlaneGeometry> {
    return PlaneGeometry;
  }

  public get type(): (string | 'PlaneGeometry') | undefined {
    return this._objRef?.type;
  }
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
