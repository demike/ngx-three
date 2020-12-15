import { Camera } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
import { Matrix4 } from "three";
import { Vector3 } from "three";
import { Object3D } from "three";

@Component({
  selector: "th-camera",
  inputs: ["isCamera"],
  template: "",
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCamera) }],
})
export class ThCamera extends Camera {
  @Input("matrixWorldInverse")
  public set __matrixWorldInverse(test: any) {
    this.matrixWorldInverse = test;
  }

  @Input("projectionMatrix")
  public set __projectionMatrix(test: any) {
    this.projectionMatrix = test;
  }

  @Input("projectionMatrixInverse")
  public set __projectionMatrixInverse(test: any) {
    this.projectionMatrixInverse = test;
  }
}
