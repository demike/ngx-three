/* eslint-disable @typescript-eslint/ban-types */
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
import { CubeTexture, Mesh, PerspectiveCamera, Scene } from 'three';
import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-cubeTexturePass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThCubeTexturePass) },
  ],
})
export class ThCubeTexturePass<
  T extends CubeTexturePass = CubeTexturePass,
  TARGS = [camera: PerspectiveCamera, envMap?: CubeTexture, opacity?: number],
> extends ThPass<T, TARGS> {
  public getType(): Type<CubeTexturePass> {
    return CubeTexturePass;
  }

  @Input()
  public set camera(value: PerspectiveCamera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  public get camera(): PerspectiveCamera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set cubeShader(value: object) {
    if (this._objRef) {
      this._objRef.cubeShader = value;
    }
  }

  public get cubeShader(): object | undefined {
    return this._objRef?.cubeShader;
  }
  @Input()
  public set cubeMesh(value: Mesh) {
    if (this._objRef) {
      this._objRef.cubeMesh = value;
    }
  }

  public get cubeMesh(): Mesh | undefined {
    return this._objRef?.cubeMesh;
  }
  @Input()
  public set envMap(value: CubeTexture) {
    if (this._objRef) {
      this._objRef.envMap = value;
    }
  }

  public get envMap(): CubeTexture | undefined {
    return this._objRef?.envMap;
  }
  @Input()
  public set opacity(value: number) {
    if (this._objRef) {
      this._objRef.opacity = value;
    }
  }

  public get opacity(): number | undefined {
    return this._objRef?.opacity;
  }
  @Input()
  public set cubeScene(value: Scene) {
    if (this._objRef) {
      this._objRef.cubeScene = value;
    }
  }

  public get cubeScene(): Scene | undefined {
    return this._objRef?.cubeScene;
  }
  @Input()
  public set cubeCamera(value: PerspectiveCamera) {
    if (this._objRef) {
      this._objRef.cubeCamera = value;
    }
  }

  public get cubeCamera(): PerspectiveCamera | undefined {
    return this._objRef?.cubeCamera;
  }
}
