import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { DirectionalLight } from "three";
import { Color } from "three";
import { Line } from "three";
import { Matrix4 } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { DirectionalLightHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-directionalLightHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThObject3D,
      useExisting: forwardRef(() => ThDirectionalLightHelper),
    },
  ],
})
export class ThDirectionalLightHelper<
  TARGS extends any[] = [
    light: DirectionalLight,
    size: number,
    color: Color | string | number
  ]
> extends ThObject3D<TARGS> {
  protected obj!: DirectionalLightHelper;
  protected getObjectType(): Type<DirectionalLightHelper> {
    return DirectionalLightHelper;
  }

  @Input()
  public set light(value: DirectionalLight) {
    if (this.obj) {
      this.obj.light = value;
    }
  }

  @Input()
  public set lightPlane(value: Line) {
    if (this.obj) {
      this.obj.lightPlane = value;
    }
  }

  @Input()
  public set targetLine(value: Line) {
    if (this.obj) {
      this.obj.targetLine = value;
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
}
