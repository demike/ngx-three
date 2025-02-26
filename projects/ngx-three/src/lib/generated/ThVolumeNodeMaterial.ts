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
import { NodeMaterialParameters } from 'three/src/materials/nodes/NodeMaterial.js';
import Node from 'three/src/nodes/core/Node.js';
import { VolumeNodeMaterial } from 'three/webgpu';
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
  TARGS = /* parameters? */ NodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<VolumeNodeMaterial> {
    return VolumeNodeMaterial;
  }

  @Input()
  public set lights(value: boolean) {
    if (this._objRef) {
      this._objRef.lights = value;
    }
  }

  public get lights(): boolean | undefined {
    return this._objRef?.lights;
  }
  public get isVolumeNodeMaterial(): true | undefined {
    return this._objRef?.isVolumeNodeMaterial;
  }
  @Input()
  public set testNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.testNode = value;
    }
  }

  public get testNode(): (Node | null) | undefined {
    return this._objRef?.testNode;
  }
}
