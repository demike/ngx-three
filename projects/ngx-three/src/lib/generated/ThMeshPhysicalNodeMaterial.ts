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
import {
  MeshPhysicalNodeMaterial,
  MeshPhysicalNodeMaterialParameters,
} from 'three/webgpu';
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

  public get isMeshPhysicalNodeMaterial(): boolean | undefined {
    return this._objRef?.isMeshPhysicalNodeMaterial;
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
  public set iorNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.iorNode = value;
    }
  }

  public get iorNode(): (Node | null) | undefined {
    return this._objRef?.iorNode;
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
}
