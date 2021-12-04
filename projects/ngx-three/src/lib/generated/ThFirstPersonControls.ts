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
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-firstPersonControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThFirstPersonControls),
    },
  ],
})
export class ThFirstPersonControls<
  T extends FirstPersonControls = FirstPersonControls,
  TARGS = [object: Camera, domElement?: HTMLElement]
> extends ThControlBase<T, TARGS> {
  public getType(): Type<FirstPersonControls> {
    return FirstPersonControls;
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
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  @Input()
  public set movementSpeed(value: number) {
    if (this._objRef) {
      this._objRef.movementSpeed = value;
    }
  }

  @Input()
  public set lookSpeed(value: number) {
    if (this._objRef) {
      this._objRef.lookSpeed = value;
    }
  }

  @Input()
  public set lookVertical(value: boolean) {
    if (this._objRef) {
      this._objRef.lookVertical = value;
    }
  }

  @Input()
  public set autoForward(value: boolean) {
    if (this._objRef) {
      this._objRef.autoForward = value;
    }
  }

  @Input()
  public set activeLook(value: boolean) {
    if (this._objRef) {
      this._objRef.activeLook = value;
    }
  }

  @Input()
  public set heightSpeed(value: boolean) {
    if (this._objRef) {
      this._objRef.heightSpeed = value;
    }
  }

  @Input()
  public set heightCoef(value: number) {
    if (this._objRef) {
      this._objRef.heightCoef = value;
    }
  }

  @Input()
  public set heightMin(value: number) {
    if (this._objRef) {
      this._objRef.heightMin = value;
    }
  }

  @Input()
  public set heightMax(value: number) {
    if (this._objRef) {
      this._objRef.heightMax = value;
    }
  }

  @Input()
  public set constrainVertical(value: boolean) {
    if (this._objRef) {
      this._objRef.constrainVertical = value;
    }
  }

  @Input()
  public set verticalMin(value: number) {
    if (this._objRef) {
      this._objRef.verticalMin = value;
    }
  }

  @Input()
  public set verticalMax(value: number) {
    if (this._objRef) {
      this._objRef.verticalMax = value;
    }
  }

  @Input()
  public set mouseDragOn(value: boolean) {
    if (this._objRef) {
      this._objRef.mouseDragOn = value;
    }
  }
}
