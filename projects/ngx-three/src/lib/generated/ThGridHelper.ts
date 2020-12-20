import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Material } from "three";
import { GridHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-gridHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThGridHelper) },
  ],
})
export class ThGridHelper<
  TARGS extends any[] = [
    size: number,
    divisions: number,
    color1: Color | string | number,
    color2: Color | string | number
  ]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: GridHelper;
  protected getObjectType(): Type<GridHelper> {
    return GridHelper;
  }
}
