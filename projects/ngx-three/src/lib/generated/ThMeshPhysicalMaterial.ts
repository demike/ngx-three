/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import {
  Color,
  ColorRepresentation,
  MeshPhysicalMaterial,
  MeshPhysicalMaterialParameters,
  Texture,
  Vector2
} from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import { ThMeshStandardMaterial } from './ThMeshStandardMaterial';

@Component({
  selector: 'th-meshPhysicalMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshPhysicalMaterial)
    }
  ]
})
export class ThMeshPhysicalMaterial<
  T extends MeshPhysicalMaterial = MeshPhysicalMaterial,
  TARGS = /* parameters? */ MeshPhysicalMaterialParameters
> extends ThMeshStandardMaterial<T, TARGS> {
  public getType(): Type<MeshPhysicalMaterial> {
    return MeshPhysicalMaterial;
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
  public set defines(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.defines = value;
    }
  }

  // @ts-ignore
  public get defines(): { [key: string]: any } | undefined {
    return this._objRef?.defines;
  }
  @Input()
  public set clearcoat(value: number) {
    if (this._objRef) {
      this._objRef.clearcoat = value;
    }
  }

  // @ts-ignore
  public get clearcoat(): number | undefined {
    return this._objRef?.clearcoat;
  }
  @Input()
  public set clearcoatMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.clearcoatMap = value;
    }
  }

  // @ts-ignore
  public get clearcoatMap(): (Texture | null) | undefined {
    return this._objRef?.clearcoatMap;
  }
  @Input()
  public set clearcoatRoughness(value: number) {
    if (this._objRef) {
      this._objRef.clearcoatRoughness = value;
    }
  }

  // @ts-ignore
  public get clearcoatRoughness(): number | undefined {
    return this._objRef?.clearcoatRoughness;
  }
  @Input()
  public set clearcoatRoughnessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.clearcoatRoughnessMap = value;
    }
  }

  // @ts-ignore
  public get clearcoatRoughnessMap(): (Texture | null) | undefined {
    return this._objRef?.clearcoatRoughnessMap;
  }
  @Input()
  public set clearcoatNormalScale(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.clearcoatNormalScale = applyValue<Vector2>(this._objRef.clearcoatNormalScale, value);
    }
  }
  // @ts-ignore
  public get clearcoatNormalScale(): Vector2 | undefined {
    return this._objRef?.clearcoatNormalScale;
  }
  @Input()
  public set clearcoatNormalMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.clearcoatNormalMap = value;
    }
  }

  // @ts-ignore
  public get clearcoatNormalMap(): (Texture | null) | undefined {
    return this._objRef?.clearcoatNormalMap;
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
  public set ior(value: number) {
    if (this._objRef) {
      this._objRef.ior = value;
    }
  }

  // @ts-ignore
  public get ior(): number | undefined {
    return this._objRef?.ior;
  }
  @Input()
  public set sheen(value: number) {
    if (this._objRef) {
      this._objRef.sheen = value;
    }
  }

  // @ts-ignore
  public get sheen(): number | undefined {
    return this._objRef?.sheen;
  }
  @Input()
  public set sheenColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.sheenColor = applyValue<Color>(this._objRef.sheenColor, value);
    }
  }
  // @ts-ignore
  public get sheenColor(): Color | undefined {
    return this._objRef?.sheenColor;
  }
  @Input()
  public set sheenColorMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.sheenColorMap = value;
    }
  }

  // @ts-ignore
  public get sheenColorMap(): (Texture | null) | undefined {
    return this._objRef?.sheenColorMap;
  }
  @Input()
  public set sheenRoughness(value: number) {
    if (this._objRef) {
      this._objRef.sheenRoughness = value;
    }
  }

  // @ts-ignore
  public get sheenRoughness(): number | undefined {
    return this._objRef?.sheenRoughness;
  }
  @Input()
  public set sheenRoughnessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.sheenRoughnessMap = value;
    }
  }

  // @ts-ignore
  public get sheenRoughnessMap(): (Texture | null) | undefined {
    return this._objRef?.sheenRoughnessMap;
  }
  @Input()
  public set transmission(value: number) {
    if (this._objRef) {
      this._objRef.transmission = value;
    }
  }

  // @ts-ignore
  public get transmission(): number | undefined {
    return this._objRef?.transmission;
  }
  @Input()
  public set transmissionMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.transmissionMap = value;
    }
  }

  // @ts-ignore
  public get transmissionMap(): (Texture | null) | undefined {
    return this._objRef?.transmissionMap;
  }
  @Input()
  public set thickness(value: number) {
    if (this._objRef) {
      this._objRef.thickness = value;
    }
  }

  // @ts-ignore
  public get thickness(): number | undefined {
    return this._objRef?.thickness;
  }
  @Input()
  public set thicknessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.thicknessMap = value;
    }
  }

  // @ts-ignore
  public get thicknessMap(): (Texture | null) | undefined {
    return this._objRef?.thicknessMap;
  }
  @Input()
  public set attenuationDistance(value: number) {
    if (this._objRef) {
      this._objRef.attenuationDistance = value;
    }
  }

  // @ts-ignore
  public get attenuationDistance(): number | undefined {
    return this._objRef?.attenuationDistance;
  }
  @Input()
  public set attenuationColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.attenuationColor = applyValue<Color>(this._objRef.attenuationColor, value);
    }
  }
  // @ts-ignore
  public get attenuationColor(): Color | undefined {
    return this._objRef?.attenuationColor;
  }
  @Input()
  public set specularIntensity(value: number) {
    if (this._objRef) {
      this._objRef.specularIntensity = value;
    }
  }

  // @ts-ignore
  public get specularIntensity(): number | undefined {
    return this._objRef?.specularIntensity;
  }
  @Input()
  public set specularColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.specularColor = applyValue<Color>(this._objRef.specularColor, value);
    }
  }
  // @ts-ignore
  public get specularColor(): Color | undefined {
    return this._objRef?.specularColor;
  }
  @Input()
  public set specularIntensityMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.specularIntensityMap = value;
    }
  }

  // @ts-ignore
  public get specularIntensityMap(): (Texture | null) | undefined {
    return this._objRef?.specularIntensityMap;
  }
  @Input()
  public set specularColorMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.specularColorMap = value;
    }
  }

  // @ts-ignore
  public get specularColorMap(): (Texture | null) | undefined {
    return this._objRef?.specularColorMap;
  }
  @Input()
  public set iridescenceMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.iridescenceMap = value;
    }
  }

  // @ts-ignore
  public get iridescenceMap(): (Texture | null) | undefined {
    return this._objRef?.iridescenceMap;
  }
  @Input()
  public set iridescenceIOR(value: number) {
    if (this._objRef) {
      this._objRef.iridescenceIOR = value;
    }
  }

  // @ts-ignore
  public get iridescenceIOR(): number | undefined {
    return this._objRef?.iridescenceIOR;
  }
  @Input()
  public set iridescence(value: number) {
    if (this._objRef) {
      this._objRef.iridescence = value;
    }
  }

  // @ts-ignore
  public get iridescence(): number | undefined {
    return this._objRef?.iridescence;
  }
  @Input()
  public set iridescenceThicknessRange(value: [number, number]) {
    if (this._objRef) {
      this._objRef.iridescenceThicknessRange = value;
    }
  }

  // @ts-ignore
  public get iridescenceThicknessRange(): [number, number] | undefined {
    return this._objRef?.iridescenceThicknessRange;
  }
  @Input()
  public set iridescenceThicknessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.iridescenceThicknessMap = value;
    }
  }

  // @ts-ignore
  public get iridescenceThicknessMap(): (Texture | null) | undefined {
    return this._objRef?.iridescenceThicknessMap;
  }
}
