/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { PolyhedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-polyhedronGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThPolyhedronGeometry)
    }
  ]
})
export class ThPolyhedronGeometry<
  T extends PolyhedronGeometry = PolyhedronGeometry,
  TARGS = [vertices?: number[], indices?: number[], radius?: number, detail?: number]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<PolyhedronGeometry> {
    return PolyhedronGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'PolyhedronGeometry') | undefined {
    return this._objRef?.type;
  }
  // @ts-ignore
  public get parameters():
    | {
        readonly vertices: number[];
        readonly indices: number[];
        readonly radius: number;
        readonly detail: number;
      }
    | undefined {
    return this._objRef?.parameters;
  }
}
