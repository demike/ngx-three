import { SpotLight } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Color } from "three";
import { Vector3 } from "three";
import { Object3D } from "three";
import { SpotLightShadow } from "three";
import { Light } from "three";

@Component({
  selector: "th-spotLight",
  inputs: [
    "type",
    "target",
    "intensity",
    "distance",
    "angle",
    "decay",
    "shadow",
    "power",
    "penumbra",
    "isSpotLight",
  ],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) },
  ],
})
export class ThSpotLight extends SpotLight {
  @Input("position")
  public set __position(test: any) {
    this.position = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [
        color: Color | string | number,
        intensity: number,
        distance: number,
        angle: number,
        penumbra: number,
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
      angle: number,
      penumbra: number,
      decay: number
    ]
  ) {
    /* nothing to do */
  }
}
