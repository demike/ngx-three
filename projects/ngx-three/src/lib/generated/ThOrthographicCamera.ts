import { OrthographicCamera } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Camera } from "three";

@Component({
  selector: "th-orthographicCamera",
  inputs: [
    "type",
    "isOrthographicCamera",
    "zoom",
    "view",
    "left",
    "right",
    "top",
    "bottom",
    "near",
    "far",
  ],
  template: "",
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThOrthographicCamera),
    },
  ],
})
export class ThOrthographicCamera extends OrthographicCamera {
  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [
        left: number,
        right: number,
        top: number,
        bottom: number,
        near: number,
        far: number
      ]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [
      left: number,
      right: number,
      top: number,
      bottom: number,
      near: number,
      far: number
    ]
  ) {
    /* nothing to do */
  }
}
