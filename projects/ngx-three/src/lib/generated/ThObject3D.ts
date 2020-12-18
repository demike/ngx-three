import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Vector3 } from "three";
import { Euler } from "three";
import { Quaternion } from "three";
import { Matrix4 } from "three";
import { Matrix3 } from "three";
import { Layers } from "three";
import { WebGLRenderer } from "three";
import { Scene } from "three";
import { Camera } from "three";
import { Geometry } from "three";
import { Material } from "three";
import { Group } from "three";
import { Raycaster } from "three";
import { EventDispatcher } from "three";
import { BufferGeometry } from "three";
import { Intersection } from "three";
import { AnimationClip } from "three";
import { ThWrapperBase } from "../ThWrapperBase";
import { Object3D } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { applyValue } from "../util";

@Component({
  selector: "th-object3D",
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThObject3D) },
  ],
})
export class ThObject3D<TARGS extends any[] = []> extends ThWrapperBase<TARGS> {
  protected obj!: Object3D;
  protected getObjectType(): Type<Object3D> {
    return Object3D;
  }
}
