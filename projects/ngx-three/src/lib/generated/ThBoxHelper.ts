import { BoxHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Object3D } from "three";
import { Color } from "three";
import { LineSegments } from "three";

@Component({
  selector: "th-boxHelper",
  inputs: ["type"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBoxHelper) },
  ],
})
export class ThBoxHelper extends BoxHelper {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[object: Object3D, color: Color | string | number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [object: Object3D, color: Color | string | number]) {
    /* nothing to do */
  }
}
