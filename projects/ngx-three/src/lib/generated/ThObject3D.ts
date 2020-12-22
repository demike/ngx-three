import { Input } from "@angular/core";
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

  @Input()
  public set id(value: number) {
    if (this.obj) {
      this.obj.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this.obj) {
      this.obj.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this.obj) {
      this.obj.name = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set children(value: Object3D[]) {
    if (this.obj) {
      this.obj.children = value;
    }
  }

  @Input()
  public set up(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.obj) {
      this.obj.up = applyValue<Vector3>(this.obj.up, value);
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
  public set matrixWorld(
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
      this.obj.matrixWorld = applyValue<Matrix4>(this.obj.matrixWorld, value);
    }
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this.obj) {
      this.obj.matrixAutoUpdate = value;
    }
  }

  @Input()
  public set matrixWorldNeedsUpdate(value: boolean) {
    if (this.obj) {
      this.obj.matrixWorldNeedsUpdate = value;
    }
  }

  @Input()
  public set layers(value: Layers | [channel: number]) {
    if (this.obj) {
      this.obj.layers = applyValue<Layers>(this.obj.layers, value);
    }
  }
  @Input()
  public set visible(value: boolean) {
    if (this.obj) {
      this.obj.visible = value;
    }
  }

  @Input()
  public set castShadow(value: boolean) {
    if (this.obj) {
      this.obj.castShadow = value;
    }
  }

  @Input()
  public set receiveShadow(value: boolean) {
    if (this.obj) {
      this.obj.receiveShadow = value;
    }
  }

  @Input()
  public set frustumCulled(value: boolean) {
    if (this.obj) {
      this.obj.frustumCulled = value;
    }
  }

  @Input()
  public set renderOrder(value: number) {
    if (this.obj) {
      this.obj.renderOrder = value;
    }
  }

  @Input()
  public set animations(value: AnimationClip[]) {
    if (this.obj) {
      this.obj.animations = value;
    }
  }

  @Input()
  public set userData(value: { [key: string]: any }) {
    if (this.obj) {
      this.obj.userData = value;
    }
  }

  @Input()
  public set customDepthMaterial(value: Material) {
    if (this.obj) {
      this.obj.customDepthMaterial = value;
    }
  }

  @Input()
  public set customDistanceMaterial(value: Material) {
    if (this.obj) {
      this.obj.customDistanceMaterial = value;
    }
  }

  @Input()
  public set onBeforeRender(
    value: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera,
      geometry: Geometry | BufferGeometry,
      material: Material,
      group: Group
    ) => void
  ) {
    if (this.obj) {
      this.obj.onBeforeRender = value;
    }
  }

  @Input()
  public set onAfterRender(
    value: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera,
      geometry: Geometry | BufferGeometry,
      material: Material,
      group: Group
    ) => void
  ) {
    if (this.obj) {
      this.obj.onAfterRender = value;
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
