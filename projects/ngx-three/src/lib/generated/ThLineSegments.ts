import { LineSegments } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Line } from "three";
import { BufferGeometry } from "three";

@Component({
  selector: "th-lineSegments",
  inputs: ["type", "isLineSegments"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLineSegments) },
  ],
})
export class ThLineSegments<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[]
> extends LineSegments<TGeometry, TMaterial> {
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
