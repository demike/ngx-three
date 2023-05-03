/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { TorusGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-torusGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTorusGeometry)
    }
  ]
})
export class ThTorusGeometry<
  T extends TorusGeometry = TorusGeometry,
  TARGS = [radius?: number, tube?: number, radialSegments?: number, tubularSegments?: number, arc?: number]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<TorusGeometry> {
    return TorusGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'TorusGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
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
