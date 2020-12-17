import { OrthographicCamera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Camera } from "three";
import { ThCamera } from "./ThCamera";

@Component({
  selector: "th-orthographicCamera",
  inputs: [
    "type",
    "isOrthographicCamera",
    "zoom",
    "view",
    "left",
    "right",
    "top",
    "bottom",
    "near",
    "far",
  ],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThOrthographicCamera),
    },
  ],
})
export class ThOrthographicCamera<
  TARGS extends any[] = [
    left: number,
    right: number,
    top: number,
    bottom: number,
    near: number,
    far: number
  ]
> extends ThCamera<TARGS> {
  protected obj!: OrthographicCamera;
  protected getObjectType(): Type<OrthographicCamera> {
    return OrthographicCamera;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
