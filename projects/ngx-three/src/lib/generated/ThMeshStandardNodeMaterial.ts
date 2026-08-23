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
  MeshStandardNodeMaterial,
  MeshStandardNodeMaterialParameters,
} from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-meshStandardNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshStandardNodeMaterial),
    },
  ],
})
export class ThMeshStandardNodeMaterial<
  T extends MeshStandardNodeMaterial = MeshStandardNodeMaterial,
  TARGS = /* parameters? */ MeshStandardNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<MeshStandardNodeMaterial> {
    return MeshStandardNodeMaterial;
  }

  public get isMeshStandardNodeMaterial(): boolean | undefined {
    return this._objRef?.isMeshStandardNodeMaterial;
  }
  @Input()
  public set emissiveNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.emissiveNode = value;
    }
  }

  public get emissiveNode(): (Node | null) | undefined {
    return this._objRef?.emissiveNode;
  }
  @Input()
  public set metalnessNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.metalnessNode = value;
    }
  }

  public get metalnessNode(): (Node | null) | undefined {
    return this._objRef?.metalnessNode;
  }
  @Input()
  public set roughnessNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.roughnessNode = value;
    }
  }

  public get roughnessNode(): (Node | null) | undefined {
    return this._objRef?.roughnessNode;
  }
}
