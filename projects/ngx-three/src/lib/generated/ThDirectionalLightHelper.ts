import { DirectionalLightHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { DirectionalLight } from "three";
import { Color } from "three";
import { Line } from "three";
import { Matrix4 } from "three";
import { Object3D } from "three";

@Component({
  selector: "th-directionalLightHelper",
  inputs: ["light", "lightPlane", "targetLine", "color", "matrixAutoUpdate"],
  template: "",
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThDirectionalLightHelper),
    },
  ],
})
export class ThDirectionalLightHelper extends DirectionalLightHelper {
  @Input("matrix")
  public set __matrix(test: any) {
    this.matrix = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [light: DirectionalLight, size: number, color: Color | string | number]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [light: DirectionalLight, size: number, color: Color | string | number]
  ) {
    /* nothing to do */
  }
}
