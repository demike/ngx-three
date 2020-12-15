import { Scene } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { IFog } from "three";
import { Material } from "three";
import { Object3D } from "three";
import { Color } from "three";
import { Texture } from "three";
import { WebGLRenderer } from "three";
import { Camera } from "three";
import { WebGLRenderTarget } from "three";
import { WebGLCubeRenderTarget } from "three";

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
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThScene) }],
})
export class ThScene extends Scene {}
