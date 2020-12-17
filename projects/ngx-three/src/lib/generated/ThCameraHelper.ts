import { CameraHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Camera } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";

@Component({
  selector: "th-cameraHelper",
  inputs: ["camera", "pointMap", "type"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) },
  ],
})
export class ThCameraHelper<
  TARGS extends any[] = [camera: Camera]
> extends ThLineSegments<TARGS> {
  protected obj!: CameraHelper;
  protected getObjectType(): Type<CameraHelper> {
    return CameraHelper;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
