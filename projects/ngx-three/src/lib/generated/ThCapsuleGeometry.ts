/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { CapsuleGeometry, NormalBufferAttributes } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-capsuleGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    length?: number,
    capSegments?: number,
    radialSegments?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<CapsuleGeometry> {
    return CapsuleGeometry;
  }

  public get type(): (string | 'CapsuleGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly radius: number;
        readonly length: number;
        readonly capSegments: number;
        readonly radialSegments: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
