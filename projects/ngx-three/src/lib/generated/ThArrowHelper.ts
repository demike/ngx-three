import { ArrowHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Vector3 } from "three";
import { Line } from "three";
import { Mesh } from "three";
import { Color } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-arrowHelper",
  inputs: ["type", "line", "cone"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThArrowHelper) },
  ],
})
export class ThArrowHelper<
  TARGS extends any[] = [
    dir: Vector3,
    origin: Vector3,
    length: number,
    color: Color | string | number,
    headLength: number,
    headWidth: number
  ]
> extends ThObject3D<TARGS> {
  protected obj!: ArrowHelper;
  protected getObjectType(): Type<ArrowHelper> {
    return ArrowHelper;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
