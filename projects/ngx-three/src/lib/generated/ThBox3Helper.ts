import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Box3 } from "three";
import { Color } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Material } from "three";
import { Box3Helper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-box3Helper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) },
  ],
})
export class ThBox3Helper<
  TARGS extends any[] = [box: Box3, color: Color]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: Box3Helper;
  protected getObjectType(): Type<Box3Helper> {
    return Box3Helper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set box(value: Box3 | [min: Vector3, max: Vector3]) {
    if (this.obj) {
      this.obj.box = applyValue<Box3>(this.obj.box, value);
    }
  }
}
