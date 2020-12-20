import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Light } from "three";
import { Color } from "three";
import { Matrix4 } from "three";
import { Object3D } from "three";
import { LineSegments } from "three";
import { ThObject3D } from "./ThObject3D";
import { SpotLightHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-spotLightHelper",
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
}
