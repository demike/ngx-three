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
export class ThDeviceOrientationControls<TARGS extends any[] = [object: Camera]> extends ThControlBase<TARGS> {
  @Input()
  public obj!: DeviceOrientationControls;
  protected getType(): Type<DeviceOrientationControls> {
    return DeviceOrientationControls;
  }

  @Input()
  public set object(value: Camera) {
    if (this.obj) {
      this.obj.object = value;
    }
  }

  @Input()
  public set alphaOffset(value: number) {
    if (this.obj) {
      this.obj.alphaOffset = value;
    }
  }

  @Input()
  public set deviceOrientation(value: any) {
    if (this.obj) {
      this.obj.deviceOrientation = value;
    }
  }

  @Input()
  public set enabled(value: boolean) {
    if (this.obj) {
      this.obj.enabled = value;
    }
  }

  @Input()
  public set screenOrientation(value: number) {
    if (this.obj) {
      this.obj.screenOrientation = value;
    }
  }
}
