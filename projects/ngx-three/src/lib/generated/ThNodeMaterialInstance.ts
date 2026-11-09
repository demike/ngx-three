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
import NodeMaterial from 'three/src/materials/nodes/NodeMaterial.js';
import { MaterialEventMap, NodeMaterialInstance } from 'three/webgpu';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-nodeMaterialInstance',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThNodeMaterialInstance),
    },
  ],
})
export class ThNodeMaterialInstance<
  T extends NodeMaterialInstance = NodeMaterialInstance,
  TARGS = /* nodeMaterial */ NodeMaterial,
> extends ThMaterial<MaterialEventMap, T, TARGS> {
  public getType(): Type<NodeMaterialInstance> {
    return NodeMaterialInstance;
  }

  public get isNodeMaterialInstance(): boolean | undefined {
    return this._objRef?.isNodeMaterialInstance;
  }
  @Input()
  public set nodeMaterial(value: NodeMaterial) {
    if (this._objRef) {
      this._objRef.nodeMaterial = value;
    }
  }

  public get nodeMaterial(): NodeMaterial | undefined {
    return this._objRef?.nodeMaterial;
  }
}
