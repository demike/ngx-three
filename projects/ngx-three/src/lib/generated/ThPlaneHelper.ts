import { PlaneHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Plane } from "three";
import { LineSegments } from "three";

@Component({
  selector: "th-planeHelper",
  inputs: ["type", "size"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
  ],
})
export class ThPlaneHelper extends PlaneHelper {
  @Input("plane")
  public set __plane(test: any) {
    this.plane = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[plane: Plane, size: number, hex: number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [plane: Plane, size: number, hex: number]) {
    /* nothing to do */
  }
}
