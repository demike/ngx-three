import { PointLightHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { PointLight } from "three";
import { Color } from "three";
import { Matrix4 } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-pointLightHelper",
  inputs: ["type", "light", "color", "matrixAutoUpdate"],
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

  @Input("matrix")
  public set matrix(value: any) {
    this.obj.matrix = value;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
