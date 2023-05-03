/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Box3, BufferGeometry, Material, Matrix4, Skeleton, SkinnedMesh, Sphere, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-skinnedMesh',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) }]
})
export class ThSkinnedMesh<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends SkinnedMesh<TGeometry, TMaterial> = SkinnedMesh<TGeometry, TMaterial>,
  TARGS = [geometry?: TGeometry, material?: TMaterial, useVertexTexture?: boolean]
> extends ThMesh<TGeometry, TMaterial, T, TARGS> {
  public getType(): Type<SkinnedMesh<TGeometry, TMaterial>> {
    return SkinnedMesh;
  }

  // @ts-ignore
  public get isSkinnedMesh(): true | undefined {
    return this._objRef?.isSkinnedMesh;
  }
  // @ts-ignore
  public get type(): (string | 'SkinnedMesh') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set bindMode(value: 'attached' | 'detached') {
    if (this._objRef) {
      this._objRef.bindMode = value;
    }
  }

  // @ts-ignore
  public get bindMode(): ('attached' | 'detached') | undefined {
    return this._objRef?.bindMode;
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
      this._objRef.bindMatrix = applyValue<Matrix4>(this._objRef.bindMatrix, value);
    }
  }
  // @ts-ignore
  public get bindMatrix(): Matrix4 | undefined {
    return this._objRef?.bindMatrix;
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
      this._objRef.bindMatrixInverse = applyValue<Matrix4>(this._objRef.bindMatrixInverse, value);
    }
  }
  // @ts-ignore
  public get bindMatrixInverse(): Matrix4 | undefined {
    return this._objRef?.bindMatrixInverse;
  }
  @Input()
  public set boundingBox(value: Box3 | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.boundingBox = applyValue<Box3>(this._objRef.boundingBox, value);
    }
  }
  // @ts-ignore
  public get boundingBox(): Box3 | undefined {
    return this._objRef?.boundingBox;
  }
  @Input()
  public set boundingSphere(value: Sphere | [center: Vector3, radius: number]) {
    if (this._objRef) {
      this._objRef.boundingSphere = applyValue<Sphere>(this._objRef.boundingSphere, value);
    }
  }
  // @ts-ignore
  public get boundingSphere(): Sphere | undefined {
    return this._objRef?.boundingSphere;
  }
  @Input()
  public set skeleton(value: Skeleton) {
    if (this._objRef) {
      this._objRef.skeleton = value;
    }
  }

  // @ts-ignore
  public get skeleton(): Skeleton | undefined {
    return this._objRef?.skeleton;
  }
}
