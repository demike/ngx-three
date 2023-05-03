/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { BufferGeometry, Camera, CameraHelper, Material, Matrix4 } from 'three';
import { applyValue } from '../util';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-cameraHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThCameraHelper) }]
})
export class ThCameraHelper<T extends CameraHelper = CameraHelper, TARGS = /* camera */ Camera> extends ThLineSegments<
  BufferGeometry,
  Material | Material[],
  T,
  TARGS
> {
  public getType(): Type<CameraHelper> {
    return CameraHelper;
  }

  // @ts-ignore
  public get type(): (string | 'CameraHelper') | undefined {
    return this._objRef?.type;
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
  public set matrix(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number
        ]
  ) {
    if (this._objRef) {
      this._objRef.matrix = applyValue<Matrix4>(this._objRef.matrix, value);
    }
  }
  // @ts-ignore
  public get matrix(): Matrix4 | undefined {
    return this._objRef?.matrix;
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }

  // @ts-ignore
  public get matrixAutoUpdate(): boolean | undefined {
    return this._objRef?.matrixAutoUpdate;
  }
}
