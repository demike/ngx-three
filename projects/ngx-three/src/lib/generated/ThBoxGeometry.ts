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
import {
  BoxGeometry,
  BufferGeometryEventMap,
  NormalBufferAttributes,
} from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-boxGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThBufferGeometry, useExisting: forwardRef(() => ThBoxGeometry) },
  ],
})
export class ThBoxGeometry<
  T extends BoxGeometry = BoxGeometry,
  TARGS = [
    width?: number,
    height?: number,
    depth?: number,
    widthSegments?: number,
    heightSegments?: number,
    depthSegments?: number,
  ],
> extends ThBufferGeometry<
  NormalBufferAttributes,
  BufferGeometryEventMap,
  T,
  TARGS
> {
  public getType(): Type<BoxGeometry> {
    return BoxGeometry;
  }

  public get type(): (string | 'BoxGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly width: number;
        readonly height: number;
        readonly depth: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
        readonly depthSegments: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
