/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { BufferGeometry, Geometry, Material, Plane, PlaneHelper, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-planeHelper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) }]
})
export class ThPlaneHelper<TARGS extends any[] = [plane: Plane, size?: number, hex?: number]> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  @Input()
  public objRef!: PlaneHelper;
  protected getType(): Type<PlaneHelper> {
    return PlaneHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set plane(value: Plane | [normal: Vector3, constant: number]) {
    if (this.objRef) {
      this.objRef.plane = applyValue<Plane>(this.objRef.plane, value);
    }
  }
  @Input()
  public set size(value: number) {
    if (this.objRef) {
      this.objRef.size = value;
    }
  }
}
