import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Vector3 } from "three";
import { Light } from "three";
import { ThLight } from "./ThLight";
import { HemisphereLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-hemisphereLight",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThHemisphereLight) },
  ],
})
export class ThHemisphereLight<
  TARGS extends any[] = [
    skyColor: Color | string | number,
    groundColor: Color | string | number,
    intensity: number
  ]
> extends ThLight<TARGS> {
  protected obj!: HemisphereLight;
  protected getObjectType(): Type<HemisphereLight> {
    return HemisphereLight;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
