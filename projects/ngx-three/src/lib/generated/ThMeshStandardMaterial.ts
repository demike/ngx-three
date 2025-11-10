/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import {
  Color,
  ColorRepresentation,
  Euler,
  EulerOrder,
  MeshStandardMaterial,
  MeshStandardMaterialParameters,
  Vector2,
} from 'three';
import { NormalMapTypes } from 'three/src/constants.js';
import { Texture } from 'three/src/textures/Texture.js';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshStandardMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshStandardMaterial),
    },
  ],
})
export class ThMeshStandardMaterial<
  T extends MeshStandardMaterial = MeshStandardMaterial,
  TARGS = /* parameters? */ MeshStandardMaterialParameters,
> extends ThMaterial<T, TARGS> {
  public getType(): Type<MeshStandardMaterial> {
    return MeshStandardMaterial;
  }

  public get isMeshStandardMaterial(): boolean | undefined {
    return this._objRef?.isMeshStandardMaterial;
  }
  @Input()
  public set color(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  public get color(): Color | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set roughness(value: number) {
    if (this._objRef) {
      this._objRef.roughness = value;
    }
  }

  public get roughness(): number | undefined {
    return this._objRef?.roughness;
  }
  @Input()
  public set metalness(value: number) {
    if (this._objRef) {
      this._objRef.metalness = value;
    }
  }

  public get metalness(): number | undefined {
    return this._objRef?.metalness;
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  public get map(): (Texture | null) | undefined {
    return this._objRef?.map;
  }
  @Input()
  public set lightMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.lightMap = value;
    }
  }

  public get lightMap(): (Texture | null) | undefined {
    return this._objRef?.lightMap;
  }
  @Input()
  public set lightMapIntensity(value: number) {
    if (this._objRef) {
      this._objRef.lightMapIntensity = value;
    }
  }

  public get lightMapIntensity(): number | undefined {
    return this._objRef?.lightMapIntensity;
  }
  @Input()
  public set aoMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.aoMap = value;
    }
  }

  public get aoMap(): (Texture | null) | undefined {
    return this._objRef?.aoMap;
  }
  @Input()
  public set aoMapIntensity(value: number) {
    if (this._objRef) {
      this._objRef.aoMapIntensity = value;
    }
  }

  public get aoMapIntensity(): number | undefined {
    return this._objRef?.aoMapIntensity;
  }
  @Input()
  public set emissive(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.emissive = applyValue<Color>(this._objRef.emissive, value);
    }
  }
  public get emissive(): Color | undefined {
    return this._objRef?.emissive;
  }
  @Input()
  public set emissiveIntensity(value: number) {
    if (this._objRef) {
      this._objRef.emissiveIntensity = value;
    }
  }

  public get emissiveIntensity(): number | undefined {
    return this._objRef?.emissiveIntensity;
  }
  @Input()
  public set emissiveMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.emissiveMap = value;
    }
  }

  public get emissiveMap(): (Texture | null) | undefined {
    return this._objRef?.emissiveMap;
  }
  @Input()
  public set bumpMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.bumpMap = value;
    }
  }

  public get bumpMap(): (Texture | null) | undefined {
    return this._objRef?.bumpMap;
  }
  @Input()
  public set bumpScale(value: number) {
    if (this._objRef) {
      this._objRef.bumpScale = value;
    }
  }

  public get bumpScale(): number | undefined {
    return this._objRef?.bumpScale;
  }
  @Input()
  public set normalMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.normalMap = value;
    }
  }

  public get normalMap(): (Texture | null) | undefined {
    return this._objRef?.normalMap;
  }
  @Input()
  public set normalMapType(value: NormalMapTypes) {
    if (this._objRef) {
      this._objRef.normalMapType = value;
    }
  }

  public get normalMapType(): NormalMapTypes | undefined {
    return this._objRef?.normalMapType;
  }
  @Input()
  public set normalScale(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.normalScale = applyValue<Vector2>(
        this._objRef.normalScale,
        value,
      );
    }
  }
  public get normalScale(): Vector2 | undefined {
    return this._objRef?.normalScale;
  }
  @Input()
  public set displacementMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.displacementMap = value;
    }
  }

  public get displacementMap(): (Texture | null) | undefined {
    return this._objRef?.displacementMap;
  }
  @Input()
  public set displacementScale(value: number) {
    if (this._objRef) {
      this._objRef.displacementScale = value;
    }
  }

  public get displacementScale(): number | undefined {
    return this._objRef?.displacementScale;
  }
  @Input()
  public set displacementBias(value: number) {
    if (this._objRef) {
      this._objRef.displacementBias = value;
    }
  }

  public get displacementBias(): number | undefined {
    return this._objRef?.displacementBias;
  }
  @Input()
  public set roughnessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.roughnessMap = value;
    }
  }

  public get roughnessMap(): (Texture | null) | undefined {
    return this._objRef?.roughnessMap;
  }
  @Input()
  public set metalnessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.metalnessMap = value;
    }
  }

  public get metalnessMap(): (Texture | null) | undefined {
    return this._objRef?.metalnessMap;
  }
  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  public get alphaMap(): (Texture | null) | undefined {
    return this._objRef?.alphaMap;
  }
  @Input()
  public set envMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.envMap = value;
    }
  }

  public get envMap(): (Texture | null) | undefined {
    return this._objRef?.envMap;
  }
  @Input()
  public set envMapRotation(
    value: Euler | [x: number, y: number, z: number, order?: EulerOrder],
  ) {
    if (this._objRef) {
      this._objRef.envMapRotation = applyValue<Euler>(
        this._objRef.envMapRotation,
        value,
      );
    }
  }
  public get envMapRotation(): Euler | undefined {
    return this._objRef?.envMapRotation;
  }
  @Input()
  public set envMapIntensity(value: number) {
    if (this._objRef) {
      this._objRef.envMapIntensity = value;
    }
  }

  public get envMapIntensity(): number | undefined {
    return this._objRef?.envMapIntensity;
  }
  @Input()
  public set wireframe(value: boolean) {
    if (this._objRef) {
      this._objRef.wireframe = value;
    }
  }

  public get wireframe(): boolean | undefined {
    return this._objRef?.wireframe;
  }
  @Input()
  public set wireframeLinewidth(value: number) {
    if (this._objRef) {
      this._objRef.wireframeLinewidth = value;
    }
  }

  public get wireframeLinewidth(): number | undefined {
    return this._objRef?.wireframeLinewidth;
  }
  @Input()
  public set wireframeLinecap(value: 'round' | 'bevel' | 'miter') {
    if (this._objRef) {
      this._objRef.wireframeLinecap = value;
    }
  }

  public get wireframeLinecap(): ('round' | 'bevel' | 'miter') | undefined {
    return this._objRef?.wireframeLinecap;
  }
  @Input()
  public set wireframeLinejoin(value: 'round' | 'bevel' | 'miter') {
    if (this._objRef) {
      this._objRef.wireframeLinejoin = value;
    }
  }

  public get wireframeLinejoin(): ('round' | 'bevel' | 'miter') | undefined {
    return this._objRef?.wireframeLinejoin;
  }
  @Input()
  public set flatShading(value: boolean) {
    if (this._objRef) {
      this._objRef.flatShading = value;
    }
  }

  public get flatShading(): boolean | undefined {
    return this._objRef?.flatShading;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
}
