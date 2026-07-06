/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import {
  BufferGeometry,
  CameraHelper,
  Material,
  Object3DEventMap,
} from 'three';
import { Camera } from 'three/src/cameras/Camera.js';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-cameraHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) },
  ],
})
export class ThCameraHelper<
  T extends CameraHelper = CameraHelper,
  TARGS = /* camera */ Camera,
> extends ThLineSegments<
  BufferGeometry,
  Material | Material[],
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<CameraHelper> {
    return CameraHelper;
  }

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set pointMap(value: { [x: string]: number[] }) {
    if (this._objRef) {
      this._objRef.pointMap = value;
    }
  }

  public get pointMap():
    | {
        [x: string]: number[];
      }
    | undefined {
    return this._objRef?.pointMap;
  }
}
