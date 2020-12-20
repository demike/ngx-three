import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Object3D } from "three";
import { Matrix4 } from "three";
import { Bone } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";
import { Geometry } from "three";
import { BufferGeometry } from "three";
import { Material } from "three";
import { SkeletonHelper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";

@Component({
  selector: "th-skeletonHelper",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSkeletonHelper) },
  ],
})
export class ThSkeletonHelper<
  TARGS extends any[] = [object: Object3D]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  TARGS
> {
  protected obj!: SkeletonHelper;
  protected getObjectType(): Type<SkeletonHelper> {
    return SkeletonHelper;
  }
}
