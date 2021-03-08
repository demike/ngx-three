/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { PerspectiveCamera, StereoCamera } from 'three';
import { ThCamera } from './ThCamera';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-stereoCamera',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThStereoCamera) },
    { provide: ThCamera, useExisting: forwardRef(() => ThStereoCamera) }
  ]
})
export class ThStereoCamera<TARGS extends any[] = []> extends ThCamera<TARGS> {
  @Input()
  public obj!: StereoCamera;
  protected getType(): Type<StereoCamera> {
    return StereoCamera;
  }

  @Input()
  public set type(value: 'StereoCamera') {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set aspect(value: number) {
    if (this.obj) {
      this.obj.aspect = value;
    }
  }

  @Input()
  public set eyeSep(value: number) {
    if (this.obj) {
      this.obj.eyeSep = value;
    }
  }

  @Input()
  public set cameraL(value: PerspectiveCamera) {
    if (this.obj) {
      this.obj.cameraL = value;
    }
  }

  @Input()
  public set cameraR(value: PerspectiveCamera) {
    if (this.obj) {
      this.obj.cameraR = value;
    }
  }
}
