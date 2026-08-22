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
  MeshSSSNodeMaterial,
  MeshSSSNodeMaterialParameters,
} from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThMeshPhysicalNodeMaterial } from './ThMeshPhysicalNodeMaterial';

@Component({
  selector: 'th-meshSSSNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshSSSNodeMaterial),
    },
  ],
})
export class ThMeshSSSNodeMaterial<
  T extends MeshSSSNodeMaterial = MeshSSSNodeMaterial,
  TARGS = /* parameters? */ MeshSSSNodeMaterialParameters,
> extends ThMeshPhysicalNodeMaterial<T, TARGS> {
  public getType(): Type<MeshSSSNodeMaterial> {
    return MeshSSSNodeMaterial;
  }

  public get useSSS(): boolean | undefined {
    return this._objRef?.useSSS;
  }
  @Input()
  public set thicknessColorNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.thicknessColorNode = value;
    }
  }

  public get thicknessColorNode(): (Node | null) | undefined {
    return this._objRef?.thicknessColorNode;
  }
  @Input()
  public set thicknessDistortionNode(value: Node<'float'>) {
    if (this._objRef) {
      this._objRef.thicknessDistortionNode = value;
    }
  }

  public get thicknessDistortionNode(): Node<'float'> | undefined {
    return this._objRef?.thicknessDistortionNode;
  }
  @Input()
  public set thicknessAmbientNode(value: Node<'float'>) {
    if (this._objRef) {
      this._objRef.thicknessAmbientNode = value;
    }
  }

  public get thicknessAmbientNode(): Node<'float'> | undefined {
    return this._objRef?.thicknessAmbientNode;
  }
  @Input()
  public set thicknessAttenuationNode(value: Node<'float'>) {
    if (this._objRef) {
      this._objRef.thicknessAttenuationNode = value;
    }
  }

  public get thicknessAttenuationNode(): Node<'float'> | undefined {
    return this._objRef?.thicknessAttenuationNode;
  }
  @Input()
  public set thicknessPowerNode(value: Node<'float'>) {
    if (this._objRef) {
      this._objRef.thicknessPowerNode = value;
    }
  }

  public get thicknessPowerNode(): Node<'float'> | undefined {
    return this._objRef?.thicknessPowerNode;
  }
  @Input()
  public set thicknessScaleNode(value: Node<'float'>) {
    if (this._objRef) {
      this._objRef.thicknessScaleNode = value;
    }
  }

  public get thicknessScaleNode(): Node<'float'> | undefined {
    return this._objRef?.thicknessScaleNode;
  }
}
