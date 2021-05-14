/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { BufferGeometry, WireframeGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-wireframeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThWireframeGeometry)
    }
  ]
})
export class ThWireframeGeometry<
  T extends WireframeGeometry = WireframeGeometry,
  TARGS extends any[] = [geometry: BufferGeometry]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<WireframeGeometry> {
    return WireframeGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
