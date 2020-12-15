import { DirectionalLight } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Color } from "three";
import { Object3D } from "three";
import { DirectionalLightShadow } from "three";
import { Light } from "three";
import { Vector3 } from "three";

@Component({
  selector: "th-directionalLight",
  inputs: ["type", "target", "intensity", "shadow", "isDirectionalLight"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThDirectionalLight) },
  ],
})
export class ThDirectionalLight extends DirectionalLight {
  @Input("position")
  public set __position(test: any) {
    this.position = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[color: Color | string | number, intensity: number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [color: Color | string | number, intensity: number]) {
    /* nothing to do */
  }
}
