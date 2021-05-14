/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { ExtrudeGeometry, ExtrudeGeometryOptions, Shape } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';

@Component({
  selector: 'th-extrudeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThBufferGeometry,
      useExisting: forwardRef(() => ThExtrudeGeometry)
    }
  ]
})
export class ThExtrudeGeometry<
  T extends ExtrudeGeometry = ExtrudeGeometry,
  TARGS extends any[] = [shapes: Shape | Shape[], options?: ExtrudeGeometryOptions]
> extends ThBufferGeometry<T, TARGS> {
  public getType(): Type<ExtrudeGeometry> {
    return ExtrudeGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
