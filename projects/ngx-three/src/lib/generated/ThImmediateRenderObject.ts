import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { Material } from "three";
import { ThObject3D } from "./ThObject3D";
import { ImmediateRenderObject } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-immediateRenderObject",
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
}
