import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Matrix4 } from "three";
import { Vector3 } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { Camera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-camera",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }],
})
export class ThCamera<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  protected obj!: Camera;
  protected getObjectType(): Type<Camera> {
    return Camera;
  }
}
