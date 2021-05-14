/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera } from 'three';
import { DeviceOrientationControls } from 'three/examples/jsm/controls/DeviceOrientationControls';
import { ThControlBase } from '../ThControlBase';

@Component({
  selector: 'th-deviceOrientationControls',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThControlBase,
      useExisting: forwardRef(() => ThDeviceOrientationControls)
    }
  ]
})
export class ThDeviceOrientationControls<
  T extends DeviceOrientationControls = DeviceOrientationControls,
  TARGS extends any[] = [object: Camera]
> extends ThControlBase<T, TARGS> {
  public getType(): Type<DeviceOrientationControls> {
    return DeviceOrientationControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this._objRef) {
      this._objRef.object = value;
    }
  }

  @Input()
  public set alphaOffset(value: number) {
    if (this._objRef) {
      this._objRef.alphaOffset = value;
    }
  }

  @Input()
  public set deviceOrientation(value: any) {
    if (this._objRef) {
      this._objRef.deviceOrientation = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this._objRef) {
      this._objRef.enabled = value;
    }
  }

  @Input()
  public set screenOrientation(value: number) {
    if (this._objRef) {
      this._objRef.screenOrientation = value;
    }
  }
}
