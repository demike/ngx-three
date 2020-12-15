import { CubeCamera } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { WebGLCubeRenderTarget } from "three";
import { Scene } from "three";
import { WebGLRenderer } from "three";
import { Object3D } from "three";

@Component({
  selector: "th-cubeCamera",
  inputs: ["type", "renderTarget"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCubeCamera) },
  ],
})
export class ThCubeCamera extends CubeCamera {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [near: number, far: number, renderTarget: WebGLCubeRenderTarget]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [near: number, far: number, renderTarget: WebGLCubeRenderTarget]
  ) {
    /* nothing to do */
  }
}
