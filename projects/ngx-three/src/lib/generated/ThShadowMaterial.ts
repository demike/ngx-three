/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Color, ShadowMaterial, ShadowMaterialParameters } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-shadowMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThShadowMaterial) },
  ],
})
export class ThShadowMaterial<
  T extends ShadowMaterial = ShadowMaterial,
  TARGS extends any[] = [parameters?: ShadowMaterialParameters]
> extends ThMaterial<T, TARGS> {
  protected getType(): Type<ShadowMaterial> {
    return ShadowMaterial;
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
  public set transparent(value: boolean) {
    if (this._objRef) {
      this._objRef.transparent = value;
    }
  }
}
