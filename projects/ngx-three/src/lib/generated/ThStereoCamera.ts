import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { PerspectiveCamera } from "three";
import { Camera } from "three";
import { ThCamera } from "./ThCamera";
import { StereoCamera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-stereoCamera",
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

  @Input()
  public set type(value: "StereoCamera") {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set aspect(value: number) {
    if (this.obj) {
      this.obj.aspect = value;
    }
  }

  @Input()
  public set eyeSep(value: number) {
    if (this.obj) {
      this.obj.eyeSep = value;
    }
  }

  @Input()
  public set cameraL(value: PerspectiveCamera) {
    if (this.obj) {
      this.obj.cameraL = value;
    }
  }

  @Input()
  public set cameraR(value: PerspectiveCamera) {
    if (this.obj) {
      this.obj.cameraR = value;
    }
  }
}
