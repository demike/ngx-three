/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color } from 'three';
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-clearPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThClearPass) }]
})
export class ThClearPass<
  T extends ClearPass = ClearPass,
  TARGS extends any[] = [clearColor?: Color | string | number, clearAlpha?: number]
> extends ThPass<T, TARGS> {
  public getType(): Type<ClearPass> {
    return ClearPass;
  }

  @Input()
  public set clearColor(value: Color | string | number | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.clearColor = applyValue<Color | string | number>(this._objRef.clearColor, value);
    }
  }
  @Input()
  public set clearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.clearAlpha = value;
    }
  }
}
