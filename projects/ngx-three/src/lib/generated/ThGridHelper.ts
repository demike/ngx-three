import { GridHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Color } from "three";
import { LineSegments } from "three";

@Component({
  selector: "th-gridHelper",
  inputs: ["type"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThGridHelper) },
  ],
})
export class ThGridHelper extends GridHelper {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [
        size: number,
        divisions: number,
        color1: Color | string | number,
        color2: Color | string | number
      ]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [
      size: number,
      divisions: number,
      color1: Color | string | number,
      color2: Color | string | number
    ]
  ) {
    /* nothing to do */
  }
}
