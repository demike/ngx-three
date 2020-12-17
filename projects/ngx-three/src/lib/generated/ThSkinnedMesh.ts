import { SkinnedMesh } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Matrix4 } from "three";
import { Skeleton } from "three";
import { Mesh } from "three";
import { BufferGeometry } from "three";
import { ThMesh } from "./ThMesh";

@Component({
  selector: "th-skinnedMesh",
  inputs: ["bindMode", "skeleton", "isSkinnedMesh"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) },
  ],
})
export class ThSkinnedMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [
    geometry: TGeometry,
    material: TMaterial,
    useVertexTexture: boolean
  ]
> extends ThMesh<TGeometry, TMaterial, TARGS> {
  protected obj!: SkinnedMesh;
  protected getObjectType(): Type<SkinnedMesh> {
    return SkinnedMesh;
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

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
