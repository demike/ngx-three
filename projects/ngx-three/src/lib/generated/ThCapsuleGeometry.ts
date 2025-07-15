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
  CapsuleGeometry,
  NormalBufferAttributes,
} from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-capsuleGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThCapsuleGeometry),
    },
  ],
})
export class ThCapsuleGeometry<
  T extends CapsuleGeometry = CapsuleGeometry,
  TARGS = [
    radius?: number,
    height?: number,
    capSegments?: number,
    radialSegments?: number,
    heightSegments?: number,
  ],
> extends ThBufferGeometry<
  NormalBufferAttributes,
  BufferGeometryEventMap,
  T,
  TARGS
> {
  public getType(): Type<CapsuleGeometry> {
    return CapsuleGeometry;
  }

  public get type(): (string | 'CapsuleGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly radius: number;
        readonly height: number;
        readonly capSegments: number;
        readonly radialSegments: number;
        readonly heightSegments: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
