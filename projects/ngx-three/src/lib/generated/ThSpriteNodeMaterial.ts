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
import { SpriteNodeMaterial, SpriteNodeMaterialParameters } from 'three/webgpu';
import { ThMaterial } from './ThMaterial';
import { ThNodeMaterial } from './ThNodeMaterial';

@Component({
  selector: 'th-spriteNodeMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThSpriteNodeMaterial),
    },
  ],
})
export class ThSpriteNodeMaterial<
  T extends SpriteNodeMaterial = SpriteNodeMaterial,
  TARGS = /* parameters? */ SpriteNodeMaterialParameters,
> extends ThNodeMaterial<T, TARGS> {
  public getType(): Type<SpriteNodeMaterial> {
    return SpriteNodeMaterial;
  }

  public get isSpriteMaterial(): boolean | undefined {
    return this._objRef?.isSpriteMaterial;
  }
  public get isSpriteNodeMaterial(): boolean | undefined {
    return this._objRef?.isSpriteNodeMaterial;
  }
  @Input()
  public set rotationNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.rotationNode = value;
    }
  }

  public get rotationNode(): (Node | null) | undefined {
    return this._objRef?.rotationNode;
  }
  @Input()
  public set scaleNode(value: Node | null) {
    if (this._objRef) {
      this._objRef.scaleNode = value;
    }
  }

  public get scaleNode(): (Node | null) | undefined {
    return this._objRef?.scaleNode;
  }
  @Input()
  public set sizeAttenuation(value: boolean) {
    if (this._objRef) {
      this._objRef.sizeAttenuation = value;
    }
  }
}
