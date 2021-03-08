/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, ShadowMaterial, ShadowMaterialParameters } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-shadowMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThMaterial, useExisting: forwardRef(() => ThShadowMaterial) }]
})
export class ThShadowMaterial<TARGS extends any[] = [parameters?: ShadowMaterialParameters]> extends ThMaterial<TARGS> {
  @Input()
  public obj!: ShadowMaterial;
  protected getType(): Type<ShadowMaterial> {
    return ShadowMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.color = applyValue<Color>(this.obj.color, value);
    }
  }
  @Input()
  public set transparent(value: boolean) {
    if (this.obj) {
      this.obj.transparent = value;
    }
  }
}
