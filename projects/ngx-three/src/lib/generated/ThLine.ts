/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { BufferGeometry, Geometry, Line, Material } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-line',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLine) }]
})
export class ThLine<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry?: TGeometry, material?: TMaterial]
> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: Line<TGeometry, TMaterial>;
  protected getType(): Type<Line<TGeometry, TMaterial>> {
    return Line;
  }

  @Input()
  public set geometry(value: TGeometry) {
    if (this.objRef) {
      this.objRef.geometry = value;
    }
  }

  @Input()
  public set material(value: TMaterial) {
    if (this.objRef) {
      this.objRef.material = value;
    }
  }

  @Input()
  public set type(value: 'Line' | 'LineLoop' | 'LineSegments' | string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set morphTargetInfluences(value: number[]) {
    if (this.objRef) {
      this.objRef.morphTargetInfluences = value;
    }
  }

  @Input()
  public set morphTargetDictionary(value: { [key: string]: number }) {
    if (this.objRef) {
      this.objRef.morphTargetDictionary = value;
    }
  }
}
