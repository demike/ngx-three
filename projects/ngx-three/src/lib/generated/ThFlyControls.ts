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
import { Camera } from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-flyControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThControlBase, useExisting: forwardRef(() => ThFlyControls) },
  ],
})
export class ThFlyControls<
  T extends FlyControls = FlyControls,
  TARGS = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<T, TARGS> {
  public getType(): Type<FlyControls> {
    return FlyControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  // @ts-ignore
  public get object(): Camera | undefined {
    return this._objRef?.object;
  }
  @Input()
  public set domElement(value: HTMLElement | Document) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  // @ts-ignore
  public get domElement(): (HTMLElement | Document) | undefined {
    return this._objRef?.domElement;
  }
  @Input()
  public set movementSpeed(value: number) {
    if (this._objRef) {
      this._objRef.movementSpeed = value;
    }
  }

  // @ts-ignore
  public get movementSpeed(): number | undefined {
    return this._objRef?.movementSpeed;
  }
  @Input()
  public set rollSpeed(value: number) {
    if (this._objRef) {
      this._objRef.rollSpeed = value;
    }
  }

  // @ts-ignore
  public get rollSpeed(): number | undefined {
    return this._objRef?.rollSpeed;
  }
  @Input()
  public set dragToLook(value: boolean) {
    if (this._objRef) {
      this._objRef.dragToLook = value;
    }
  }

  // @ts-ignore
  public get dragToLook(): boolean | undefined {
    return this._objRef?.dragToLook;
  }
  @Input()
  public set autoForward(value: boolean) {
    if (this._objRef) {
      this._objRef.autoForward = value;
    }
  }

  // @ts-ignore
  public get autoForward(): boolean | undefined {
    return this._objRef?.autoForward;
  }
}
