import { SpotLightHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
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

  @Input()
  public set matrix(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number
        ]
  ) {
    if (this.obj) {
      this.obj.matrix = applyValue<Matrix4>(this.obj.matrix, value);
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
