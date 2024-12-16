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
import { CircleGeometry, NormalBufferAttributes } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-circleGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThCircleGeometry),
    },
  ],
})
export class ThCircleGeometry<
  T extends CircleGeometry = CircleGeometry,
  TARGS = [
    radius?: number,
    segments?: number,
    thetaStart?: number,
    thetaLength?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<CircleGeometry> {
    return CircleGeometry;
  }

  public get type(): (string | 'CircleGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly radius: number;
        readonly segments: number;
        readonly thetaStart: number;
        readonly thetaLength: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
