/* eslint-disable @typescript-eslint/ban-types */
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
import { CubeCamera, Object3DEventMap } from 'three';
import { CoordinateSystem } from 'three/src/constants.js';
import { WebGLCubeRenderTarget } from 'three/src/renderers/WebGLCubeRenderTarget.js';
import { ThObject3D } from './ThObject3D';

@Component({
    selector: 'th-cubeCamera',
    template: '<ng-content/>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: ThObject3D, useExisting: forwardRef(() => ThCubeCamera) },
    ],
    standalone: false
})
export class ThCubeCamera<
  T extends CubeCamera = CubeCamera,
  TARGS = [near: number, far: number, renderTarget: WebGLCubeRenderTarget],
> extends ThObject3D<Object3DEventMap, T, TARGS> {
  public getType(): Type<CubeCamera> {
    return CubeCamera;
  }

  public get type(): (string | 'CubeCamera') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set renderTarget(value: WebGLCubeRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTarget = value;
    }
  }

  public get renderTarget(): WebGLCubeRenderTarget | undefined {
    return this._objRef?.renderTarget;
  }
  @Input()
  public set coordinateSystem(value: CoordinateSystem) {
    if (this._objRef) {
      this._objRef.coordinateSystem = value;
    }
  }

  public get coordinateSystem(): CoordinateSystem | undefined {
    return this._objRef?.coordinateSystem;
  }
  @Input()
  public set activeMipmapLevel(value: number) {
    if (this._objRef) {
      this._objRef.activeMipmapLevel = value;
    }
  }

  public get activeMipmapLevel(): number | undefined {
    return this._objRef?.activeMipmapLevel;
  }
}
