import { Sprite } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Vector2 } from "three";
import { Raycaster } from "three";
import { Object3D } from "three";
import { Intersection } from "three";
import { SpriteMaterial } from "three";
import { BufferGeometry } from "three";

@Component({
  selector: "th-sprite",
  inputs: ["type", "isSprite", "geometry", "material"],
  template: "",
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSprite) }],
})
export class ThSprite extends Sprite {
  @Input("center")
  public set __center(test: any) {
    this.center = test;
  }

  constructor(
    @SkipSelf() parent: ThObject3D,
    @Self() args: ThArgs<[material: SpriteMaterial]>
  ) {
    super(...args.args);
    parent.add(this);
  }
  public set args(ar: [material: SpriteMaterial]) {
    /* nothing to do */
  }
}
