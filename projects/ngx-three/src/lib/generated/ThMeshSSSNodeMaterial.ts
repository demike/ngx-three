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
import { MeshPhysicalNodeMaterialParameters } from 'three/src/materials/nodes/MeshPhysicalNodeMaterial.js';
import ConstNode from 'three/src/nodes/core/ConstNode.js';
import Node from 'three/src/nodes/core/Node.js';
import { MeshSSSNodeMaterial } from 'three/webgpu';
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
  TARGS = /* parameters? */ MeshPhysicalNodeMaterialParameters,
> extends ThMeshPhysicalNodeMaterial<T, TARGS> {
  public getType(): Type<MeshSSSNodeMaterial> {
    return MeshSSSNodeMaterial;
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
  public set thicknessDistortionNode(value: ConstNode<number>) {
    if (this._objRef) {
      this._objRef.thicknessDistortionNode = value;
    }
  }

  public get thicknessDistortionNode(): ConstNode<number> | undefined {
    return this._objRef?.thicknessDistortionNode;
  }
  @Input()
  public set thicknessAmbientNode(value: ConstNode<number>) {
    if (this._objRef) {
      this._objRef.thicknessAmbientNode = value;
    }
  }

  public get thicknessAmbientNode(): ConstNode<number> | undefined {
    return this._objRef?.thicknessAmbientNode;
  }
  @Input()
  public set thicknessAttenuationNode(value: ConstNode<number>) {
    if (this._objRef) {
      this._objRef.thicknessAttenuationNode = value;
    }
  }

  public get thicknessAttenuationNode(): ConstNode<number> | undefined {
    return this._objRef?.thicknessAttenuationNode;
  }
  @Input()
  public set thicknessPowerNode(value: ConstNode<number>) {
    if (this._objRef) {
      this._objRef.thicknessPowerNode = value;
    }
  }

  public get thicknessPowerNode(): ConstNode<number> | undefined {
    return this._objRef?.thicknessPowerNode;
  }
  @Input()
  public set thicknessScaleNode(value: ConstNode<number>) {
    if (this._objRef) {
      this._objRef.thicknessScaleNode = value;
    }
  }

  public get thicknessScaleNode(): ConstNode<number> | undefined {
    return this._objRef?.thicknessScaleNode;
  }
  public get useSSS(): boolean | undefined {
    return this._objRef?.useSSS;
  }
}
