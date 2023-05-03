/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  Box3,
  BufferGeometry,
  InstancedBufferAttribute,
  InstancedMesh,
  Material,
  Sphere,
  Vector3,
} from 'three';
import { applyValue } from '../util';
import { ThMesh } from './ThMesh';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-instancedMesh',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThInstancedMesh) },
  ],
})
export class ThInstancedMesh<
  TGeometry extends BufferGeometry = BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  T extends InstancedMesh<TGeometry, TMaterial> = InstancedMesh<
    TGeometry,
    TMaterial
  >,
  TARGS = [
    geometry: TGeometry | undefined,
    material: TMaterial | undefined,
    count: number
  ]
> extends ThMesh<TGeometry, TMaterial, T, TARGS> {
  public getType(): Type<InstancedMesh<TGeometry, TMaterial>> {
    return InstancedMesh;
  }

  // @ts-ignore
  public get isInstancedMesh(): true | undefined {
    return this._objRef?.isInstancedMesh;
  }
  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.boundingBox = applyValue<Box3 | null>(
        this._objRef.boundingBox,
        value
      );
    }
  }
  // @ts-ignore
  public get boundingBox(): (Box3 | null) | undefined {
    return this._objRef?.boundingBox;
  }
  @Input()
  public set boundingSphere(
    value: Sphere | null | [center: Vector3, radius: number]
  ) {
    if (this._objRef) {
      this._objRef.boundingSphere = applyValue<Sphere | null>(
        this._objRef.boundingSphere,
        value
      );
    }
  }
  // @ts-ignore
  public get boundingSphere(): (Sphere | null) | undefined {
    return this._objRef?.boundingSphere;
  }
  @Input()
  public set count(value: number) {
    if (this._objRef) {
      this._objRef.count = value;
    }
  }

  // @ts-ignore
  public get count(): number | undefined {
    return this._objRef?.count;
  }
  @Input()
  public set instanceColor(
    value:
      | InstancedBufferAttribute
      | null
      | [value: ArrayLike<number> | ArrayBufferView, offset?: number]
  ) {
    if (this._objRef) {
      this._objRef.instanceColor = applyValue<InstancedBufferAttribute | null>(
        this._objRef.instanceColor,
        value
      );
    }
  }
  // @ts-ignore
  public get instanceColor(): (InstancedBufferAttribute | null) | undefined {
    return this._objRef?.instanceColor;
  }
  @Input()
  public set instanceMatrix(
    value:
      | InstancedBufferAttribute
      | [value: ArrayLike<number> | ArrayBufferView, offset?: number]
  ) {
    if (this._objRef) {
      this._objRef.instanceMatrix = applyValue<InstancedBufferAttribute>(
        this._objRef.instanceMatrix,
        value
      );
    }
  }
  // @ts-ignore
  public get instanceMatrix(): InstancedBufferAttribute | undefined {
    return this._objRef?.instanceMatrix;
  }
}
