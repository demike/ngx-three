import { PolarGridHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { LineSegments } from "three";
import { Color } from "three";

@Component({
  selector: "th-polarGridHelper",
  inputs: ["type"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPolarGridHelper) },
  ],
})
export class ThPolarGridHelper extends PolarGridHelper {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [
        radius: number,
        radials: number,
        circles: number,
        divisions: number,
        color1: Color | string | number | undefined,
        color2: Color | string | number | undefined
      ]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [
      radius: number,
      radials: number,
      circles: number,
      divisions: number,
      color1: Color | string | number | undefined,
      color2: Color | string | number | undefined
    ]
  ) {
    /* nothing to do */
  }
}
