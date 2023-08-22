/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { BoxGeometry, NormalBufferAttributes } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-boxGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<BoxGeometry> {
    return BoxGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'BoxGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
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
