import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { SphericalHarmonics3 } from "three";
import { Light } from "three";
import { ThLight } from "./ThLight";
import { LightProbe } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-lightProbe",
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
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set sh(value: SphericalHarmonics3 | [coefficients: Vector3[]]) {
    if (this.obj) {
      this.obj.sh = applyValue<SphericalHarmonics3>(this.obj.sh, value);
    }
  }
}
