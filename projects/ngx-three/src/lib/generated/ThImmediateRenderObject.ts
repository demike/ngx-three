import { ImmediateRenderObject } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Object3D } from "three";
import { Material } from "three";

@Component({
  selector: "th-immediateRenderObject",
  inputs: [
    "isImmediateRenderObject",
    "material",
    "hasPositions",
    "hasNormals",
    "hasColors",
    "hasUvs",
    "positionArray",
    "normalArray",
    "colorArray",
    "uvArray",
    "count",
  ],
  template: "",
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThImmediateRenderObject),
    },
  ],
})
export class ThImmediateRenderObject extends ImmediateRenderObject {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[material: Material]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [material: Material]) {
    /* nothing to do */
  }
}
