import { Points } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Raycaster } from "three";
import { Object3D } from "three";
import { BufferGeometry } from "three";
import { Intersection } from "three";

@Component({
  selector: "th-points",
  inputs: [
    "type",
    "morphTargetInfluences",
    "morphTargetDictionary",
    "isPoints",
    "geometry",
    "material",
  ],
  template: "",
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThPoints) }],
})
export class ThPoints<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[]
> extends Points<TGeometry, TMaterial> {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[geometry: TGeometry, material: TMaterial]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [geometry: TGeometry, material: TMaterial]) {
    /* nothing to do */
  }
}
