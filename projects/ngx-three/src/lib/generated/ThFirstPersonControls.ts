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
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  // @ts-ignore
  public get enabled(): boolean | undefined {
    return this._objRef?.enabled;
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
  public set lookSpeed(value: number) {
    if (this._objRef) {
      this._objRef.lookSpeed = value;
    }
  }

  // @ts-ignore
  public get lookSpeed(): number | undefined {
    return this._objRef?.lookSpeed;
  }
  @Input()
  public set lookVertical(value: boolean) {
    if (this._objRef) {
      this._objRef.lookVertical = value;
    }
  }

  // @ts-ignore
  public get lookVertical(): boolean | undefined {
    return this._objRef?.lookVertical;
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
  @Input()
  public set activeLook(value: boolean) {
    if (this._objRef) {
      this._objRef.activeLook = value;
    }
  }

  // @ts-ignore
  public get activeLook(): boolean | undefined {
    return this._objRef?.activeLook;
  }
  @Input()
  public set heightSpeed(value: boolean) {
    if (this._objRef) {
      this._objRef.heightSpeed = value;
    }
  }

  // @ts-ignore
  public get heightSpeed(): boolean | undefined {
    return this._objRef?.heightSpeed;
  }
  @Input()
  public set heightCoef(value: number) {
    if (this._objRef) {
      this._objRef.heightCoef = value;
    }
  }

  // @ts-ignore
  public get heightCoef(): number | undefined {
    return this._objRef?.heightCoef;
  }
  @Input()
  public set heightMin(value: number) {
    if (this._objRef) {
      this._objRef.heightMin = value;
    }
  }

  // @ts-ignore
  public get heightMin(): number | undefined {
    return this._objRef?.heightMin;
  }
  @Input()
  public set heightMax(value: number) {
    if (this._objRef) {
      this._objRef.heightMax = value;
    }
  }

  // @ts-ignore
  public get heightMax(): number | undefined {
    return this._objRef?.heightMax;
  }
  @Input()
  public set constrainVertical(value: boolean) {
    if (this._objRef) {
      this._objRef.constrainVertical = value;
    }
  }

  // @ts-ignore
  public get constrainVertical(): boolean | undefined {
    return this._objRef?.constrainVertical;
  }
  @Input()
  public set verticalMin(value: number) {
    if (this._objRef) {
      this._objRef.verticalMin = value;
    }
  }

  // @ts-ignore
  public get verticalMin(): number | undefined {
    return this._objRef?.verticalMin;
  }
  @Input()
  public set verticalMax(value: number) {
    if (this._objRef) {
      this._objRef.verticalMax = value;
    }
  }

  // @ts-ignore
  public get verticalMax(): number | undefined {
    return this._objRef?.verticalMax;
  }
  @Input()
  public set mouseDragOn(value: boolean) {
    if (this._objRef) {
      this._objRef.mouseDragOn = value;
    }
  }

  // @ts-ignore
  public get mouseDragOn(): boolean | undefined {
    return this._objRef?.mouseDragOn;
  }
}
