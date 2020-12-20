import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Camera } from "three";
import { ThCamera } from "./ThCamera";
import { PerspectiveCamera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-perspectiveCamera",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPerspectiveCamera) },
  ],
})
export class ThPerspectiveCamera<
  TARGS extends any[] = [fov: number, aspect: number, near: number, far: number]
> extends ThCamera<TARGS> {
  protected obj!: PerspectiveCamera;
  protected getObjectType(): Type<PerspectiveCamera> {
    return PerspectiveCamera;
  }
}
