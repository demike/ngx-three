/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle, jsdoc/newline-after-description */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { NormalBufferAttributes, TorusKnotGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-torusKnotGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTorusKnotGeometry),
    },
  ],
})
export class ThTorusKnotGeometry<
  T extends TorusKnotGeometry = TorusKnotGeometry,
  TARGS = [
    radius?: number,
    tube?: number,
    tubularSegments?: number,
    radialSegments?: number,
    p?: number,
    q?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<TorusKnotGeometry> {
    return TorusKnotGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'TorusKnotGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly radius: number;
        readonly tube: number;
        readonly tubularSegments: number;
        readonly radialSegments: number;
        readonly p: number;
        readonly q: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
