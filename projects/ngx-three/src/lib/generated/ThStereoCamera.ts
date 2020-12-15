import { StereoCamera } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { PerspectiveCamera } from "three";
import { Camera } from "three";

@Component({
  selector: "th-stereoCamera",
  inputs: ["type", "aspect", "eyeSep", "cameraL", "cameraR"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThStereoCamera) },
  ],
})
export class ThStereoCamera extends StereoCamera {}
