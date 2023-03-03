/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  Color,
  ColorRepresentation,
  Combine,
  MeshPhongMaterial,
  MeshPhongMaterialParameters,
  NormalMapTypes,
  Texture,
  Vector2,
} from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshPhongMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThMeshPhongMaterial) },
  ],
})
export class ThMeshPhongMaterial<
  T extends MeshPhongMaterial = MeshPhongMaterial,
  TARGS = /* parameters? */ MeshPhongMaterialParameters
> extends ThMaterial<T, TARGS> {
  public getType(): Type<MeshPhongMaterial> {
    return MeshPhongMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set color(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  // @ts-ignore
  public get color(): Color | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set specular(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.specular = applyValue<Color>(this._objRef.specular, value);
    }
  }
  // @ts-ignore
  public get specular(): Color | undefined {
    return this._objRef?.specular;
  }
  @Input()
  public set shininess(value: number) {
    if (this._objRef) {
      this._objRef.shininess = value;
    }
  }

  // @ts-ignore
  public get shininess(): number | undefined {
    return this._objRef?.shininess;
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  // @ts-ignore
  public get map(): (Texture | null) | undefined {
    return this._objRef?.map;
  }
  @Input()
  public set lightMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.lightMap = value;
    }
  }

  // @ts-ignore
  public get lightMap(): (Texture | null) | undefined {
    return this._objRef?.lightMap;
  }
  @Input()
  public set lightMapIntensity(value: number) {
    if (this._objRef) {
      this._objRef.lightMapIntensity = value;
    }
  }

  // @ts-ignore
  public get lightMapIntensity(): number | undefined {
    return this._objRef?.lightMapIntensity;
  }
  @Input()
  public set aoMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.aoMap = value;
    }
  }

  // @ts-ignore
  public get aoMap(): (Texture | null) | undefined {
    return this._objRef?.aoMap;
  }
  @Input()
  public set aoMapIntensity(value: number) {
    if (this._objRef) {
      this._objRef.aoMapIntensity = value;
    }
  }

  // @ts-ignore
  public get aoMapIntensity(): number | undefined {
    return this._objRef?.aoMapIntensity;
  }
  @Input()
  public set emissive(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.emissive = applyValue<Color>(this._objRef.emissive, value);
    }
  }
  // @ts-ignore
  public get emissive(): Color | undefined {
    return this._objRef?.emissive;
  }
  @Input()
  public set emissiveIntensity(value: number) {
    if (this._objRef) {
      this._objRef.emissiveIntensity = value;
    }
  }

  // @ts-ignore
  public get emissiveIntensity(): number | undefined {
    return this._objRef?.emissiveIntensity;
  }
  @Input()
  public set emissiveMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.emissiveMap = value;
    }
  }

  // @ts-ignore
  public get emissiveMap(): (Texture | null) | undefined {
    return this._objRef?.emissiveMap;
  }
  @Input()
  public set bumpMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.bumpMap = value;
    }
  }

  // @ts-ignore
  public get bumpMap(): (Texture | null) | undefined {
    return this._objRef?.bumpMap;
  }
  @Input()
  public set bumpScale(value: number) {
    if (this._objRef) {
      this._objRef.bumpScale = value;
    }
  }

  // @ts-ignore
  public get bumpScale(): number | undefined {
    return this._objRef?.bumpScale;
  }
  @Input()
  public set normalMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.normalMap = value;
    }
  }

  // @ts-ignore
  public get normalMap(): (Texture | null) | undefined {
    return this._objRef?.normalMap;
  }
  @Input()
  public set normalMapType(value: NormalMapTypes) {
    if (this._objRef) {
      this._objRef.normalMapType = value;
    }
  }

  // @ts-ignore
  public get normalMapType(): NormalMapTypes | undefined {
    return this._objRef?.normalMapType;
  }
  @Input()
  public set normalScale(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.normalScale = applyValue<Vector2>(
        this._objRef.normalScale,
        value
      );
    }
  }
  // @ts-ignore
  public get normalScale(): Vector2 | undefined {
    return this._objRef?.normalScale;
  }
  @Input()
  public set displacementMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.displacementMap = value;
    }
  }

  // @ts-ignore
  public get displacementMap(): (Texture | null) | undefined {
    return this._objRef?.displacementMap;
  }
  @Input()
  public set displacementScale(value: number) {
    if (this._objRef) {
      this._objRef.displacementScale = value;
    }
  }

  // @ts-ignore
  public get displacementScale(): number | undefined {
    return this._objRef?.displacementScale;
  }
  @Input()
  public set displacementBias(value: number) {
    if (this._objRef) {
      this._objRef.displacementBias = value;
    }
  }

  // @ts-ignore
  public get displacementBias(): number | undefined {
    return this._objRef?.displacementBias;
  }
  @Input()
  public set specularMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.specularMap = value;
    }
  }

  // @ts-ignore
  public get specularMap(): (Texture | null) | undefined {
    return this._objRef?.specularMap;
  }
  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  // @ts-ignore
  public get alphaMap(): (Texture | null) | undefined {
    return this._objRef?.alphaMap;
  }
  @Input()
  public set envMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.envMap = value;
    }
  }

  // @ts-ignore
  public get envMap(): (Texture | null) | undefined {
    return this._objRef?.envMap;
  }
  @Input()
  public set combine(value: Combine) {
    if (this._objRef) {
      this._objRef.combine = value;
    }
  }

  // @ts-ignore
  public get combine(): Combine | undefined {
    return this._objRef?.combine;
  }
  @Input()
  public set reflectivity(value: number) {
    if (this._objRef) {
      this._objRef.reflectivity = value;
    }
  }

  // @ts-ignore
  public get reflectivity(): number | undefined {
    return this._objRef?.reflectivity;
  }
  @Input()
  public set refractionRatio(value: number) {
    if (this._objRef) {
      this._objRef.refractionRatio = value;
    }
  }

  // @ts-ignore
  public get refractionRatio(): number | undefined {
    return this._objRef?.refractionRatio;
  }
  @Input()
  public set wireframe(value: boolean) {
    if (this._objRef) {
      this._objRef.wireframe = value;
    }
  }

  // @ts-ignore
  public get wireframe(): boolean | undefined {
    return this._objRef?.wireframe;
  }
  @Input()
  public set wireframeLinewidth(value: number) {
    if (this._objRef) {
      this._objRef.wireframeLinewidth = value;
    }
  }

  // @ts-ignore
  public get wireframeLinewidth(): number | undefined {
    return this._objRef?.wireframeLinewidth;
  }
  @Input()
  public set wireframeLinecap(value: string) {
    if (this._objRef) {
      this._objRef.wireframeLinecap = value;
    }
  }

  // @ts-ignore
  public get wireframeLinecap(): string | undefined {
    return this._objRef?.wireframeLinecap;
  }
  @Input()
  public set wireframeLinejoin(value: string) {
    if (this._objRef) {
      this._objRef.wireframeLinejoin = value;
    }
  }

  // @ts-ignore
  public get wireframeLinejoin(): string | undefined {
    return this._objRef?.wireframeLinejoin;
  }
  @Input()
  public set flatShading(value: boolean) {
    if (this._objRef) {
      this._objRef.flatShading = value;
    }
  }

  // @ts-ignore
  public get flatShading(): boolean | undefined {
    return this._objRef?.flatShading;
  }
  @Input()
  public set metal(value: boolean) {
    if (this._objRef) {
      this._objRef.metal = value;
    }
  }

  // @ts-ignore
  public get metal(): boolean | undefined {
    return this._objRef?.metal;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  // @ts-ignore
  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
}
