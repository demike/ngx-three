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
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-firstPersonControls',
  template: '<ng-content/>',
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
  TARGS = [object: Camera, domElement?: HTMLElement],
> extends ThControlBase<{}, T, TARGS> {
  public getType(): Type<FirstPersonControls> {
    return FirstPersonControls;
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
  public set lookSpeed(value: number) {
    if (this._objRef) {
      this._objRef.lookSpeed = value;
    }
  }

  public get lookSpeed(): number | undefined {
    return this._objRef?.lookSpeed;
  }
  @Input()
  public set lookVertical(value: boolean) {
    if (this._objRef) {
      this._objRef.lookVertical = value;
    }
  }

  public get lookVertical(): boolean | undefined {
    return this._objRef?.lookVertical;
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
  public set activeLook(value: boolean) {
    if (this._objRef) {
      this._objRef.activeLook = value;
    }
  }

  public get activeLook(): boolean | undefined {
    return this._objRef?.activeLook;
  }
  @Input()
  public set heightSpeed(value: boolean) {
    if (this._objRef) {
      this._objRef.heightSpeed = value;
    }
  }

  public get heightSpeed(): boolean | undefined {
    return this._objRef?.heightSpeed;
  }
  @Input()
  public set heightCoef(value: number) {
    if (this._objRef) {
      this._objRef.heightCoef = value;
    }
  }

  public get heightCoef(): number | undefined {
    return this._objRef?.heightCoef;
  }
  @Input()
  public set heightMin(value: number) {
    if (this._objRef) {
      this._objRef.heightMin = value;
    }
  }

  public get heightMin(): number | undefined {
    return this._objRef?.heightMin;
  }
  @Input()
  public set heightMax(value: number) {
    if (this._objRef) {
      this._objRef.heightMax = value;
    }
  }

  public get heightMax(): number | undefined {
    return this._objRef?.heightMax;
  }
  @Input()
  public set constrainVertical(value: boolean) {
    if (this._objRef) {
      this._objRef.constrainVertical = value;
    }
  }

  public get constrainVertical(): boolean | undefined {
    return this._objRef?.constrainVertical;
  }
  @Input()
  public set verticalMin(value: number) {
    if (this._objRef) {
      this._objRef.verticalMin = value;
    }
  }

  public get verticalMin(): number | undefined {
    return this._objRef?.verticalMin;
  }
  @Input()
  public set verticalMax(value: number) {
    if (this._objRef) {
      this._objRef.verticalMax = value;
    }
  }

  public get verticalMax(): number | undefined {
    return this._objRef?.verticalMax;
  }
  @Input()
  public set mouseDragOn(value: boolean) {
    if (this._objRef) {
      this._objRef.mouseDragOn = value;
    }
  }

  public get mouseDragOn(): boolean | undefined {
    return this._objRef?.mouseDragOn;
  }
}
