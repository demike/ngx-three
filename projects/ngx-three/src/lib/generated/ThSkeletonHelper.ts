import { SkeletonHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { Matrix4 } from "three";
import { Bone } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";

@Component({
  selector: "th-skeletonHelper",
  inputs: ["type", "bones", "root", "isSkeletonHelper", "matrixAutoUpdate"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSkeletonHelper) },
  ],
})
export class ThSkeletonHelper<
  TARGS extends any[] = [object: Object3D]
> extends ThLineSegments<TARGS> {
  protected obj!: SkeletonHelper;
  protected getObjectType(): Type<SkeletonHelper> {
    return SkeletonHelper;
  }

  @Input("matrix")
  public set matrix(value: any) {
    this.obj.matrix = value;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
