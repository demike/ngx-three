import { LightProbe } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { SphericalHarmonics3 } from "three";
import { Light } from "three";

@Component({
  selector: "th-lightProbe",
  inputs: ["type", "isLightProbe"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLightProbe) },
  ],
})
export class ThLightProbe extends LightProbe {
  @Input("sh")
  public set __sh(test: any) {
    this.sh = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[sh: SphericalHarmonics3, intensity: number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [sh: SphericalHarmonics3, intensity: number]) {
    /* nothing to do */
  }
}
