import { PerspectiveCamera } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Camera } from "three";

@Component({
  selector: "th-perspectiveCamera",
  inputs: [
    "type",
    "isPerspectiveCamera",
    "zoom",
    "fov",
    "aspect",
    "near",
    "far",
    "focus",
    "view",
    "filmGauge",
    "filmOffset",
  ],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
  ],
})
export class ThPerspectiveCamera extends PerspectiveCamera {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<[fov: number, aspect: number, near: number, far: number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [fov: number, aspect: number, near: number, far: number]
  ) {
    /* nothing to do */
  }
}
