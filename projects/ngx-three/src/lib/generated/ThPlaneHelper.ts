import { PlaneHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Plane } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";

@Component({
  selector: "th-planeHelper",
  inputs: ["type", "size"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPlaneHelper) },
  ],
})
export class ThPlaneHelper<
  TARGS extends any[] = [plane: Plane, size: number, hex: number]
> extends ThLineSegments<TARGS> {
  protected obj!: PlaneHelper;
  protected getObjectType(): Type<PlaneHelper> {
    return PlaneHelper;
  }

  @Input()
  public set plane(value: Plane | [normal: Vector3, constant: number]) {
    if (this.obj) {
      this.obj.plane = applyValue<Plane>(this.obj.plane, value);
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
