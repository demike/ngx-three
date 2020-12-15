import { LineLoop } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Line } from "three";
import { Geometry } from "three";
import { Material } from "three";
import { BufferGeometry } from "three";

@Component({
  selector: "th-lineLoop",
  inputs: ["type", "isLineLoop"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLineLoop) },
  ],
})
export class ThLineLoop<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[]
> extends LineLoop<TGeometry, TMaterial> {
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
