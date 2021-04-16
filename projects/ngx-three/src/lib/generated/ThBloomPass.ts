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
import { BloomPass } from 'three/examples/jsm/postprocessing/BloomPass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-bloomPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThBloomPass) },
  ],
})
export class ThBloomPass<
  T extends BloomPass = BloomPass,
  TARGS extends any[] = [
    strength?: number,
    kernelSize?: number,
    sigma?: number,
    resolution?: number
  ]
> extends ThPass<T, TARGS> {
  protected getType(): Type<BloomPass> {
    return BloomPass;
  }

  @Input()
  public set renderTargetX(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetX = value;
    }
  }

  @Input()
  public set renderTargetY(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetY = value;
    }
  }

  @Input()
  public set copyUniforms(value: object) {
    if (this._objRef) {
      this._objRef.copyUniforms = value;
    }
  }

  @Input()
  public set materialCopy(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialCopy = value;
    }
  }

  @Input()
  public set convolutionUniforms(value: object) {
    if (this._objRef) {
      this._objRef.convolutionUniforms = value;
    }
  }

  @Input()
  public set materialConvolution(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialConvolution = value;
    }
  }

  @Input()
  public set fsQuad(value: object) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }
}
