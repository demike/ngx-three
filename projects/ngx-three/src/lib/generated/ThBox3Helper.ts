import { Box3Helper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Box3 } from "three";
import { Color } from "three";
import { LineSegments } from "three";

@Component({
  selector: "th-box3Helper",
  inputs: ["type"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) },
  ],
})
export class ThBox3Helper extends Box3Helper {
  @Input("box")
  public set __box(test: any) {
    this.box = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[box: Box3, color: Color]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [box: Box3, color: Color]) {
    /* nothing to do */
  }
}
