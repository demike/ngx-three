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
  MeshPhongNodeMaterial,
  MeshPhongNodeMaterialParameters,
} from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-meshPhongNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshPhongNodeMaterial),
    },
  ],
})
export class ThMeshPhongNodeMaterial<
  T extends MeshPhongNodeMaterial = MeshPhongNodeMaterial,
  TARGS = /* parameters? */ MeshPhongNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<MeshPhongNodeMaterial> {
    return MeshPhongNodeMaterial;
  }

  public get isMeshPhongNodeMaterial(): boolean | undefined {
    return this._objRef?.isMeshPhongNodeMaterial;
  }
  @Input()
  public set shininessNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.shininessNode = value;
    }
  }

  public get shininessNode(): (Node | null) | undefined {
    return this._objRef?.shininessNode;
  }
  @Input()
  public set specularNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.specularNode = value;
    }
  }

  public get specularNode(): (Node | null) | undefined {
    return this._objRef?.specularNode;
  }
}
