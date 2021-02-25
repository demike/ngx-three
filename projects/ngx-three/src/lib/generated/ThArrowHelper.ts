// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ArrowHelper, Color, Line, Mesh, Vector3 } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-arrowHelper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
  ],
})
export class ThArrowHelper<
  TARGS extends any[] = [
    dir: Vector3,
    origin?: Vector3,
    length?: number,
    color?: Color | string | number,
    headLength?: number,
    headWidth?: number
  ]
> extends ThObject3D<TARGS> {
  @Input()
  public obj!: ArrowHelper;
  protected getType(): Type<ArrowHelper> {
    return ArrowHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set line(value: Line) {
    if (this.obj) {
      this.obj.line = value;
    }
  }

  @Input()
  public set cone(value: Mesh) {
    if (this.obj) {
      this.obj.cone = value;
    }
  }
}
