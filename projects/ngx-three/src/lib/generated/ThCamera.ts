import { Camera } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Matrix4 } from "three";
import { Vector3 } from "three";
import { Object3D } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-camera",
  inputs: ["isCamera"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }],
})
export class ThCamera<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  protected obj!: Camera;
  protected getObjectType(): Type<Camera> {
    return Camera;
  }

  @Input("matrixWorldInverse")
  public set matrixWorldInverse(value: any) {
    this.obj.matrixWorldInverse = value;
  }

  @Input("projectionMatrix")
  public set projectionMatrix(value: any) {
    this.obj.projectionMatrix = value;
  }

  @Input("projectionMatrixInverse")
  public set projectionMatrixInverse(value: any) {
    this.obj.projectionMatrixInverse = value;
  }
}
