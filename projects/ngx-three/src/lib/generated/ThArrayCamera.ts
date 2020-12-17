import { ArrayCamera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { PerspectiveCamera } from "three";
import { ThPerspectiveCamera } from "./ThPerspectiveCamera";

@Component({
  selector: "th-arrayCamera",
  inputs: ["cameras", "isArrayCamera"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrayCamera) },
  ],
})
export class ThArrayCamera<
  TARGS extends any[] = [cameras: PerspectiveCamera[]]
> extends ThPerspectiveCamera<TARGS> {
  protected obj!: ArrayCamera;
  protected getObjectType(): Type<ArrayCamera> {
    return ArrayCamera;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
