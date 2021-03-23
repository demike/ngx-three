/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Shape, ShapeGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-shapeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThGeometry, useExisting: forwardRef(() => ThShapeGeometry) }]
})
export class ThShapeGeometry<TARGS extends any[] = [shapes: Shape | Shape[], curveSegments?: number]> extends ThGeometry<TARGS> {
  @Input()
  public objRef!: ShapeGeometry;
  protected getType(): Type<ShapeGeometry> {
    return ShapeGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }
}
