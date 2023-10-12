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
  public set isPass(value: boolean) {
    if (this._objRef) {
      this._objRef.isPass = value;
    }
  }

  public get isPass(): boolean | undefined {
    return this._objRef?.isPass;
  }
  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  public get enabled(): boolean | undefined {
    return this._objRef?.enabled;
  }
  @Input()
  public set needsSwap(value: boolean) {
    if (this._objRef) {
      this._objRef.needsSwap = value;
    }
  }

  public get needsSwap(): boolean | undefined {
    return this._objRef?.needsSwap;
  }
  @Input()
  public set clear(value: boolean) {
    if (this._objRef) {
      this._objRef.clear = value;
    }
  }

  public get clear(): boolean | undefined {
    return this._objRef?.clear;
  }
  @Input()
  public set renderToScreen(value: boolean) {
    if (this._objRef) {
      this._objRef.renderToScreen = value;
    }
  }

  public get renderToScreen(): boolean | undefined {
    return this._objRef?.renderToScreen;
  }
}
