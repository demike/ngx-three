import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { PerspectiveCamera } from "three";
import { ThPerspectiveCamera } from "./ThPerspectiveCamera";
import { ArrayCamera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-arrayCamera",
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

  @Input()
  public set cameras(value: PerspectiveCamera[]) {
    if (this.obj) {
      this.obj.cameras = value;
    }
  }
}
