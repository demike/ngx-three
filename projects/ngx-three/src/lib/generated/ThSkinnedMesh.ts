/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  BufferGeometry,
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
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends SkinnedMesh<TGeometry, TMaterial> = SkinnedMesh<
    TGeometry,
    TMaterial
  >,
  TARGS extends any[] = [
    geometry?: TGeometry,
    material?: TMaterial,
    useVertexTexture?: boolean
  ]
> extends ThMesh<TGeometry, TMaterial, T, TARGS> {
  protected getType(): Type<SkinnedMesh<TGeometry, TMaterial>> {
    return SkinnedMesh;
  }

  @Input()
  public set bindMode(value: string) {
    if (this._objRef) {
      this._objRef.bindMode = value;
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
    if (this._objRef) {
      this._objRef.bindMatrix = applyValue<Matrix4>(
        this._objRef.bindMatrix,
        value
      );
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
    if (this._objRef) {
      this._objRef.bindMatrixInverse = applyValue<Matrix4>(
        this._objRef.bindMatrixInverse,
        value
      );
    }
  }
  @Input()
  public set skeleton(value: Skeleton) {
    if (this._objRef) {
      this._objRef.skeleton = value;
    }
  }
}
