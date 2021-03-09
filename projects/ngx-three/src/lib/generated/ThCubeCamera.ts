/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { CubeCamera, WebGLCubeRenderTarget } from 'three';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-cubeCamera',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThCubeCamera) },
  ],
})
export class ThCubeCamera<
  TARGS extends any[] = [
    near: number,
    far: number,
    renderTarget: WebGLCubeRenderTarget
  ]
> extends ThObject3D<TARGS> {
  @Input()
  public obj!: CubeCamera;
  protected getType(): Type<CubeCamera> {
    return CubeCamera;
  }

  @Input()
  public set type(value: 'CubeCamera') {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set renderTarget(value: WebGLCubeRenderTarget) {
    if (this.obj) {
      this.obj.renderTarget = value;
    }
  }
}
