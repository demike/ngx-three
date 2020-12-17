import { Light } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { LightShadow } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-light",
  inputs: [
    "type",
    "intensity",
    "isLight",
    "shadow",
    "shadowCameraFov",
    "shadowCameraLeft",
    "shadowCameraRight",
    "shadowCameraTop",
    "shadowCameraBottom",
    "shadowCameraNear",
    "shadowCameraFar",
    "shadowBias",
    "shadowMapWidth",
    "shadowMapHeight",
  ],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThLight) }],
})
export class ThLight<
  TARGS extends any[] = [hex: number | string, intensity: number]
> extends ThObject3D<TARGS> {
  protected obj!: Light;
  protected getObjectType(): Type<Light> {
    return Light;
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.color = applyValue<Color>(this.obj.color, value);
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
