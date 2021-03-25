/* eslint-disable @typescript-eslint/naming-convention */
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
  T extends WireframeGeometry = WireframeGeometry,
  TARGS extends any[] = [geometry: Geometry | BufferGeometry]
> extends ThBufferGeometry<T, TARGS> {
  protected getType(): Type<WireframeGeometry> {
    return WireframeGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
