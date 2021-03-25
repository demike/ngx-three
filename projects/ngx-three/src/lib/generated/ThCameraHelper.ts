/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  BufferGeometry,
  Camera,
  CameraHelper,
  Geometry,
  Material,
} from 'three';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-cameraHelper',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) },
  ],
})
export class ThCameraHelper<
  T extends CameraHelper = CameraHelper,
  TARGS extends any[] = [camera: Camera]
> extends ThLineSegments<
  Geometry | BufferGeometry,
  Material | Material[],
  T,
  TARGS
> {
  protected getType(): Type<CameraHelper> {
    return CameraHelper;
  }

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  @Input()
  public set pointMap(value: { [id: string]: number[] }) {
    if (this._objRef) {
      this._objRef.pointMap = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }
}
