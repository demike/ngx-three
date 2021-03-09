/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ExtrudeBufferGeometry, ExtrudeGeometryOptions, Shape } from 'three';
import { ThBufferGeometry } from './ThBufferGeometry';
import { ThGeometry } from './ThGeometry';

@Component({
  selector: 'th-extrudeBufferGeometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThGeometry,
      useExisting: forwardRef(() => ThExtrudeBufferGeometry),
    },
  ],
})
export class ThExtrudeBufferGeometry<
  TARGS extends any[] = [
    shapes: Shape | Shape[],
    options?: ExtrudeGeometryOptions
  ]
> extends ThBufferGeometry<TARGS> {
  @Input()
  public obj!: ExtrudeBufferGeometry;
  protected getType(): Type<ExtrudeBufferGeometry> {
    return ExtrudeBufferGeometry;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
