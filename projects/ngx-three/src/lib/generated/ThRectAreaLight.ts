import { RectAreaLight } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Light } from "three";
import { Color } from "three";

@Component({
  selector: "th-rectAreaLight",
  inputs: ["type", "width", "height", "intensity", "isRectAreaLight"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) },
  ],
})
export class ThRectAreaLight extends RectAreaLight {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [
        color: Color | string | number,
        intensity: number,
        width: number,
        height: number
      ]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [
      color: Color | string | number,
      intensity: number,
      width: number,
      height: number
    ]
  ) {
    /* nothing to do */
  }
}
