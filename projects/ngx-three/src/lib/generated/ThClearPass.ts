/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ColorRepresentation } from 'three';
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-clearPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThClearPass) },
  ],
})
export class ThClearPass<
  T extends ClearPass = ClearPass,
  TARGS = [clearColor?: ColorRepresentation, clearAlpha?: number]
> extends ThPass<T, TARGS> {
  public getType(): Type<ClearPass> {
    return ClearPass;
  }

  @Input()
  public set clearColor(value: ColorRepresentation) {
    if (this._objRef) {
      this._objRef.clearColor = value;
    }
  }

  @Input()
  public set clearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.clearAlpha = value;
    }
  }
}
