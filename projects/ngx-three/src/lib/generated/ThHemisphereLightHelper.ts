import { HemisphereLightHelper } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { HemisphereLight } from "three";
import { Color } from "three";
import { Matrix4 } from "three";
import { MeshBasicMaterial } from "three";
import { Object3D } from "three";

@Component({
  selector: "th-hemisphereLightHelper",
  inputs: ["light", "matrixAutoUpdate", "material", "color"],
  template: "",
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThHemisphereLightHelper),
    },
  ],
})
export class ThHemisphereLightHelper extends HemisphereLightHelper {
  @Input("matrix")
  public set __matrix(test: any) {
    this.matrix = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self()
    args: ThArgs<
      [light: HemisphereLight, size: number, color: Color | number | string]
    >
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(
    ar: [light: HemisphereLight, size: number, color: Color | number | string]
  ) {
    /* nothing to do */
  }
}
