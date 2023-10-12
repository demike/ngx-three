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
import { Camera } from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-flyControls',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThFlyControls) },
  ],
})
export class ThFlyControls<
  T extends FlyControls = FlyControls,
  TARGS = [object: Camera, domElement?: HTMLElement],
> extends ThControlBase<T, TARGS> {
  public getType(): Type<FlyControls> {
    return FlyControls;
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
  @Input()
  public set domElement(value: HTMLElement | Document) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  public get domElement(): (HTMLElement | Document) | undefined {
    return this._objRef?.domElement;
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
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  public get enabled(): boolean | undefined {
    return this._objRef?.enabled;
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
  public set object(value: Camera) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  public get object(): Camera | undefined {
    return this._objRef?.object;
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
}
