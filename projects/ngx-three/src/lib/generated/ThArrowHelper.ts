import { ArrowHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Vector3 } from "three";
import { Line } from "three";
import { Mesh } from "three";
import { Color } from "three";
import { Object3D } from "three";

@Component({
  selector: "th-arrowHelper",
  inputs: ["type", "line", "cone"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
  ],
})
export class ThArrowHelper extends ArrowHelper {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [
        dir: Vector3,
        origin: Vector3,
        length: number,
        color: Color | string | number,
        headLength: number,
        headWidth: number
      ]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [
      dir: Vector3,
      origin: Vector3,
      length: number,
      color: Color | string | number,
      headLength: number,
      headWidth: number
    ]
  ) {
    /* nothing to do */
  }
}
