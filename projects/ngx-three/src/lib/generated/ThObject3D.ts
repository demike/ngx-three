/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SkipSelf,
  Type,
} from '@angular/core';
import {
  AnimationClip,
  BaseEvent,
  BufferGeometry,
  Camera,
  Euler,
  EulerOrder,
  Event,
  Group,
  Layers,
  Material,
  Matrix3,
  Matrix4,
  Object3D,
  Quaternion,
  Scene,
  Vector3,
  WebGLRenderer,
} from 'three';
import { ThObjectBase } from '../ThObjectBase';
import { applyValue } from '../util';

@Component({
  selector: 'th-object3D',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ThObject3D<
  E extends BaseEvent = Event,
  T extends Object3D<E> = Object3D<E>,
  TARGS = [],
> extends ThObjectBase<T, TARGS> {
  public getType(): Type<Object3D<E>> {
    return Object3D;
  }

  public get isObject3D(): true | undefined {
    return this._objRef?.isObject3D;
  }
  public get id(): number | undefined {
    return this._objRef?.id;
  }
  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  public get uuid(): string | undefined {
    return this._objRef?.uuid;
  }
  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  public get name(): string | undefined {
    return this._objRef?.name;
  }
  public get type(): (string | 'Object3D') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set children(value: Object3D[]) {
    if (this._objRef) {
      this._objRef.children = value;
    }
  }

  public get children(): Object3D[] | undefined {
    return this._objRef?.children;
  }
  @Input()
  public set up(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      this._objRef.up = applyValue<Vector3>(this._objRef.up, value);
    }
  }
  public get up(): Vector3 | undefined {
    return this._objRef?.up;
  }
  @Input()
  public set position(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.position, value);
    }
  }
  public get position(): Vector3 | undefined {
    return this._objRef?.position;
  }
  @Input()
  public set rotation(
    value: Euler | [x: number, y: number, z: number, order?: EulerOrder],
  ) {
    if (this._objRef) {
      applyValue<Euler>(this._objRef.rotation, value);
    }
  }
  public get rotation(): Euler | undefined {
    return this._objRef?.rotation;
  }
  @Input()
  public set quaternion(
    value: Quaternion | [x: number, y: number, z: number, w: number],
  ) {
    if (this._objRef) {
      applyValue<Quaternion>(this._objRef.quaternion, value);
    }
  }
  public get quaternion(): Quaternion | undefined {
    return this._objRef?.quaternion;
  }
  @Input()
  public set scale(value: Vector3 | [x: number, y: number, z: number]) {
    if (this._objRef) {
      applyValue<Vector3>(this._objRef.scale, value);
    }
  }
  public get scale(): Vector3 | undefined {
    return this._objRef?.scale;
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
          n44: number,
        ],
  ) {
    if (this._objRef) {
      applyValue<Matrix4>(this._objRef.modelViewMatrix, value);
    }
  }
  public get modelViewMatrix(): Matrix4 | undefined {
    return this._objRef?.modelViewMatrix;
  }
  @Input()
  public set normalMatrix(
    value:
      | Matrix3
      | [
          n11: number,
          n12: number,
          n13: number,
          n21: number,
          n22: number,
          n23: number,
          n31: number,
          n32: number,
          n33: number,
        ],
  ) {
    if (this._objRef) {
      applyValue<Matrix3>(this._objRef.normalMatrix, value);
    }
  }
  public get normalMatrix(): Matrix3 | undefined {
    return this._objRef?.normalMatrix;
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
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.matrix = applyValue<Matrix4>(this._objRef.matrix, value);
    }
  }
  public get matrix(): Matrix4 | undefined {
    return this._objRef?.matrix;
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
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.matrixWorld = applyValue<Matrix4>(
        this._objRef.matrixWorld,
        value,
      );
    }
  }
  public get matrixWorld(): Matrix4 | undefined {
    return this._objRef?.matrixWorld;
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }

  public get matrixAutoUpdate(): boolean | undefined {
    return this._objRef?.matrixAutoUpdate;
  }
  @Input()
  public set matrixWorldAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixWorldAutoUpdate = value;
    }
  }

  public get matrixWorldAutoUpdate(): boolean | undefined {
    return this._objRef?.matrixWorldAutoUpdate;
  }
  @Input()
  public set matrixWorldNeedsUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixWorldNeedsUpdate = value;
    }
  }

  public get matrixWorldNeedsUpdate(): boolean | undefined {
    return this._objRef?.matrixWorldNeedsUpdate;
  }
  @Input()
  public set layers(value: Layers | [layer: number]) {
    if (this._objRef) {
      this._objRef.layers = applyValue<Layers>(this._objRef.layers, value);
    }
  }
  public get layers(): Layers | undefined {
    return this._objRef?.layers;
  }
  @Input()
  public set visible(value: boolean) {
    if (this._objRef) {
      this._objRef.visible = value;
    }
  }

  public get visible(): boolean | undefined {
    return this._objRef?.visible;
  }
  @Input()
  public set castShadow(value: boolean) {
    if (this._objRef) {
      this._objRef.castShadow = value;
    }
  }

  public get castShadow(): boolean | undefined {
    return this._objRef?.castShadow;
  }
  @Input()
  public set receiveShadow(value: boolean) {
    if (this._objRef) {
      this._objRef.receiveShadow = value;
    }
  }

  public get receiveShadow(): boolean | undefined {
    return this._objRef?.receiveShadow;
  }
  @Input()
  public set frustumCulled(value: boolean) {
    if (this._objRef) {
      this._objRef.frustumCulled = value;
    }
  }

  public get frustumCulled(): boolean | undefined {
    return this._objRef?.frustumCulled;
  }
  @Input()
  public set renderOrder(value: number) {
    if (this._objRef) {
      this._objRef.renderOrder = value;
    }
  }

  public get renderOrder(): number | undefined {
    return this._objRef?.renderOrder;
  }
  @Input()
  public set animations(value: AnimationClip[]) {
    if (this._objRef) {
      this._objRef.animations = value;
    }
  }

  public get animations(): AnimationClip[] | undefined {
    return this._objRef?.animations;
  }
  @Input()
  public set userData(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.userData = value;
    }
  }

  public get userData(): { [key: string]: any } | undefined {
    return this._objRef?.userData;
  }
  @Input()
  public set customDepthMaterial(value: Material | undefined) {
    if (this._objRef) {
      this._objRef.customDepthMaterial = value;
    }
  }

  public get customDepthMaterial(): (Material | undefined) | undefined {
    return this._objRef?.customDepthMaterial;
  }
  @Input()
  public set customDistanceMaterial(value: Material | undefined) {
    if (this._objRef) {
      this._objRef.customDistanceMaterial = value;
    }
  }

  public get customDistanceMaterial(): (Material | undefined) | undefined {
    return this._objRef?.customDistanceMaterial;
  }
  @Input()
  public set onBeforeRender(
    value: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera,
      geometry: BufferGeometry,
      material: Material,
      group: Group,
    ) => void,
  ) {
    if (this._objRef) {
      this._objRef.onBeforeRender = value;
    }
  }

  public get onBeforeRender():
    | ((
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
      ) => void)
    | undefined {
    return this._objRef?.onBeforeRender;
  }
  @Input()
  public set onAfterRender(
    value: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera,
      geometry: BufferGeometry,
      material: Material,
      group: Group,
    ) => void,
  ) {
    if (this._objRef) {
      this._objRef.onAfterRender = value;
    }
  }

  public get onAfterRender():
    | ((
        renderer: WebGLRenderer,
        scene: Scene,
        camera: Camera,
        geometry: BufferGeometry,
        material: Material,
        group: Group,
      ) => void)
    | undefined {
    return this._objRef?.onAfterRender;
  }

  public static readonly DEFAULT_UP = Object3D.DEFAULT_UP;

  public static readonly DEFAULT_MATRIX_AUTO_UPDATE =
    Object3D.DEFAULT_MATRIX_AUTO_UPDATE;

  public static readonly DEFAULT_MATRIX_WORLD_AUTO_UPDATE =
    Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE;

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
