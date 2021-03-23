/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { BufferGeometry, Geometry, Material, Matrix4, Skeleton, SkinnedMesh } from 'three';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-skinnedMesh',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) }]
})
export class ThSkinnedMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry?: TGeometry, material?: TMaterial, useVertexTexture?: boolean]
> extends ThMesh<TGeometry, TMaterial, TARGS> {
  @Input()
  public objRef!: SkinnedMesh<TGeometry, TMaterial>;
  protected getType(): Type<SkinnedMesh<TGeometry, TMaterial>> {
    return SkinnedMesh;
  }

  @Input()
  public set bindMode(value: string) {
    if (this.objRef) {
      this.objRef.bindMode = value;
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
    if (this.objRef) {
      this.objRef.bindMatrix = applyValue<Matrix4>(this.objRef.bindMatrix, value);
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
    if (this.objRef) {
      this.objRef.bindMatrixInverse = applyValue<Matrix4>(this.objRef.bindMatrixInverse, value);
    }
  }
  @Input()
  public set skeleton(value: Skeleton) {
    if (this.objRef) {
      this.objRef.skeleton = value;
    }
  }
}
