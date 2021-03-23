/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { IcosahedronBufferGeometry } from 'three';
import { ThGeometry } from './ThGeometry';
import { ThPolyhedronBufferGeometry } from './ThPolyhedronBufferGeometry';

@Component({
  selector: 'th-icosahedronBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThIcosahedronBufferGeometry)
    }
  ]
})
export class ThIcosahedronBufferGeometry<
  TARGS extends any[] = [radius?: number, detail?: number]
> extends ThPolyhedronBufferGeometry<TARGS> {
  @Input()
  public objRef!: IcosahedronBufferGeometry;
  protected getType(): Type<IcosahedronBufferGeometry> {
    return IcosahedronBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }
}
