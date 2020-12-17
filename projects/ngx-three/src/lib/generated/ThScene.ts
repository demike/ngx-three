import { Scene } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { IFog } from "three";
import { Material } from "three";
import { Object3D } from "three";
import { Color } from "three";
import { Texture } from "three";
import { WebGLRenderer } from "three";
import { Camera } from "three";
import { WebGLRenderTarget } from "three";
import { WebGLCubeRenderTarget } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-scene",
  inputs: [
    "type",
    "fog",
    "overrideMaterial",
    "autoUpdate",
    "background",
    "environment",
    "isScene",
    "onBeforeRender",
    "onAfterRender",
  ],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThScene) }],
})
export class ThScene<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  protected obj!: Scene;
  protected getObjectType(): Type<Scene> {
    return Scene;
  }
}
