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
import { DodecahedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';

@Component({
    selector: 'th-dodecahedronGeometry',
    template: '<ng-content/>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: ThBufferGeometry,
            useExisting: forwardRef(() => ThDodecahedronGeometry),
        },
    ],
    standalone: false
})
export class ThDodecahedronGeometry<
  T extends DodecahedronGeometry = DodecahedronGeometry,
  TARGS = [radius?: number, detail?: number],
> extends ThPolyhedronGeometry<T, TARGS> {
  public getType(): Type<DodecahedronGeometry> {
    return DodecahedronGeometry;
  }

  public get type(): (string | 'DodecahedronGeometry') | undefined {
    return this._objRef?.type;
  }
}
