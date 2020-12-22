import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Plane } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Material } from "three";
import { PlaneHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-planeHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
  ],
})
export class ThPlaneHelper<
  TARGS extends any[] = [plane: Plane, size: number, hex: number]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: PlaneHelper;
  protected getObjectType(): Type<PlaneHelper> {
    return PlaneHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set plane(value: Plane | [normal: Vector3, constant: number]) {
    if (this.obj) {
      this.obj.plane = applyValue<Plane>(this.obj.plane, value);
    }
  }
  @Input()
  public set size(value: number) {
    if (this.obj) {
      this.obj.size = value;
    }
  }
}
