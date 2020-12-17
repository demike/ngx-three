import { CubeCamera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { WebGLCubeRenderTarget } from "three";
import { Scene } from "three";
import { WebGLRenderer } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-cubeCamera",
  inputs: ["type", "renderTarget"],
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

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
