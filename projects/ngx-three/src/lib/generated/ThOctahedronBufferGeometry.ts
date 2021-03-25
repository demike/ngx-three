/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { OctahedronBufferGeometry } from 'three';
import { ThGeometry } from './ThGeometry';
import { ThPolyhedronBufferGeometry } from './ThPolyhedronBufferGeometry';

@Component({
  selector: 'th-octahedronBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThOctahedronBufferGeometry),
    },
  ],
})
export class ThOctahedronBufferGeometry<
  T extends OctahedronBufferGeometry = OctahedronBufferGeometry,
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThPolyhedronBufferGeometry<T, TARGS> {
  protected getType(): Type<OctahedronBufferGeometry> {
    return OctahedronBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
