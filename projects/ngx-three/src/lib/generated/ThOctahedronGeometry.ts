/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { OctahedronGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThPolyhedronGeometry } from './ThPolyhedronGeometry';

@Component({
  selector: 'th-octahedronGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThOctahedronGeometry)
    }
  ]
})
export class ThOctahedronGeometry<
  T extends OctahedronGeometry = OctahedronGeometry,
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThPolyhedronGeometry<T, TARGS> {
  public getType(): Type<OctahedronGeometry> {
    return OctahedronGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
