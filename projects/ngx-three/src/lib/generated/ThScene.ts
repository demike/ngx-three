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
import { Scene } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-scene",
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
