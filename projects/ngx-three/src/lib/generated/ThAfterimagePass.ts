/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import { ShaderMaterial, WebGLRenderTarget } from 'three';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-afterimagePass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThAfterimagePass) },
  ],
})
export class ThAfterimagePass<
  T extends AfterimagePass = AfterimagePass,
  TARGS extends any[] = [damp?: number]
> extends ThPass<T, TARGS> {
  protected getType(): Type<AfterimagePass> {
    return AfterimagePass;
  }

  @Input()
  public set shader(value: object) {
    if (this._objRef) {
      this._objRef.shader = value;
    }
  }

  @Input()
  public set uniforms(value: object) {
    if (this._objRef) {
      this._objRef.uniforms = value;
    }
  }

  @Input()
  public set textureComp(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.textureComp = value;
    }
  }

  @Input()
  public set textureOld(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.textureOld = value;
    }
  }

  @Input()
  public set shaderMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.shaderMaterial = value;
    }
  }

  @Input()
  public set compFsQuad(value: object) {
    if (this._objRef) {
      this._objRef.compFsQuad = value;
    }
  }

  @Input()
  public set copyFsQuad(value: object) {
    if (this._objRef) {
      this._objRef.copyFsQuad = value;
    }
  }
}
