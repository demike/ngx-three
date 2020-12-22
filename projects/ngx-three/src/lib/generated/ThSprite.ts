import { Input } from "@angular/core";
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

  @Input()
  public set type(value: "Sprite") {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set geometry(value: BufferGeometry) {
    if (this.obj) {
      this.obj.geometry = value;
    }
  }

  @Input()
  public set material(value: SpriteMaterial) {
    if (this.obj) {
      this.obj.material = value;
    }
  }

  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this.obj) {
      this.obj.center = applyValue<Vector2>(this.obj.center, value);
    }
  }
}
