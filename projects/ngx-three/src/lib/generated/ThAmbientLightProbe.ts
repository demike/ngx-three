import { AmbientLightProbe } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Color } from "three";
import { LightProbe } from "three";

@Component({
  selector: "th-ambientLightProbe",
  inputs: ["isAmbientLightProbe"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLightProbe) },
  ],
})
export class ThAmbientLightProbe extends AmbientLightProbe {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[color: Color | string | number, intensity: number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [color: Color | string | number, intensity: number]) {
    /* nothing to do */
  }
}
