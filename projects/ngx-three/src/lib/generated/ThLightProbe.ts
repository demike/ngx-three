import { LightProbe } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
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

  @Input()
  public set sh(value: SphericalHarmonics3 | [coefficients: Vector3[]]) {
    if (this.obj) {
      this.obj.sh = applyValue<SphericalHarmonics3>(this.obj.sh, value);
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
