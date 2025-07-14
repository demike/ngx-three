/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { Camera } from 'three';
import {
  FlyControls,
  FlyControlsEventMap,
} from 'three/examples/jsm/controls/FlyControls.js';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-flyControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThFlyControls) },
  ],
})
export class ThFlyControls<
  T extends FlyControls = FlyControls,
  TARGS = [object: Camera, domElement?: HTMLElement | null],
> extends ThControlBase<FlyControlsEventMap, T, TARGS> {
  public getType(): Type<FlyControls> {
    return FlyControls;
  }

  @Input()
  public set movementSpeed(value: number) {
    if (this._objRef) {
      this._objRef.movementSpeed = value;
    }
  }

  public get movementSpeed(): number | undefined {
    return this._objRef?.movementSpeed;
  }
  @Input()
  public set rollSpeed(value: number) {
    if (this._objRef) {
      this._objRef.rollSpeed = value;
    }
  }

  public get rollSpeed(): number | undefined {
    return this._objRef?.rollSpeed;
  }
  @Input()
  public set dragToLook(value: boolean) {
    if (this._objRef) {
      this._objRef.dragToLook = value;
    }
  }

  public get dragToLook(): boolean | undefined {
    return this._objRef?.dragToLook;
  }
  @Input()
  public set autoForward(value: boolean) {
    if (this._objRef) {
      this._objRef.autoForward = value;
    }
  }

  public get autoForward(): boolean | undefined {
    return this._objRef?.autoForward;
  }
}
