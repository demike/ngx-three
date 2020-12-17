import { HemisphereLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Vector3 } from "three";
import { Light } from "three";
import { ThLight } from "./ThLight";

@Component({
  selector: "th-hemisphereLight",
  inputs: ["type", "isHemisphereLight"],
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

  @Input("position")
  public set position(value: any) {
    this.obj.position = value;
  }

  @Input("groundColor")
  public set groundColor(value: any) {
    this.obj.groundColor = value;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
