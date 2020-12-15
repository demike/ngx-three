import { CameraHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Camera } from "three";
import { LineSegments } from "three";

@Component({
  selector: "th-cameraHelper",
  inputs: ["camera", "pointMap", "type"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) },
  ],
})
export class ThCameraHelper extends CameraHelper {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[camera: Camera]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [camera: Camera]) {
    /* nothing to do */
  }
}
