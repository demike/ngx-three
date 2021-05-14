/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera } from 'three';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-flyControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThControlBase, useExisting: forwardRef(() => ThFlyControls) }]
})
export class ThFlyControls<
  T extends FlyControls = FlyControls,
  TARGS extends any[] = [object: Camera, domElement?: HTMLElement]
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

  @Input()
  public set domElement(value: HTMLElement | HTMLDocument) {
    if (this._objRef) {
      this._objRef.domElement = value;
    }
  }

  @Input()
  public set movementSpeed(value: number) {
    if (this._objRef) {
      this._objRef.movementSpeed = value;
    }
  }

  @Input()
  public set rollSpeed(value: number) {
    if (this._objRef) {
      this._objRef.rollSpeed = value;
    }
  }

  @Input()
  public set dragToLook(value: boolean) {
    if (this._objRef) {
      this._objRef.dragToLook = value;
    }
  }

  @Input()
  public set autoForward(value: boolean) {
    if (this._objRef) {
      this._objRef.autoForward = value;
    }
  }
}
