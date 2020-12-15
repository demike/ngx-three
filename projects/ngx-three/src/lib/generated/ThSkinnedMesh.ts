import { SkinnedMesh } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Matrix4 } from "three";
import { Skeleton } from "three";
import { Mesh } from "three";
import { BufferGeometry } from "three";

@Component({
  selector: "th-skinnedMesh",
  inputs: ["bindMode", "skeleton", "isSkinnedMesh"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSkinnedMesh) },
  ],
})
export class ThSkinnedMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[]
> extends SkinnedMesh<TGeometry, TMaterial> {
  @Input("bindMatrix")
  public set __bindMatrix(test: any) {
    this.bindMatrix = test;
  }

  @Input("bindMatrixInverse")
  public set __bindMatrixInverse(test: any) {
    this.bindMatrixInverse = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [geometry: TGeometry, material: TMaterial, useVertexTexture: boolean]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [geometry: TGeometry, material: TMaterial, useVertexTexture: boolean]
  ) {
    /* nothing to do */
  }
}
