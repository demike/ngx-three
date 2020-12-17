import { DirectionalLightHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { DirectionalLight } from "three";
import { Color } from "three";
import { Line } from "three";
import { Matrix4 } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-directionalLightHelper",
  inputs: ["light", "lightPlane", "targetLine", "color", "matrixAutoUpdate"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThDirectionalLightHelper),
    },
  ],
})
export class ThDirectionalLightHelper<
  TARGS extends any[] = [
    light: DirectionalLight,
    size: number,
    color: Color | string | number
  ]
> extends ThObject3D<TARGS> {
  protected obj!: DirectionalLightHelper;
  protected getObjectType(): Type<DirectionalLightHelper> {
    return DirectionalLightHelper;
  }

  @Input("matrix")
  public set matrix(value: any) {
    this.obj.matrix = value;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
