import { StereoCamera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { PerspectiveCamera } from "three";
import { Camera } from "three";
import { ThCamera } from "./ThCamera";

@Component({
  selector: "th-stereoCamera",
  inputs: ["type", "aspect", "eyeSep", "cameraL", "cameraR"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThStereoCamera) },
  ],
})
export class ThStereoCamera<TARGS extends any[] = []> extends ThCamera<TARGS> {
  protected obj!: StereoCamera;
  protected getObjectType(): Type<StereoCamera> {
    return StereoCamera;
  }
}
