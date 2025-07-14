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
import { OctahedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';

@Component({
  selector: 'th-octahedronGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThOctahedronGeometry),
    },
  ],
})
export class ThOctahedronGeometry<
  T extends OctahedronGeometry = OctahedronGeometry,
  TARGS = [radius?: number, detail?: number],
> extends ThPolyhedronGeometry<T, TARGS> {
  public getType(): Type<OctahedronGeometry> {
    return OctahedronGeometry;
  }

  public get type(): (string | 'OctahedronGeometry') | undefined {
    return this._objRef?.type;
  }
}
