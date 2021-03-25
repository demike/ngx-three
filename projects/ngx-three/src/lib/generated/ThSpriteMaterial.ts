/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  Color,
  SpriteMaterial,
  SpriteMaterialParameters,
  Texture,
} from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-spriteMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThSpriteMaterial) },
  ],
})
export class ThSpriteMaterial<
  T extends SpriteMaterial = SpriteMaterial,
  TARGS extends any[] = [parameters?: SpriteMaterialParameters]
> extends ThMaterial<T, TARGS> {
  protected getType(): Type<SpriteMaterial> {
    return SpriteMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  @Input()
  public set rotation(value: number) {
    if (this._objRef) {
      this._objRef.rotation = value;
    }
  }

  @Input()
  public set sizeAttenuation(value: boolean) {
    if (this._objRef) {
      this._objRef.sizeAttenuation = value;
    }
  }

  @Input()
  public set transparent(value: boolean) {
    if (this._objRef) {
      this._objRef.transparent = value;
    }
  }
}
