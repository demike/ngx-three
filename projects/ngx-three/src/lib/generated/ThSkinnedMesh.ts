import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Matrix4 } from "three";
import { Skeleton } from "three";
import { Mesh } from "three";
import { BufferGeometry } from "three";
import { ThMesh } from "./ThMesh";
import { SkinnedMesh } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-skinnedMesh",
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

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
