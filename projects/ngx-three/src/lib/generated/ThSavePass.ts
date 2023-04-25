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
import { ShaderMaterial, WebGLRenderTarget } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { SavePass } from 'three/examples/jsm/postprocessing/SavePass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-savePass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSavePass) },
  ],
})
export class ThSavePass<
  T extends SavePass = SavePass,
  TARGS = /* renderTarget? */ WebGLRenderTarget
> extends ThPass<T, TARGS> {
  public getType(): Type<SavePass> {
    return SavePass;
  }

  @Input()
  public set textureID(value: string) {
    if (this._objRef) {
      this._objRef.textureID = value;
    }
  }

  // @ts-ignore
  public get textureID(): string | undefined {
    return this._objRef?.textureID;
  }
  @Input()
  public set renderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTarget = value;
    }
  }

  // @ts-ignore
  public get renderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTarget;
  }
  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      Object.assign(this._objRef.uniforms, map);
    }
  }

  // @ts-ignore
  public get uniforms(): { [name: string]: { value: any } } | undefined {
    // @ts-ignore
    return this._objRef?.uniforms;
  }
  @Input()
  public set material(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.material = value;
    }
  }

  // @ts-ignore
  public get material(): ShaderMaterial | undefined {
    return this._objRef?.material;
  }
  @Input()
  public set fsQuad(value: FullScreenQuad) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }

  // @ts-ignore
  public get fsQuad(): FullScreenQuad | undefined {
    return this._objRef?.fsQuad;
  }
}
