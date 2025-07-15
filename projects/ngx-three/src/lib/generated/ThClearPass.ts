/* eslint-disable @typescript-eslint/ban-types */
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
import { ColorRepresentation } from 'three';
import { ClearPass } from 'three/examples/jsm/postprocessing/ClearPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-clearPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThClearPass) },
  ],
})
export class ThClearPass<
  T extends ClearPass = ClearPass,
  TARGS = [clearColor?: ColorRepresentation, clearAlpha?: number],
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

  public get clearColor(): ColorRepresentation | undefined {
    return this._objRef?.clearColor;
  }
  @Input()
  public set clearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.clearAlpha = value;
    }
  }

  public get clearAlpha(): number | undefined {
    return this._objRef?.clearAlpha;
  }
}
