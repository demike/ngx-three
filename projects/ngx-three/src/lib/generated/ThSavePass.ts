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
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-savePass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSavePass) },
  ],
})
export class ThSavePass<
  T extends SavePass = SavePass,
  TARGS extends any[] = [renderTarget: WebGLRenderTarget]
> extends ThPass<T, TARGS> {
  protected getType(): Type<SavePass> {
    return SavePass;
  }

  @Input()
  public set textureID(value: string) {
    if (this._objRef) {
      this._objRef.textureID = value;
    }
  }

  @Input()
  public set renderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTarget = value;
    }
  }

  @Input()
  public set uniforms(value: object) {
    if (this._objRef) {
      this._objRef.uniforms = value;
    }
  }

  @Input()
  public set material(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  @Input()
  public set fsQuad(value: object) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }
}
