/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera } from 'three';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-firstPersonControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThFirstPersonControls)
    }
  ]
})
export class ThFirstPersonControls<TARGS extends any[] = [object: Camera, domElement?: HTMLElement]> extends ThControlBase<TARGS> {
  @Input()
  public objRef!: FirstPersonControls;
  protected getType(): Type<FirstPersonControls> {
    return FirstPersonControls;
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
  public set enabled(value: boolean) {
    if (this.objRef) {
      this.objRef.enabled = value;
    }
  }

  @Input()
  public set movementSpeed(value: number) {
    if (this.objRef) {
      this.objRef.movementSpeed = value;
    }
  }

  @Input()
  public set lookSpeed(value: number) {
    if (this.objRef) {
      this.objRef.lookSpeed = value;
    }
  }

  @Input()
  public set lookVertical(value: boolean) {
    if (this.objRef) {
      this.objRef.lookVertical = value;
    }
  }

  @Input()
  public set autoForward(value: boolean) {
    if (this.objRef) {
      this.objRef.autoForward = value;
    }
  }

  @Input()
  public set activeLook(value: boolean) {
    if (this.objRef) {
      this.objRef.activeLook = value;
    }
  }

  @Input()
  public set heightSpeed(value: boolean) {
    if (this.objRef) {
      this.objRef.heightSpeed = value;
    }
  }

  @Input()
  public set heightCoef(value: number) {
    if (this.objRef) {
      this.objRef.heightCoef = value;
    }
  }

  @Input()
  public set heightMin(value: number) {
    if (this.objRef) {
      this.objRef.heightMin = value;
    }
  }

  @Input()
  public set heightMax(value: number) {
    if (this.objRef) {
      this.objRef.heightMax = value;
    }
  }

  @Input()
  public set constrainVertical(value: boolean) {
    if (this.objRef) {
      this.objRef.constrainVertical = value;
    }
  }

  @Input()
  public set verticalMin(value: number) {
    if (this.objRef) {
      this.objRef.verticalMin = value;
    }
  }

  @Input()
  public set verticalMax(value: number) {
    if (this.objRef) {
      this.objRef.verticalMax = value;
    }
  }

  @Input()
  public set mouseDragOn(value: boolean) {
    if (this.objRef) {
      this.objRef.mouseDragOn = value;
    }
  }
}
