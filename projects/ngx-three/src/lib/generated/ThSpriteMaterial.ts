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
import {
  Color,
  ColorRepresentation,
  SpriteMaterial,
  SpriteMaterialParameters,
} from 'three';
import { Texture } from 'three/src/textures/Texture.js';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-spriteMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThSpriteMaterial) },
  ],
})
export class ThSpriteMaterial<
  T extends SpriteMaterial = SpriteMaterial,
  TARGS = /* parameters? */ SpriteMaterialParameters,
> extends ThMaterial<T, TARGS> {
  public getType(): Type<SpriteMaterial> {
    return SpriteMaterial;
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
  public set transparent(value: boolean) {
    if (this._objRef) {
      this._objRef.transparent = value;
    }
  }

  public get transparent(): boolean | undefined {
    return this._objRef?.transparent;
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
