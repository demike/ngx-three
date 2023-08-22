/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
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

  // @ts-ignore
  public get type(): (string | 'CapsuleGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
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
