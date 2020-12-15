import { SpotLightHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Light } from "three";
import { Color } from "three";
import { Matrix4 } from "three";
import { Object3D } from "three";
import { LineSegments } from "three";

@Component({
  selector: "th-spotLightHelper",
  inputs: ["light", "matrixAutoUpdate", "color", "cone"],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLightHelper) },
  ],
})
export class ThSpotLightHelper extends SpotLightHelper {
  @Input("matrix")
  public set __matrix(test: any) {
    this.matrix = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[light: Light, color: Color | string | number]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [light: Light, color: Color | string | number]) {
    /* nothing to do */
  }
}
