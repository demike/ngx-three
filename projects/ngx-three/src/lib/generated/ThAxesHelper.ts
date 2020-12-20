import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Material } from "three";
import { AxesHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-axesHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThAxesHelper) },
  ],
})
export class ThAxesHelper<
  TARGS extends any[] = [size: number]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: AxesHelper;
  protected getObjectType(): Type<AxesHelper> {
    return AxesHelper;
  }
}
