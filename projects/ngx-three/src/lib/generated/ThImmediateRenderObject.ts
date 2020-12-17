import { ImmediateRenderObject } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { Material } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-immediateRenderObject",
  inputs: [
    "isImmediateRenderObject",
    "material",
    "hasPositions",
    "hasNormals",
    "hasColors",
    "hasUvs",
    "positionArray",
    "normalArray",
    "colorArray",
    "uvArray",
    "count",
  ],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThImmediateRenderObject),
    },
  ],
})
export class ThImmediateRenderObject<
  TARGS extends any[] = [material: Material]
> extends ThObject3D<TARGS> {
  protected obj!: ImmediateRenderObject;
  protected getObjectType(): Type<ImmediateRenderObject> {
    return ImmediateRenderObject;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
