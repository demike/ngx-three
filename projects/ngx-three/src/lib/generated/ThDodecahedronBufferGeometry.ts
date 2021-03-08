/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
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
      useExisting: forwardRef(() => ThDodecahedronBufferGeometry)
    }
  ]
})
export class ThDodecahedronBufferGeometry<
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThPolyhedronBufferGeometry<TARGS> {
  @Input()
  public obj!: DodecahedronBufferGeometry;
  protected getType(): Type<DodecahedronBufferGeometry> {
    return DodecahedronBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
