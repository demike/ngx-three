/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { ExtrudeGeometry, ExtrudeGeometryOptions, Shape } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-extrudeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThGeometry, useExisting: forwardRef(() => ThExtrudeGeometry) }]
})
export class ThExtrudeGeometry<
  TARGS extends any[] = [shapes: Shape | Shape[], options?: ExtrudeGeometryOptions]
> extends ThGeometry<TARGS> {
  @Input()
  public obj!: ExtrudeGeometry;
  protected getType(): Type<ExtrudeGeometry> {
    return ExtrudeGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
