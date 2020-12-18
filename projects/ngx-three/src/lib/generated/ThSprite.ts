import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Vector2 } from "three";
import { Raycaster } from "three";
import { Object3D } from "three";
import { Intersection } from "three";
import { SpriteMaterial } from "three";
import { BufferGeometry } from "three";
import { ThObject3D } from "./ThObject3D";
import { Sprite } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-sprite",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSprite) }],
})
export class ThSprite<
  TARGS extends any[] = [material: SpriteMaterial]
> extends ThObject3D<TARGS> {
  protected obj!: Sprite;
  protected getObjectType(): Type<Sprite> {
    return Sprite;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
