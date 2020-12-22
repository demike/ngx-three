import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Camera } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Material } from "three";
import { CameraHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-cameraHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) },
  ],
})
export class ThCameraHelper<
  TARGS extends any[] = [camera: Camera]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: CameraHelper;
  protected getObjectType(): Type<CameraHelper> {
    return CameraHelper;
  }

  @Input()
  public set camera(value: Camera) {
    if (this.obj) {
      this.obj.camera = value;
    }
  }

  @Input()
  public set pointMap(value: { [id: string]: number[] }) {
    if (this.obj) {
      this.obj.pointMap = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
