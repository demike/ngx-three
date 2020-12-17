import { LightProbe } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { SphericalHarmonics3 } from "three";
import { Light } from "three";
import { ThLight } from "./ThLight";

@Component({
  selector: "th-lightProbe",
  inputs: ["type", "isLightProbe"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLightProbe) },
  ],
})
export class ThLightProbe<
  TARGS extends any[] = [sh: SphericalHarmonics3, intensity: number]
> extends ThLight<TARGS> {
  protected obj!: LightProbe;
  protected getObjectType(): Type<LightProbe> {
    return LightProbe;
  }

  @Input("sh")
  public set sh(value: any) {
    this.obj.sh = value;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
