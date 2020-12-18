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

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
