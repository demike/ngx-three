import { SpotLight } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Color } from "three";
import { Vector3 } from "three";
import { Object3D } from "three";
import { SpotLightShadow } from "three";
import { Light } from "three";
import { ThLight } from "./ThLight";

@Component({
  selector: "th-spotLight",
  inputs: [
    "type",
    "target",
    "intensity",
    "distance",
    "angle",
    "decay",
    "shadow",
    "power",
    "penumbra",
    "isSpotLight",
  ],
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

  @Input("position")
  public set position(value: any) {
    this.obj.position = value;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
