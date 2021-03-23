/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { ArrowHelper, Color, Line, Mesh, Vector3 } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-arrowHelper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) }]
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
  public objRef!: ArrowHelper;
  protected getType(): Type<ArrowHelper> {
    return ArrowHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set line(value: Line) {
    if (this.objRef) {
      this.objRef.line = value;
    }
  }

  @Input()
  public set cone(value: Mesh) {
    if (this.objRef) {
      this.objRef.cone = value;
    }
  }
}
