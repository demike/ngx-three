import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Shape, ShapeGeometry } from 'three';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-shapeGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThGeometry, useExisting: forwardRef(() => ThShapeGeometry) },
  ],
})
export class ThShapeGeometry<
  TARGS extends any[] = [shapes: Shape | Shape[], curveSegments?: number]
> extends ThGeometry<TARGS> {
  public obj!: ShapeGeometry;
  protected getType(): Type<ShapeGeometry> {
    return ShapeGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
