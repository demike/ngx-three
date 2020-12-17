import { BoxHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { Color } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";

@Component({
  selector: "th-boxHelper",
  inputs: ["type"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBoxHelper) },
  ],
})
export class ThBoxHelper<
  TARGS extends any[] = [object: Object3D, color: Color | string | number]
> extends ThLineSegments<TARGS> {
  protected obj!: BoxHelper;
  protected getObjectType(): Type<BoxHelper> {
    return BoxHelper;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
