import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { WebGLCubeRenderTarget } from "three";
import { Scene } from "three";
import { WebGLRenderer } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { CubeCamera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-cubeCamera",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCubeCamera) },
  ],
})
export class ThCubeCamera<
  TARGS extends any[] = [
    near: number,
    far: number,
    renderTarget: WebGLCubeRenderTarget
  ]
> extends ThObject3D<TARGS> {
  protected obj!: CubeCamera;
  protected getObjectType(): Type<CubeCamera> {
    return CubeCamera;
  }

  @Input()
  public set type(value: "CubeCamera") {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set renderTarget(value: WebGLCubeRenderTarget) {
    if (this.obj) {
      this.obj.renderTarget = value;
    }
  }
}
