// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  BufferGeometry,
  Geometry,
  Material,
  Matrix4,
  Skeleton,
  SkinnedMesh,
} from 'three';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-skinnedMesh',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) },
  ],
})
export class ThSkinnedMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [
    geometry?: TGeometry,
    material?: TMaterial,
    useVertexTexture?: boolean
  ]
> extends ThMesh<TGeometry, TMaterial, TARGS> {
  public obj!: SkinnedMesh<TGeometry, TMaterial>;
  protected getType(): Type<SkinnedMesh<TGeometry, TMaterial>> {
    return SkinnedMesh;
  }

  @Input()
  public set bindMode(value: string) {
    if (this.obj) {
      this.obj.bindMode = value;
    }
  }

  @Input()
  public set bindMatrix(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number
        ]
  ) {
    if (this.obj) {
      this.obj.bindMatrix = applyValue<Matrix4>(this.obj.bindMatrix, value);
    }
  }
  @Input()
  public set bindMatrixInverse(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number
        ]
  ) {
    if (this.obj) {
      this.obj.bindMatrixInverse = applyValue<Matrix4>(
        this.obj.bindMatrixInverse,
        value
      );
    }
  }
  @Input()
  public set skeleton(value: Skeleton) {
    if (this.obj) {
      this.obj.skeleton = value;
    }
  }
}
