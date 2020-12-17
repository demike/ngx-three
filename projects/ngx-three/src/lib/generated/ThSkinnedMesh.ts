import { SkinnedMesh } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
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

  @Input("bindMatrix")
  public set bindMatrix(value: any) {
    this.obj.bindMatrix = value;
  }

  @Input("bindMatrixInverse")
  public set bindMatrixInverse(value: any) {
    this.obj.bindMatrixInverse = value;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
