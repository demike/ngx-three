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
  MeshToonNodeMaterial,
  MeshToonNodeMaterialParameters,
} from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-meshToonNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshToonNodeMaterial),
    },
  ],
})
export class ThMeshToonNodeMaterial<
  T extends MeshToonNodeMaterial = MeshToonNodeMaterial,
  TARGS = /* parameters? */ MeshToonNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<MeshToonNodeMaterial> {
    return MeshToonNodeMaterial;
  }

  public get isMeshToonNodeMaterial(): boolean | undefined {
    return this._objRef?.isMeshToonNodeMaterial;
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
}
