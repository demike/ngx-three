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
import { NormalBufferAttributes, PolyhedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-polyhedronGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThPolyhedronGeometry),
    },
  ],
})
export class ThPolyhedronGeometry<
  T extends PolyhedronGeometry = PolyhedronGeometry,
  TARGS = [
    vertices?: number[],
    indices?: number[],
    radius?: number,
    detail?: number,
  ],
> extends ThBufferGeometry<NormalBufferAttributes, T, TARGS> {
  public getType(): Type<PolyhedronGeometry> {
    return PolyhedronGeometry;
  }

  public get type(): (string | 'PolyhedronGeometry') | undefined {
    return this._objRef?.type;
  }
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
