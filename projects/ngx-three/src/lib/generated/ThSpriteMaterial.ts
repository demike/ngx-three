/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, SpriteMaterial, SpriteMaterialParameters, Texture } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-spriteMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThMaterial, useExisting: forwardRef(() => ThSpriteMaterial) }]
})
export class ThSpriteMaterial<TARGS extends any[] = [parameters?: SpriteMaterialParameters]> extends ThMaterial<TARGS> {
  @Input()
  public objRef!: SpriteMaterial;
  protected getType(): Type<SpriteMaterial> {
    return SpriteMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this.objRef) {
      this.objRef.color = applyValue<Color>(this.objRef.color, value);
    }
  }
  @Input()
  public set map(value: Texture | null) {
    if (this.objRef) {
      this.objRef.map = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.alphaMap = value;
    }
  }

  @Input()
  public set rotation(value: number) {
    if (this.objRef) {
      this.objRef.rotation = value;
    }
  }

  @Input()
  public set sizeAttenuation(value: boolean) {
    if (this.objRef) {
      this.objRef.sizeAttenuation = value;
    }
  }

  @Input()
  public set transparent(value: boolean) {
    if (this.objRef) {
      this.objRef.transparent = value;
    }
  }
}
