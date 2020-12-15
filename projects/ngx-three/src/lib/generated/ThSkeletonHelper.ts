import { SkeletonHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Object3D } from "three";
import { Matrix4 } from "three";
import { Bone } from "three";
import { LineSegments } from "three";

@Component({
  selector: "th-skeletonHelper",
  inputs: ["type", "bones", "root", "isSkeletonHelper", "matrixAutoUpdate"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSkeletonHelper) },
  ],
})
export class ThSkeletonHelper extends SkeletonHelper {
  @Input("matrix")
  public set __matrix(test: any) {
    this.matrix = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[object: Object3D]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [object: Object3D]) {
    /* nothing to do */
  }
}
