import { SpotLightHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Light } from "three";
import { Color } from "three";
import { Matrix4 } from "three";
import { Object3D } from "three";
import { LineSegments } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-spotLightHelper",
  inputs: ["light", "matrixAutoUpdate", "color", "cone"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLightHelper) },
  ],
})
export class ThSpotLightHelper<
  TARGS extends any[] = [light: Light, color: Color | string | number]
> extends ThObject3D<TARGS> {
  protected obj!: SpotLightHelper;
  protected getObjectType(): Type<SpotLightHelper> {
    return SpotLightHelper;
  }

  @Input("matrix")
  public set matrix(value: any) {
    this.obj.matrix = value;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
