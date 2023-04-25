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
import { Pass } from 'three/examples/jsm/postprocessing/Pass';
import { ThPassBase } from '../ThPassBase';

@Component({
  selector: 'th-pass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThPass) }],
})
export class ThPass<T extends Pass = Pass, TARGS = []> extends ThPassBase<
  T,
  TARGS
> {
  public getType(): Type<Pass> {
    return Pass;
  }

  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  @Input()
  public set needsSwap(value: boolean) {
    if (this._objRef) {
      this._objRef.needsSwap = value;
    }
  }

  @Input()
  public set clear(value: boolean) {
    if (this._objRef) {
      this._objRef.clear = value;
    }
  }

  @Input()
  public set renderToScreen(value: boolean) {
    if (this._objRef) {
      this._objRef.renderToScreen = value;
    }
  }
}
