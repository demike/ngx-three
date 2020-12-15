import { HemisphereLight } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Color } from "three";
import { Vector3 } from "three";
import { Light } from "three";

@Component({
  selector: "th-hemisphereLight",
  inputs: ["type", "isHemisphereLight"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThHemisphereLight) },
  ],
})
export class ThHemisphereLight extends HemisphereLight {
  @Input("position")
  public set __position(test: any) {
    this.position = test;
  }

  @Input("groundColor")
  public set __groundColor(test: any) {
    this.groundColor = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [
        skyColor: Color | string | number,
        groundColor: Color | string | number,
        intensity: number
      ]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [
      skyColor: Color | string | number,
      groundColor: Color | string | number,
      intensity: number
    ]
  ) {
    /* nothing to do */
  }
}
