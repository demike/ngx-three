import { RectAreaLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Light } from "three";
import { Color } from "three";
import { ThLight } from "./ThLight";

@Component({
  selector: "th-rectAreaLight",
  inputs: ["type", "width", "height", "intensity", "isRectAreaLight"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThRectAreaLight) },
  ],
})
export class ThRectAreaLight<
  TARGS extends any[] = [
    color: Color | string | number,
    intensity: number,
    width: number,
    height: number
  ]
> extends ThLight<TARGS> {
  protected obj!: RectAreaLight;
  protected getObjectType(): Type<RectAreaLight> {
    return RectAreaLight;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
