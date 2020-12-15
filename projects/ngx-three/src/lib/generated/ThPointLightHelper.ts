import { PointLightHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { PointLight } from "three";
import { Color } from "three";
import { Matrix4 } from "three";
import { Object3D } from "three";

@Component({
  selector: "th-pointLightHelper",
  inputs: ["type", "light", "color", "matrixAutoUpdate"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPointLightHelper) },
  ],
})
export class ThPointLightHelper extends PointLightHelper {
  @Input("matrix")
  public set __matrix(test: any) {
    this.matrix = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [light: PointLight, sphereSize: number, color: Color | string | number]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [light: PointLight, sphereSize: number, color: Color | string | number]
  ) {
    /* nothing to do */
  }
}
