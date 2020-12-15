import { HemisphereLightProbe } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Color } from "three";
import { LightProbe } from "three";

@Component({
  selector: "th-hemisphereLightProbe",
  inputs: ["isHemisphereLightProbe"],
  template: "",
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThHemisphereLightProbe),
    },
  ],
})
export class ThHemisphereLightProbe extends HemisphereLightProbe {
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
