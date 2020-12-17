import { PolarGridHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { LineSegments } from "three";
import { Color } from "three";
import { ThLineSegments } from "./ThLineSegments";

@Component({
  selector: "th-polarGridHelper",
  inputs: ["type"],
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
> extends ThLineSegments<TARGS> {
  protected obj!: PolarGridHelper;
  protected getObjectType(): Type<PolarGridHelper> {
    return PolarGridHelper;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
