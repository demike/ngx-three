/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Type,
  forwardRef,
} from '@angular/core';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sMAAPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSMAAPass) },
  ],
})
export class ThSMAAPass<
  T extends SMAAPass = SMAAPass,
  TARGS = [],
> extends ThPass<T, TARGS> {
  public getType(): Type<SMAAPass> {
    return SMAAPass;
  }
}
