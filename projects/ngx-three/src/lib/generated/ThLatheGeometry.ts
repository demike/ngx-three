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
import { LatheGeometry, NormalBufferAttributes } from 'three';
import { Vector2 } from 'three/src/math/Vector2.js';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-latheGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThLatheGeometry),
    },
  ],
})
export class ThLatheGeometry<
  T extends LatheGeometry = LatheGeometry,
  TARGS = [
    points?: Vector2[],
    segments?: number,
    phiStart?: number,
    phiLength?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<LatheGeometry> {
    return LatheGeometry;
  }

  public get type(): (string | 'LatheGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly points: Vector2[];
        readonly segments: number;
        readonly phiStart: number;
        readonly phiLength: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
