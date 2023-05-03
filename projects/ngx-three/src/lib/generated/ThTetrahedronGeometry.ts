/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Type } from '@angular/core';
import { TetrahedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';

@Component({
  selector: 'th-tetrahedronGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThTetrahedronGeometry)
    }
  ]
})
export class ThTetrahedronGeometry<
  T extends TetrahedronGeometry = TetrahedronGeometry,
  TARGS = [radius?: number, detail?: number]
> extends ThPolyhedronGeometry<T, TARGS> {
  public getType(): Type<TetrahedronGeometry> {
    return TetrahedronGeometry;
  }

  // @ts-ignore
  public get type(): (string | 'TetrahedronGeometry') | undefined {
    return this._objRef?.type;
  }
}
