import { AxesHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { LineSegments } from "three";

@Component({
  selector: "th-axesHelper",
  inputs: ["type"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAxesHelper) },
  ],
})
export class ThAxesHelper extends AxesHelper {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[size: number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [size: number]) {
    /* nothing to do */
  }
}
