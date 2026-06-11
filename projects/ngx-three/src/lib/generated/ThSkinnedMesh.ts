/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { Box3, Matrix4, SkinnedMesh } from 'three';
import { BindMode } from 'three/src/constants.js';
import { BufferGeometry } from 'three/src/core/BufferGeometry.js';
import { Object3DEventMap } from 'three/src/core/Object3D.js';
import { Material } from 'three/src/materials/Material.js';
import { Sphere } from 'three/src/math/Sphere.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import { Skeleton } from 'three/src/objects/Skeleton.js';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-skinnedMesh',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) },
  ],
})
export class ThSkinnedMesh<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TEventMap extends Object3DEventMap = Object3DEventMap,
  T extends SkinnedMesh<TGeometry, TMaterial, TEventMap> = SkinnedMesh<
    TGeometry,
    TMaterial,
    TEventMap
  >,
  TARGS = [
    geometry?: TGeometry,
    material?: TMaterial,
    useVertexTexture?: boolean,
  ],
> extends ThMesh<TGeometry, TMaterial, TEventMap, T, TARGS> {
  public getType(): Type<SkinnedMesh<TGeometry, TMaterial, TEventMap>> {
    return SkinnedMesh;
  }

  public get isSkinnedMesh(): true | undefined {
    return this._objRef?.isSkinnedMesh;
  }
  public get type(): (string | 'SkinnedMesh') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set bindMode(value: BindMode) {
    if (this._objRef) {
      this._objRef.bindMode = value;
    }
  }

  public get bindMode(): BindMode | undefined {
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
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.bindMatrix = applyValue<Matrix4>(
        this._objRef.bindMatrix,
        value,
      );
    }
  }
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
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.bindMatrixInverse = applyValue<Matrix4>(
        this._objRef.bindMatrixInverse,
        value,
      );
    }
  }
  public get bindMatrixInverse(): Matrix4 | undefined {
    return this._objRef?.bindMatrixInverse;
  }
  @Input()
  public set boundingBox(value: Box3 | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.boundingBox = applyValue<Box3>(
        this._objRef.boundingBox,
        value,
      );
    }
  }
  public get boundingBox(): Box3 | undefined {
    return this._objRef?.boundingBox;
  }
  @Input()
  public set boundingSphere(value: Sphere | [center: Vector3, radius: number]) {
    if (this._objRef) {
      this._objRef.boundingSphere = applyValue<Sphere>(
        this._objRef.boundingSphere,
        value,
      );
    }
  }
  public get boundingSphere(): Sphere | undefined {
    return this._objRef?.boundingSphere;
  }
  @Input()
  public set skeleton(value: Skeleton) {
    if (this._objRef) {
      this._objRef.skeleton = value;
    }
  }

  public get skeleton(): Skeleton | undefined {
    return this._objRef?.skeleton;
  }
}
