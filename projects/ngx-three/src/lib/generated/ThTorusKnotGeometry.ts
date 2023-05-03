/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { TorusKnotGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-torusKnotGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTorusKnotGeometry)
    }
  ]
})
export class ThTorusKnotGeometry<
  T extends TorusKnotGeometry = TorusKnotGeometry,
  TARGS = [radius?: number, tube?: number, tubularSegments?: number, radialSegments?: number, p?: number, q?: number]
> extends ThBufferGeometry<T, TARGS> {
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
