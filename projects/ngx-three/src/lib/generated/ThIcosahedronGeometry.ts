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
import { IcosahedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';

@Component({
  selector: 'th-icosahedronGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThIcosahedronGeometry),
    },
  ],
})
export class ThIcosahedronGeometry<
  T extends IcosahedronGeometry = IcosahedronGeometry,
  TARGS = [radius?: number, detail?: number],
> extends ThPolyhedronGeometry<T, TARGS> {
  public getType(): Type<IcosahedronGeometry> {
    return IcosahedronGeometry;
  }

  public get type(): (string | 'IcosahedronGeometry') | undefined {
    return this._objRef?.type;
  }
}
