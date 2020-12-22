import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { LineSegments } from "three";
import { Color } from "three";
import { ThLineSegments } from "./ThLineSegments";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Material } from "three";
import { PolarGridHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-polarGridHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPolarGridHelper) },
  ],
})
export class ThPolarGridHelper<
  TARGS extends any[] = [
    radius: number,
    radials: number,
    circles: number,
    divisions: number,
    color1: Color | string | number | undefined,
    color2: Color | string | number | undefined
  ]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: PolarGridHelper;
  protected getObjectType(): Type<PolarGridHelper> {
    return PolarGridHelper;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }
}
