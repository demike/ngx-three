import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { LightProbe } from "three";
import { ThLightProbe } from "./ThLightProbe";
import { AmbientLightProbe } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-ambientLightProbe",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAmbientLightProbe) },
  ],
})
export class ThAmbientLightProbe<
  TARGS extends any[] = [color: Color | string | number, intensity: number]
> extends ThLightProbe<TARGS> {
  protected obj!: AmbientLightProbe;
  protected getObjectType(): Type<AmbientLightProbe> {
    return AmbientLightProbe;
  }
}
