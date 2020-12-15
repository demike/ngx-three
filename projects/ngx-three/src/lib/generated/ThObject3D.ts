import { Object3D } from "three";
import { Component } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { ThArgs } from "../ThArgs";
import { Input } from "@angular/core";
import { SkipSelf, Self, forwardRef } from "@angular/core";
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

@Component({
  selector: "th-object3D",
  inputs: [
    "id",
    "uuid",
    "name",
    "type",
    "parent",
    "children",
    "matrixAutoUpdate",
    "matrixWorldNeedsUpdate",
    "visible",
    "castShadow",
    "receiveShadow",
    "frustumCulled",
    "renderOrder",
    "animations",
    "userData",
    "customDepthMaterial",
    "customDistanceMaterial",
    "isObject3D",
    "onBeforeRender",
    "onAfterRender",
    "DefaultMatrixAutoUpdate",
  ],
  template: "",
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThObject3D) },
  ],
})
export class ThObject3D extends Object3D {
  @Input("up")
  public set __up(test: any) {
    this.up = test;
  }

  @Input("position")
  public set __position(test: any) {
    this.position = test;
  }

  @Input("rotation")
  public set __rotation(test: any) {
    this.rotation = test;
  }

  @Input("quaternion")
  public set __quaternion(test: any) {
    this.quaternion = test;
  }

  @Input("scale")
  public set __scale(test: any) {
    this.scale = test;
  }

  @Input("modelViewMatrix")
  public set __modelViewMatrix(test: any) {
    this.modelViewMatrix = test;
  }

  @Input("normalMatrix")
  public set __normalMatrix(test: any) {
    this.normalMatrix = test;
  }

  @Input("matrix")
  public set __matrix(test: any) {
    this.matrix = test;
  }

  @Input("matrixWorld")
  public set __matrixWorld(test: any) {
    this.matrixWorld = test;
  }

  @Input("layers")
  public set __layers(test: any) {
    this.layers = test;
  }

  @Input("DefaultUp")
  public set __DefaultUp(test: any) {
    this.DefaultUp = test;
  }
}
