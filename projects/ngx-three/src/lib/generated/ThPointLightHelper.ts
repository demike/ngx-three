import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { PointLight } from "three";
import { Color } from "three";
import { Matrix4 } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { PointLightHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-pointLightHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLightHelper) },
  ],
})
export class ThPointLightHelper<
  TARGS extends any[] = [
    light: PointLight,
    sphereSize: number,
    color: Color | string | number
  ]
> extends ThObject3D<TARGS> {
  protected obj!: PointLightHelper;
  protected getObjectType(): Type<PointLightHelper> {
    return PointLightHelper;
  }
}
