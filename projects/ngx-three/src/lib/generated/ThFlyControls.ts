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
export class ThFlyControls<TARGS extends any[] = [object: Camera, domElement?: HTMLElement]> extends ThControlBase<TARGS> {
  @Input()
  public objRef!: FlyControls;
  protected getType(): Type<FlyControls> {
    return FlyControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this.objRef) {
      this.objRef.object = value;
    }
  }

  @Input()
  public set domElement(value: HTMLElement | HTMLDocument) {
    if (this.objRef) {
      this.objRef.domElement = value;
    }
  }

  @Input()
  public set movementSpeed(value: number) {
    if (this.objRef) {
      this.objRef.movementSpeed = value;
    }
  }

  @Input()
  public set rollSpeed(value: number) {
    if (this.objRef) {
      this.objRef.rollSpeed = value;
    }
  }

  @Input()
  public set dragToLook(value: boolean) {
    if (this.objRef) {
      this.objRef.dragToLook = value;
    }
  }

  @Input()
  public set autoForward(value: boolean) {
    if (this.objRef) {
      this.objRef.autoForward = value;
    }
  }
}
