import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Vector3 } from "three";
import { Object3D } from "three";
import { SpotLightShadow } from "three";
import { Light } from "three";
import { ThLight } from "./ThLight";
import { SpotLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-spotLight",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSpotLight) },
  ],
})
export class ThSpotLight<
  TARGS extends any[] = [
    color: Color | string | number,
    intensity: number,
    distance: number,
    angle: number,
    penumbra: number,
    decay: number
  ]
> extends ThLight<TARGS> {
  protected obj!: SpotLight;
  protected getObjectType(): Type<SpotLight> {
    return SpotLight;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
