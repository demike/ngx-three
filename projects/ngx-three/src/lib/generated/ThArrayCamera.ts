import { ArrayCamera } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { PerspectiveCamera } from "three";

@Component({
  selector: "th-arrayCamera",
  inputs: ["cameras", "isArrayCamera"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrayCamera) },
  ],
})
export class ThArrayCamera extends ArrayCamera {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[cameras: PerspectiveCamera[]]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [cameras: PerspectiveCamera[]]) {
    /* nothing to do */
  }
}
