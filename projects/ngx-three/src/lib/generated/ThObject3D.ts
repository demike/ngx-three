/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, Input, SkipSelf, Type } from '@angular/core';
import {
  AnimationClip,
  BufferGeometry,
  Camera,
  Euler,
  Group,
  Layers,
  Material,
  Matrix3,
  Matrix4,
  Object3D,
  Quaternion,
  Scene,
  Vector3,
  WebGLRenderer
} from 'three';
import { ThObjectBase } from '../ThObjectBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-object3D',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class ThObject3D<T extends Object3D = Object3D, TARGS extends any[] = []> extends ThObjectBase<T, TARGS> {
  public getType(): Type<Object3D> {
    return Object3D;
  }

  @Input()
  public set id(value: number) {
    if (this._objRef) {
      this._objRef.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set children(value: Object3D[]) {
    if (this._objRef) {
      this._objRef.children = value;
    }
  }

  @Input()
  public set up(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.up = applyValue<Vector3>(this._objRef.up, value);
    }
  }
  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.position, value);
    }
  }
  @Input()
  public set rotation(value: Euler | [x: number, y: number, z: number, order?: string]) {
    if (this._objRef) {
      applyValue<Euler>(this._objRef.rotation, value);
    }
  }
  @Input()
  public set quaternion(value: Quaternion | [x: number, y: number, z: number, w: number]) {
    if (this._objRef) {
      applyValue<Quaternion>(this._objRef.quaternion, value);
    }
  }
  @Input()
  public set scale(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.scale, value);
    }
  }
  @Input()
  public set modelViewMatrix(
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
    if (this._objRef) {
      applyValue<Matrix4>(this._objRef.modelViewMatrix, value);
    }
  }
  @Input()
  public set normalMatrix(
    value: Matrix3 | [n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number]
  ) {
    if (this._objRef) {
      applyValue<Matrix3>(this._objRef.normalMatrix, value);
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
    if (this._objRef) {
      this._objRef.matrix = applyValue<Matrix4>(this._objRef.matrix, value);
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
    if (this._objRef) {
      this._objRef.matrixWorld = applyValue<Matrix4>(this._objRef.matrixWorld, value);
    }
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }

  @Input()
  public set matrixWorldNeedsUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixWorldNeedsUpdate = value;
    }
  }

  @Input()
  public set layers(value: Layers | [channel: number]) {
    if (this._objRef) {
      this._objRef.layers = applyValue<Layers>(this._objRef.layers, value);
    }
  }
  @Input()
  public set visible(value: boolean) {
    if (this._objRef) {
      this._objRef.visible = value;
    }
  }

  @Input()
  public set castShadow(value: boolean) {
    if (this._objRef) {
      this._objRef.castShadow = value;
    }
  }

  @Input()
  public set receiveShadow(value: boolean) {
    if (this._objRef) {
      this._objRef.receiveShadow = value;
    }
  }

  @Input()
  public set frustumCulled(value: boolean) {
    if (this._objRef) {
      this._objRef.frustumCulled = value;
    }
  }

  @Input()
  public set renderOrder(value: number) {
    if (this._objRef) {
      this._objRef.renderOrder = value;
    }
  }

  @Input()
  public set animations(value: AnimationClip[]) {
    if (this._objRef) {
      this._objRef.animations = value;
    }
  }

  @Input()
  public set userData(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.userData = value;
    }
  }

  @Input()
  public set customDepthMaterial(value: Material) {
    if (this._objRef) {
      this._objRef.customDepthMaterial = value;
    }
  }

  @Input()
  public set customDistanceMaterial(value: Material) {
    if (this._objRef) {
      this._objRef.customDistanceMaterial = value;
    }
  }

  @Input()
  public set onBeforeRender(
    value: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group) => void
  ) {
    if (this._objRef) {
      this._objRef.onBeforeRender = value;
    }
  }

  @Input()
  public set onAfterRender(
    value: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: BufferGeometry, material: Material, group: Group) => void
  ) {
    if (this._objRef) {
      this._objRef.onAfterRender = value;
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
