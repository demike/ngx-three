/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { ClearMaskPass } from 'three/examples/jsm/postprocessing/MaskPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
    selector: 'th-clearMaskPass',
    template: '<ng-content/>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: ThPassBase, useExisting: forwardRef(() => ThClearMaskPass) },
    ],
    standalone: false
})
export class ThClearMaskPass<
  T extends ClearMaskPass = ClearMaskPass,
  TARGS = [],
> extends ThPass<T, TARGS> {
  public getType(): Type<ClearMaskPass> {
    return ClearMaskPass;
  }
}
