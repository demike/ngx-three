import { InstancedMesh } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Material } from "three";
import { BufferAttribute } from "three";
import { Mesh } from "three";
import { Matrix4 } from "three";
import { Color } from "three";

@Component({
  selector: "th-instancedMesh",
  inputs: ["count", "instanceColor", "isInstancedMesh"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThInstancedMesh) },
  ],
})
export class ThInstancedMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[]
> extends InstancedMesh<TGeometry, TMaterial> {
  @Input("instanceMatrix")
  public set __instanceMatrix(test: any) {
    this.instanceMatrix = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<[geometry: TGeometry, material: TMaterial, count: number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [geometry: TGeometry, material: TMaterial, count: number]
  ) {
    /* nothing to do */
  }
}
