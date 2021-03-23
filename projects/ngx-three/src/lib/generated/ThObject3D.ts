/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, Input, SkipSelf, Type } from '@angular/core';
import {
  AnimationClip,
  BufferGeometry,
  Camera,
  Euler,
  Geometry,
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
export class ThObject3D<TARGS extends any[] = []> extends ThObjectBase<TARGS> {
  @Input()
  public objRef!: Object3D;
  protected getType(): Type<Object3D> {
    return Object3D;
  }

  @Input()
  public set id(value: number) {
    if (this.objRef) {
      this.objRef.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this.objRef) {
      this.objRef.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this.objRef) {
      this.objRef.name = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set children(value: Object3D[]) {
    if (this.objRef) {
      this.objRef.children = value;
    }
  }

  @Input()
  public set up(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      this.objRef.up = applyValue<Vector3>(this.objRef.up, value);
    }
  }
  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      applyValue<Vector3>(this.objRef.position, value);
    }
  }
  @Input()
  public set rotation(value: Euler | [x: number, y: number, z: number, order?: string]) {
    if (this.objRef) {
      applyValue<Euler>(this.objRef.rotation, value);
    }
  }
  @Input()
  public set quaternion(value: Quaternion | [x: number, y: number, z: number, w: number]) {
    if (this.objRef) {
      applyValue<Quaternion>(this.objRef.quaternion, value);
    }
  }
  @Input()
  public set scale(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      applyValue<Vector3>(this.objRef.scale, value);
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
    if (this.objRef) {
      applyValue<Matrix4>(this.objRef.modelViewMatrix, value);
    }
  }
  @Input()
  public set normalMatrix(
    value: Matrix3 | [n11: number, n12: number, n13: number, n21: number, n22: number, n23: number, n31: number, n32: number, n33: number]
  ) {
    if (this.objRef) {
      applyValue<Matrix3>(this.objRef.normalMatrix, value);
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
    if (this.objRef) {
      this.objRef.matrix = applyValue<Matrix4>(this.objRef.matrix, value);
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
    if (this.objRef) {
      this.objRef.matrixWorld = applyValue<Matrix4>(this.objRef.matrixWorld, value);
    }
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.matrixAutoUpdate = value;
    }
  }

  @Input()
  public set matrixWorldNeedsUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.matrixWorldNeedsUpdate = value;
    }
  }

  @Input()
  public set layers(value: Layers | [channel: number]) {
    if (this.objRef) {
      this.objRef.layers = applyValue<Layers>(this.objRef.layers, value);
    }
  }
  @Input()
  public set visible(value: boolean) {
    if (this.objRef) {
      this.objRef.visible = value;
    }
  }

  @Input()
  public set castShadow(value: boolean) {
    if (this.objRef) {
      this.objRef.castShadow = value;
    }
  }

  @Input()
  public set receiveShadow(value: boolean) {
    if (this.objRef) {
      this.objRef.receiveShadow = value;
    }
  }

  @Input()
  public set frustumCulled(value: boolean) {
    if (this.objRef) {
      this.objRef.frustumCulled = value;
    }
  }

  @Input()
  public set renderOrder(value: number) {
    if (this.objRef) {
      this.objRef.renderOrder = value;
    }
  }

  @Input()
  public set animations(value: AnimationClip[]) {
    if (this.objRef) {
      this.objRef.animations = value;
    }
  }

  @Input()
  public set userData(value: { [key: string]: any }) {
    if (this.objRef) {
      this.objRef.userData = value;
    }
  }

  @Input()
  public set customDepthMaterial(value: Material) {
    if (this.objRef) {
      this.objRef.customDepthMaterial = value;
    }
  }

  @Input()
  public set customDistanceMaterial(value: Material) {
    if (this.objRef) {
      this.objRef.customDistanceMaterial = value;
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
    if (this.objRef) {
      this.objRef.onBeforeRender = value;
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
    if (this.objRef) {
      this.objRef.onAfterRender = value;
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
