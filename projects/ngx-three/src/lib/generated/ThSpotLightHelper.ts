import { Input } from "@angular/core";
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

  @Input()
  public set light(value: Light) {
    if (this.obj) {
      this.obj.light = value;
    }
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
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this.obj) {
      this.obj.matrixAutoUpdate = value;
    }
  }

  @Input()
  public set color(
    value:
      | Color
      | string
      | number
      | undefined
      | [color: Color | string | number]
  ) {
    if (this.obj) {
      this.obj.color = applyValue<Color | string | number | undefined>(
        this.obj.color,
        value
      );
    }
  }
  @Input()
  public set cone(value: LineSegments) {
    if (this.obj) {
      this.obj.cone = value;
    }
  }
}
