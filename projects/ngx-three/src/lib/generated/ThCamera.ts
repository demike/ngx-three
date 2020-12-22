import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Matrix4 } from "three";
import { Vector3 } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";
import { Camera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-camera",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }],
})
export class ThCamera<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  protected obj!: Camera;
  protected getObjectType(): Type<Camera> {
    return Camera;
  }

  @Input()
  public set matrixWorldInverse(
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
      this.obj.matrixWorldInverse = applyValue<Matrix4>(
        this.obj.matrixWorldInverse,
        value
      );
    }
  }
  @Input()
  public set projectionMatrix(
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
      this.obj.projectionMatrix = applyValue<Matrix4>(
        this.obj.projectionMatrix,
        value
      );
    }
  }
  @Input()
  public set projectionMatrixInverse(
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
      this.obj.projectionMatrixInverse = applyValue<Matrix4>(
        this.obj.projectionMatrixInverse,
        value
      );
    }
  }
}
