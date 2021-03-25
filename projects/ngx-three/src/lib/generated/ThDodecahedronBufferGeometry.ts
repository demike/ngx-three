/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { DodecahedronBufferGeometry } from 'three';
import { ThGeometry } from './ThGeometry';
import { ThPolyhedronBufferGeometry } from './ThPolyhedronBufferGeometry';

@Component({
  selector: 'th-dodecahedronBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThDodecahedronBufferGeometry),
    },
  ],
})
export class ThDodecahedronBufferGeometry<
  T extends DodecahedronBufferGeometry = DodecahedronBufferGeometry,
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThPolyhedronBufferGeometry<T, TARGS> {
  protected getType(): Type<DodecahedronBufferGeometry> {
    return DodecahedronBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
