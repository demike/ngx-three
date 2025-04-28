/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ShaderMaterial, WebGLRenderTarget } from 'three';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-afterimagePass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThAfterimagePass) },
  ],
})
export class ThAfterimagePass<
  T extends AfterimagePass = AfterimagePass,
  TARGS = /* damp? */ number,
> extends ThPass<T, TARGS> {
  public getType(): Type<AfterimagePass> {
    return AfterimagePass;
  }

  @Input()
  public set shader(value: object) {
    if (this._objRef) {
      this._objRef.shader = value;
    }
  }

  public get shader(): object | undefined {
    return this._objRef?.shader;
  }
  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      Object.assign(this._objRef.uniforms, map);
    }
  }

  public get uniforms(): { [name: string]: { value: any } } | undefined {
    return this._objRef?.uniforms as
      | { [name: string]: { value: any } }
      | undefined;
  }
  @Input()
  public set textureComp(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.textureComp = value;
    }
  }

  public get textureComp(): WebGLRenderTarget | undefined {
    return this._objRef?.textureComp;
  }
  @Input()
  public set textureOld(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.textureOld = value;
    }
  }

  public get textureOld(): WebGLRenderTarget | undefined {
    return this._objRef?.textureOld;
  }
  @Input()
  public set shaderMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.shaderMaterial = value;
    }
  }

  public get shaderMaterial(): ShaderMaterial | undefined {
    return this._objRef?.shaderMaterial;
  }
  @Input()
  public set compFsQuad(value: FullScreenQuad) {
    if (this._objRef) {
      this._objRef.compFsQuad = value;
    }
  }

  public get compFsQuad(): FullScreenQuad | undefined {
    return this._objRef?.compFsQuad;
  }
  @Input()
  public set copyFsQuad(value: FullScreenQuad) {
    if (this._objRef) {
      this._objRef.copyFsQuad = value;
    }
  }

  public get copyFsQuad(): FullScreenQuad | undefined {
    return this._objRef?.copyFsQuad;
  }
}
