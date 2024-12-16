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
import Node from 'three/src/nodes/core/Node.js';
import { Texture } from 'three/src/textures/Texture.js';
import {
  Color,
  ColorRepresentation,
  MeshPhysicalNodeMaterial,
  MeshPhysicalNodeMaterialParameters,
  Vector2,
} from 'three/webgpu';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import { ThMeshStandardNodeMaterial } from './ThMeshStandardNodeMaterial';

@Component({
  selector: 'th-meshPhysicalNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshPhysicalNodeMaterial),
    },
  ],
})
export class ThMeshPhysicalNodeMaterial<
  T extends MeshPhysicalNodeMaterial = MeshPhysicalNodeMaterial,
  TARGS = /* parameters? */ MeshPhysicalNodeMaterialParameters,
> extends ThMeshStandardNodeMaterial<T, TARGS> {
  public getType(): Type<MeshPhysicalNodeMaterial> {
    return MeshPhysicalNodeMaterial;
  }

  public get isMeshPhysicalNodeMaterial(): true | undefined {
    return this._objRef?.isMeshPhysicalNodeMaterial;
  }
  @Input()
  public set clearcoatNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.clearcoatNode = value;
    }
  }

  public get clearcoatNode(): (Node | null) | undefined {
    return this._objRef?.clearcoatNode;
  }
  @Input()
  public set clearcoatRoughnessNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.clearcoatRoughnessNode = value;
    }
  }

  public get clearcoatRoughnessNode(): (Node | null) | undefined {
    return this._objRef?.clearcoatRoughnessNode;
  }
  @Input()
  public set clearcoatNormalNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.clearcoatNormalNode = value;
    }
  }

  public get clearcoatNormalNode(): (Node | null) | undefined {
    return this._objRef?.clearcoatNormalNode;
  }
  @Input()
  public set sheenNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.sheenNode = value;
    }
  }

  public get sheenNode(): (Node | null) | undefined {
    return this._objRef?.sheenNode;
  }
  @Input()
  public set sheenRoughnessNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.sheenRoughnessNode = value;
    }
  }

  public get sheenRoughnessNode(): (Node | null) | undefined {
    return this._objRef?.sheenRoughnessNode;
  }
  @Input()
  public set iridescenceNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.iridescenceNode = value;
    }
  }

  public get iridescenceNode(): (Node | null) | undefined {
    return this._objRef?.iridescenceNode;
  }
  @Input()
  public set iridescenceIORNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.iridescenceIORNode = value;
    }
  }

  public get iridescenceIORNode(): (Node | null) | undefined {
    return this._objRef?.iridescenceIORNode;
  }
  @Input()
  public set iridescenceThicknessNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.iridescenceThicknessNode = value;
    }
  }

  public get iridescenceThicknessNode(): (Node | null) | undefined {
    return this._objRef?.iridescenceThicknessNode;
  }
  @Input()
  public set iorNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.iorNode = value;
    }
  }

  public get iorNode(): (Node | null) | undefined {
    return this._objRef?.iorNode;
  }
  @Input()
  public set specularIntensityNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.specularIntensityNode = value;
    }
  }

  public get specularIntensityNode(): (Node | null) | undefined {
    return this._objRef?.specularIntensityNode;
  }
  @Input()
  public set specularColorNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.specularColorNode = value;
    }
  }

  public get specularColorNode(): (Node | null) | undefined {
    return this._objRef?.specularColorNode;
  }
  @Input()
  public set transmissionNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.transmissionNode = value;
    }
  }

  public get transmissionNode(): (Node | null) | undefined {
    return this._objRef?.transmissionNode;
  }
  @Input()
  public set thicknessNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.thicknessNode = value;
    }
  }

  public get thicknessNode(): (Node | null) | undefined {
    return this._objRef?.thicknessNode;
  }
  @Input()
  public set attenuationDistanceNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.attenuationDistanceNode = value;
    }
  }

  public get attenuationDistanceNode(): (Node | null) | undefined {
    return this._objRef?.attenuationDistanceNode;
  }
  @Input()
  public set attenuationColorNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.attenuationColorNode = value;
    }
  }

  public get attenuationColorNode(): (Node | null) | undefined {
    return this._objRef?.attenuationColorNode;
  }
  @Input()
  public set dispersionNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.dispersionNode = value;
    }
  }

  public get dispersionNode(): (Node | null) | undefined {
    return this._objRef?.dispersionNode;
  }
  @Input()
  public set anisotropyNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.anisotropyNode = value;
    }
  }

  public get anisotropyNode(): (Node | null) | undefined {
    return this._objRef?.anisotropyNode;
  }
  public get isMeshPhysicalMaterial(): true | undefined {
    return this._objRef?.isMeshPhysicalMaterial;
  }
  @Input()
  public set anisotropyRotation(value: number) {
    if (this._objRef) {
      this._objRef.anisotropyRotation = value;
    }
  }

  public get anisotropyRotation(): number | undefined {
    return this._objRef?.anisotropyRotation;
  }
  @Input()
  public set anisotropyMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.anisotropyMap = value;
    }
  }

  public get anisotropyMap(): (Texture | null) | undefined {
    return this._objRef?.anisotropyMap;
  }
  @Input()
  public set clearcoatMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.clearcoatMap = value;
    }
  }

  public get clearcoatMap(): (Texture | null) | undefined {
    return this._objRef?.clearcoatMap;
  }
  @Input()
  public set clearcoatRoughness(value: number) {
    if (this._objRef) {
      this._objRef.clearcoatRoughness = value;
    }
  }

  public get clearcoatRoughness(): number | undefined {
    return this._objRef?.clearcoatRoughness;
  }
  @Input()
  public set clearcoatRoughnessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.clearcoatRoughnessMap = value;
    }
  }

  public get clearcoatRoughnessMap(): (Texture | null) | undefined {
    return this._objRef?.clearcoatRoughnessMap;
  }
  @Input()
  public set clearcoatNormalScale(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.clearcoatNormalScale = applyValue<Vector2>(
        this._objRef.clearcoatNormalScale,
        value,
      );
    }
  }
  public get clearcoatNormalScale(): Vector2 | undefined {
    return this._objRef?.clearcoatNormalScale;
  }
  @Input()
  public set clearcoatNormalMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.clearcoatNormalMap = value;
    }
  }

  public get clearcoatNormalMap(): (Texture | null) | undefined {
    return this._objRef?.clearcoatNormalMap;
  }
  @Input()
  public set ior(value: number) {
    if (this._objRef) {
      this._objRef.ior = value;
    }
  }

  public get ior(): number | undefined {
    return this._objRef?.ior;
  }
  public get reflectivity(): number | undefined {
    return this._objRef?.reflectivity;
  }
  @Input()
  public set reflectivity(value: number) {
    if (this._objRef) {
      this._objRef.reflectivity = value;
    }
  }

  @Input()
  public set iridescenceMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.iridescenceMap = value;
    }
  }

  public get iridescenceMap(): (Texture | null) | undefined {
    return this._objRef?.iridescenceMap;
  }
  @Input()
  public set iridescenceIOR(value: number) {
    if (this._objRef) {
      this._objRef.iridescenceIOR = value;
    }
  }

  public get iridescenceIOR(): number | undefined {
    return this._objRef?.iridescenceIOR;
  }
  @Input()
  public set iridescenceThicknessRange(value: [number, number]) {
    if (this._objRef) {
      this._objRef.iridescenceThicknessRange = value;
    }
  }

  public get iridescenceThicknessRange(): [number, number] | undefined {
    return this._objRef?.iridescenceThicknessRange;
  }
  @Input()
  public set iridescenceThicknessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.iridescenceThicknessMap = value;
    }
  }

  public get iridescenceThicknessMap(): (Texture | null) | undefined {
    return this._objRef?.iridescenceThicknessMap;
  }
  @Input()
  public set sheenColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.sheenColor = applyValue<Color>(
        this._objRef.sheenColor,
        value,
      );
    }
  }
  public get sheenColor(): Color | undefined {
    return this._objRef?.sheenColor;
  }
  @Input()
  public set sheenColorMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.sheenColorMap = value;
    }
  }

  public get sheenColorMap(): (Texture | null) | undefined {
    return this._objRef?.sheenColorMap;
  }
  @Input()
  public set sheenRoughness(value: number) {
    if (this._objRef) {
      this._objRef.sheenRoughness = value;
    }
  }

  public get sheenRoughness(): number | undefined {
    return this._objRef?.sheenRoughness;
  }
  @Input()
  public set sheenRoughnessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.sheenRoughnessMap = value;
    }
  }

  public get sheenRoughnessMap(): (Texture | null) | undefined {
    return this._objRef?.sheenRoughnessMap;
  }
  @Input()
  public set transmissionMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.transmissionMap = value;
    }
  }

  public get transmissionMap(): (Texture | null) | undefined {
    return this._objRef?.transmissionMap;
  }
  @Input()
  public set thickness(value: number) {
    if (this._objRef) {
      this._objRef.thickness = value;
    }
  }

  public get thickness(): number | undefined {
    return this._objRef?.thickness;
  }
  @Input()
  public set thicknessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.thicknessMap = value;
    }
  }

  public get thicknessMap(): (Texture | null) | undefined {
    return this._objRef?.thicknessMap;
  }
  @Input()
  public set attenuationDistance(value: number) {
    if (this._objRef) {
      this._objRef.attenuationDistance = value;
    }
  }

  public get attenuationDistance(): number | undefined {
    return this._objRef?.attenuationDistance;
  }
  @Input()
  public set attenuationColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.attenuationColor = applyValue<Color>(
        this._objRef.attenuationColor,
        value,
      );
    }
  }
  public get attenuationColor(): Color | undefined {
    return this._objRef?.attenuationColor;
  }
  @Input()
  public set specularIntensity(value: number) {
    if (this._objRef) {
      this._objRef.specularIntensity = value;
    }
  }

  public get specularIntensity(): number | undefined {
    return this._objRef?.specularIntensity;
  }
  @Input()
  public set specularIntensityMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.specularIntensityMap = value;
    }
  }

  public get specularIntensityMap(): (Texture | null) | undefined {
    return this._objRef?.specularIntensityMap;
  }
  @Input()
  public set specularColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.specularColor = applyValue<Color>(
        this._objRef.specularColor,
        value,
      );
    }
  }
  public get specularColor(): Color | undefined {
    return this._objRef?.specularColor;
  }
  @Input()
  public set specularColorMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.specularColorMap = value;
    }
  }

  public get specularColorMap(): (Texture | null) | undefined {
    return this._objRef?.specularColorMap;
  }
  public get anisotropy(): number | undefined {
    return this._objRef?.anisotropy;
  }
  @Input()
  public set anisotropy(value: number) {
    if (this._objRef) {
      this._objRef.anisotropy = value;
    }
  }

  public get clearcoat(): number | undefined {
    return this._objRef?.clearcoat;
  }
  @Input()
  public set clearcoat(value: number) {
    if (this._objRef) {
      this._objRef.clearcoat = value;
    }
  }

  public get iridescence(): number | undefined {
    return this._objRef?.iridescence;
  }
  @Input()
  public set iridescence(value: number) {
    if (this._objRef) {
      this._objRef.iridescence = value;
    }
  }

  public get dispersion(): number | undefined {
    return this._objRef?.dispersion;
  }
  @Input()
  public set dispersion(value: number) {
    if (this._objRef) {
      this._objRef.dispersion = value;
    }
  }

  public get sheen(): number | undefined {
    return this._objRef?.sheen;
  }
  @Input()
  public set sheen(value: number) {
    if (this._objRef) {
      this._objRef.sheen = value;
    }
  }

  public get transmission(): number | undefined {
    return this._objRef?.transmission;
  }
  @Input()
  public set transmission(value: number) {
    if (this._objRef) {
      this._objRef.transmission = value;
    }
  }

  public get useClearcoat(): boolean | undefined {
    return this._objRef?.useClearcoat;
  }
  public get useIridescence(): boolean | undefined {
    return this._objRef?.useIridescence;
  }
  public get useSheen(): boolean | undefined {
    return this._objRef?.useSheen;
  }
  public get useAnisotropy(): boolean | undefined {
    return this._objRef?.useAnisotropy;
  }
  public get useTransmission(): boolean | undefined {
    return this._objRef?.useTransmission;
  }
  public get useDispersion(): boolean | undefined {
    return this._objRef?.useDispersion;
  }
}
