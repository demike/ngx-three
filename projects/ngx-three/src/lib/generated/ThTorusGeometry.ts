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
import { NormalBufferAttributes, TorusGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-torusGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTorusGeometry),
    },
  ],
})
export class ThTorusGeometry<
  T extends TorusGeometry = TorusGeometry,
  TARGS = [
    radius?: number,
    tube?: number,
    radialSegments?: number,
    tubularSegments?: number,
    arc?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<TorusGeometry> {
    return TorusGeometry;
  }

  public get type(): (string | 'TorusGeometry') | undefined {
    return this._objRef?.type;
  }
  public get parameters():
    | {
        readonly radius: number;
        readonly tube: number;
        readonly radialSegments: number;
        readonly tubularSegments: number;
        readonly arc: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
