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
import { VolumeNodeMaterial, VolumeNodeMaterialParameters } from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-volumeNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThVolumeNodeMaterial),
    },
  ],
})
export class ThVolumeNodeMaterial<
  T extends VolumeNodeMaterial = VolumeNodeMaterial,
  TARGS = /* parameters? */ VolumeNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<VolumeNodeMaterial> {
    return VolumeNodeMaterial;
  }

  public get isVolumeNodeMaterial(): boolean | undefined {
    return this._objRef?.isVolumeNodeMaterial;
  }
  @Input()
  public set steps(value: number) {
    if (this._objRef) {
      this._objRef.steps = value;
    }
  }

  public get steps(): number | undefined {
    return this._objRef?.steps;
  }
  @Input()
  public set offsetNode(value: Node) {
    if (this._objRef) {
      this._objRef.offsetNode = value;
    }
  }

  public get offsetNode(): Node | undefined {
    return this._objRef?.offsetNode;
  }
  @Input()
  public set scatteringNode(
    value: (params: { positionRay: Node<'vec3'> }) => Node | null,
  ) {
    if (this._objRef) {
      this._objRef.scatteringNode = value;
    }
  }

  public get scatteringNode():
    | ((params: { positionRay: Node<'vec3'> }) => Node | null)
    | undefined {
    return this._objRef?.scatteringNode;
  }
}
