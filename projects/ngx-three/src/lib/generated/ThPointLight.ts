import { PointLight } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Color } from "three";
import { Light } from "three";
import { PointLightShadow } from "three";

@Component({
  selector: "th-pointLight",
  inputs: ["type", "intensity", "distance", "decay", "shadow", "power"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLight) },
  ],
})
export class ThPointLight extends PointLight {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [
        color: Color | string | number,
        intensity: number,
        distance: number,
        decay: number
      ]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [
      color: Color | string | number,
      intensity: number,
      distance: number,
      decay: number
    ]
  ) {
    /* nothing to do */
  }
}
