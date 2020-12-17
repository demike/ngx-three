import { PointLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Light } from "three";
import { PointLightShadow } from "three";
import { ThLight } from "./ThLight";

@Component({
  selector: "th-pointLight",
  inputs: ["type", "intensity", "distance", "decay", "shadow", "power"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLight) },
  ],
})
export class ThPointLight<
  TARGS extends any[] = [
    color: Color | string | number,
    intensity: number,
    distance: number,
    decay: number
  ]
> extends ThLight<TARGS> {
  protected obj!: PointLight;
  protected getObjectType(): Type<PointLight> {
    return PointLight;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
