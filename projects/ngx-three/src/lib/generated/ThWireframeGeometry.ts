/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { BufferGeometry, Geometry, WireframeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-wireframeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThWireframeGeometry) },
  ],
})
export class ThWireframeGeometry<
  TARGS extends any[] = [geometry: Geometry | BufferGeometry]
> extends ThBufferGeometry<TARGS> {
  @Input()
  public obj!: WireframeGeometry;
  protected getType(): Type<WireframeGeometry> {
    return WireframeGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
