/* eslint-disable @typescript-eslint/ban-types */
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
import { CubeTexture, Mesh, PerspectiveCamera, Scene } from 'three';
import { CubeTexturePass } from 'three/examples/jsm/postprocessing/CubeTexturePass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-cubeTexturePass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThCubeTexturePass) },
  ],
})
export class ThCubeTexturePass<
  T extends CubeTexturePass = CubeTexturePass,
  TARGS extends any[] = [
    camera: PerspectiveCamera,
    envMap?: CubeTexture,
    opacity?: number
  ]
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

  @Input()
  public set cubeShader(value: object) {
    if (this._objRef) {
      this._objRef.cubeShader = value;
    }
  }

  @Input()
  public set cubeMesh(value: Mesh) {
    if (this._objRef) {
      this._objRef.cubeMesh = value;
    }
  }

  @Input()
  public set envMap(value: CubeTexture) {
    if (this._objRef) {
      this._objRef.envMap = value;
    }
  }

  @Input()
  public set opacity(value: number) {
    if (this._objRef) {
      this._objRef.opacity = value;
    }
  }

  @Input()
  public set cubeScene(value: Scene) {
    if (this._objRef) {
      this._objRef.cubeScene = value;
    }
  }

  @Input()
  public set cubeCamera(value: PerspectiveCamera) {
    if (this._objRef) {
      this._objRef.cubeCamera = value;
    }
  }
}
