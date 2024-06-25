/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, Type, forwardRef } from '@angular/core';
import { BatchedMesh, Box3, BufferGeometry, Camera, Material, Object3DEventMap, Sphere, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-batchedMesh',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThBatchedMesh) }],
})
export class ThBatchedMesh<
  T extends BatchedMesh = BatchedMesh,
  TARGS = [maxGeometryCount: number, maxVertexCount: number, maxIndexCount?: number, material?: Material],
> extends ThMesh<BufferGeometry, Material, Object3DEventMap, T, TARGS> {
  public getType(): Type<BatchedMesh> {
    return BatchedMesh;
  }

  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.boundingBox = applyValue<Box3 | null>(this._objRef.boundingBox, value);
    }
  }
  public get boundingBox(): (Box3 | null) | undefined {
    return this._objRef?.boundingBox;
  }
  @Input()
  public set boundingSphere(value: Sphere | null | [center: Vector3, radius: number]) {
    if (this._objRef) {
      this._objRef.boundingSphere = applyValue<Sphere | null>(this._objRef.boundingSphere, value);
    }
  }
  public get boundingSphere(): (Sphere | null) | undefined {
    return this._objRef?.boundingSphere;
  }
  @Input()
  public set customSort(
    value: ((this: any, list: Array<{ start: number; count: number; z: number }>, camera: Camera) => void) | null,
  ) {
    if (this._objRef) {
      this._objRef.customSort = value;
    }
  }

  public get customSort():
    | (((this: any, list: Array<{ start: number; count: number; z: number }>, camera: Camera) => void) | null)
    | undefined {
    return this._objRef?.customSort;
  }
  @Input()
  public set perObjectFrustumCulled(value: boolean) {
    if (this._objRef) {
      this._objRef.perObjectFrustumCulled = value;
    }
  }

  public get perObjectFrustumCulled(): boolean | undefined {
    return this._objRef?.perObjectFrustumCulled;
  }
  @Input()
  public set sortObjects(value: boolean) {
    if (this._objRef) {
      this._objRef.sortObjects = value;
    }
  }

  public get sortObjects(): boolean | undefined {
    return this._objRef?.sortObjects;
  }
  public get maxGeometryCount(): number | undefined {
    return this._objRef?.maxGeometryCount;
  }
  @Input()
  public set isBatchedMesh(value: true) {
    if (this._objRef) {
      this._objRef.isBatchedMesh = value;
    }
  }

  public get isBatchedMesh(): true | undefined {
    return this._objRef?.isBatchedMesh;
  }
}
