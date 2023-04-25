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
import { BufferGeometry, Camera, CameraHelper, Material } from 'three';
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
  TARGS = /* camera */ Camera
> extends ThLineSegments<BufferGeometry, Material | Material[], T, TARGS> {
  public getType(): Type<CameraHelper> {
    return CameraHelper;
  }

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  // @ts-ignore
  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set pointMap(value: { [id: string]: number[] }) {
    if (this._objRef) {
      this._objRef.pointMap = value;
    }
  }

  // @ts-ignore
  public get pointMap(): { [id: string]: number[] } | undefined {
    return this._objRef?.pointMap;
  }
  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
}
