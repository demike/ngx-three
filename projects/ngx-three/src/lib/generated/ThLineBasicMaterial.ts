/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, LineBasicMaterial, LineBasicMaterialParameters } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-lineBasicMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThMaterial, useExisting: forwardRef(() => ThLineBasicMaterial) }]
})
export class ThLineBasicMaterial<
  T extends LineBasicMaterial = LineBasicMaterial,
  TARGS extends any[] = [parameters?: LineBasicMaterialParameters]
> extends ThMaterial<T, TARGS> {
  public getType(): Type<LineBasicMaterial> {
    return LineBasicMaterial;
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
  public set linewidth(value: number) {
    if (this._objRef) {
      this._objRef.linewidth = value;
    }
  }

  @Input()
  public set linecap(value: string) {
    if (this._objRef) {
      this._objRef.linecap = value;
    }
  }

  @Input()
  public set linejoin(value: string) {
    if (this._objRef) {
      this._objRef.linejoin = value;
    }
  }

  @Input()
  public set morphTargets(value: boolean) {
    if (this._objRef) {
      this._objRef.morphTargets = value;
    }
  }
}
