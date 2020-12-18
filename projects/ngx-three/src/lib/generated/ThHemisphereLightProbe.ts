import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { LightProbe } from "three";
import { ThLightProbe } from "./ThLightProbe";
import { HemisphereLightProbe } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-hemisphereLightProbe",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThHemisphereLightProbe),
    },
  ],
})
export class ThHemisphereLightProbe<
  TARGS extends any[] = [
    skyColor: Color | string | number,
    groundColor: Color | string | number,
    intensity: number
  ]
> extends ThLightProbe<TARGS> {
  protected obj!: HemisphereLightProbe;
  protected getObjectType(): Type<HemisphereLightProbe> {
    return HemisphereLightProbe;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
