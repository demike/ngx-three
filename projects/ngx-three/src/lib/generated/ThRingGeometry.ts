/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { RingGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-ringGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThRingGeometry)
    }
  ]
})
export class ThRingGeometry<
  T extends RingGeometry = RingGeometry,
  TARGS = [
    innerRadius?: number,
    outerRadius?: number,
    thetaSegments?: number,
    phiSegments?: number,
    thetaStart?: number,
    thetaLength?: number
  ]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<RingGeometry> {
    return RingGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'RingGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly innerRadius: number;
        readonly outerRadius: number;
        readonly thetaSegments: number;
        readonly phiSegments: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
