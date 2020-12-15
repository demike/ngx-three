import { Light } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Color } from "three";
import { LightShadow } from "three";
import { Object3D } from "three";

@Component({
  selector: "th-light",
  inputs: [
    "type",
    "intensity",
    "isLight",
    "shadow",
    "shadowCameraFov",
    "shadowCameraLeft",
    "shadowCameraRight",
    "shadowCameraTop",
    "shadowCameraBottom",
    "shadowCameraNear",
    "shadowCameraFar",
    "shadowBias",
    "shadowMapWidth",
    "shadowMapHeight",
  ],
  template: "",
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLight) }],
})
export class ThLight extends Light {
  @Input("color")
  public set __color(test: any) {
    this.color = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[hex: number | string, intensity: number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [hex: number | string, intensity: number]) {
    /* nothing to do */
  }
}
