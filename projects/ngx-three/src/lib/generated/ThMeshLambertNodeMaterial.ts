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
  MeshLambertNodeMaterial,
  MeshLambertNodeMaterialParameters,
} from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-meshLambertNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshLambertNodeMaterial),
    },
  ],
})
export class ThMeshLambertNodeMaterial<
  T extends MeshLambertNodeMaterial = MeshLambertNodeMaterial,
  TARGS = /* parameters? */ MeshLambertNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<MeshLambertNodeMaterial> {
    return MeshLambertNodeMaterial;
  }

  public get isMeshLambertNodeMaterial(): boolean | undefined {
    return this._objRef?.isMeshLambertNodeMaterial;
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
