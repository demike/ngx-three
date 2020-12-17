import { PerspectiveCamera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Camera } from "three";
import { ThCamera } from "./ThCamera";

@Component({
  selector: "th-perspectiveCamera",
  inputs: [
    "type",
    "isPerspectiveCamera",
    "zoom",
    "fov",
    "aspect",
    "near",
    "far",
    "focus",
    "view",
    "filmGauge",
    "filmOffset",
  ],
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

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
