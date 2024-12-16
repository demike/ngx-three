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
import { NormalBufferAttributes, SphereGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-sphereGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThSphereGeometry),
    },
  ],
})
export class ThSphereGeometry<
  T extends SphereGeometry = SphereGeometry,
  TARGS = [
    radius?: number,
    widthSegments?: number,
    heightSegments?: number,
    phiStart?: number,
    phiLength?: number,
    thetaStart?: number,
    thetaLength?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<SphereGeometry> {
    return SphereGeometry;
  }

  public get type(): (string | 'SphereGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly radius: number;
        readonly widthSegments: number;
        readonly heightSegments: number;
        readonly phiStart: number;
        readonly phiLength: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
