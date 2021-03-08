/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Shape, ShapeBufferGeometry } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-shapeBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThShapeBufferGeometry),
    },
  ],
})
export class ThShapeBufferGeometry<
  TARGS extends any[] = [shapes: Shape | Shape[], curveSegments?: number]
> extends ThBufferGeometry<TARGS> {
  @Input()
  public obj!: ShapeBufferGeometry;
  protected getType(): Type<ShapeBufferGeometry> {
    return ShapeBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
