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
import Node from 'three/src/nodes/core/Node.js';
import { Texture } from 'three/src/textures/Texture.js';
import {
  Color,
  ColorRepresentation,
  SpriteNodeMaterial,
  SpriteNodeMaterialParameters,
} from 'three/webgpu';
import { applyValue } from '../util';
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

  @Input()
  public set isSpriteNodeMaterial(value: true) {
    if (this._objRef) {
      this._objRef.isSpriteNodeMaterial = value;
    }
  }

  public get isSpriteNodeMaterial(): true | undefined {
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
  public get isSpriteMaterial(): true | undefined {
    return this._objRef?.isSpriteMaterial;
  }
  @Input()
  public set color(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  public get color(): Color | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  public get map(): (Texture | null) | undefined {
    return this._objRef?.map;
  }
  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  public get alphaMap(): (Texture | null) | undefined {
    return this._objRef?.alphaMap;
  }
  @Input()
  public set rotation(value: number) {
    if (this._objRef) {
      this._objRef.rotation = value;
    }
  }

  public get rotation(): number | undefined {
    return this._objRef?.rotation;
  }
  @Input()
  public set sizeAttenuation(value: boolean) {
    if (this._objRef) {
      this._objRef.sizeAttenuation = value;
    }
  }

  public get sizeAttenuation(): boolean | undefined {
    return this._objRef?.sizeAttenuation;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
}
