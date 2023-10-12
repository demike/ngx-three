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
import { ShaderMaterial, Texture, WebGLRenderTarget } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sMAAPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSMAAPass) },
  ],
})
export class ThSMAAPass<
  T extends SMAAPass = SMAAPass,
  TARGS = [width: number, height: number],
> extends ThPass<T, TARGS> {
  public getType(): Type<SMAAPass> {
    return SMAAPass;
  }

  @Input()
  public set edgesRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.edgesRT = value;
    }
  }

  public get edgesRT(): WebGLRenderTarget | undefined {
    return this._objRef?.edgesRT;
  }
  @Input()
  public set weightsRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.weightsRT = value;
    }
  }

  public get weightsRT(): WebGLRenderTarget | undefined {
    return this._objRef?.weightsRT;
  }
  @Input()
  public set areaTexture(value: Texture) {
    if (this._objRef) {
      this._objRef.areaTexture = value;
    }
  }

  public get areaTexture(): Texture | undefined {
    return this._objRef?.areaTexture;
  }
  @Input()
  public set searchTexture(value: Texture) {
    if (this._objRef) {
      this._objRef.searchTexture = value;
    }
  }

  public get searchTexture(): Texture | undefined {
    return this._objRef?.searchTexture;
  }
  @Input()
  public set uniformsEdges(value: object) {
    if (this._objRef) {
      this._objRef.uniformsEdges = value;
    }
  }

  public get uniformsEdges(): object | undefined {
    return this._objRef?.uniformsEdges;
  }
  @Input()
  public set materialEdges(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialEdges = value;
    }
  }

  public get materialEdges(): ShaderMaterial | undefined {
    return this._objRef?.materialEdges;
  }
  @Input()
  public set uniformsWeights(value: object) {
    if (this._objRef) {
      this._objRef.uniformsWeights = value;
    }
  }

  public get uniformsWeights(): object | undefined {
    return this._objRef?.uniformsWeights;
  }
  @Input()
  public set materialWeights(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialWeights = value;
    }
  }

  public get materialWeights(): ShaderMaterial | undefined {
    return this._objRef?.materialWeights;
  }
  @Input()
  public set uniformsBlend(value: object) {
    if (this._objRef) {
      this._objRef.uniformsBlend = value;
    }
  }

  public get uniformsBlend(): object | undefined {
    return this._objRef?.uniformsBlend;
  }
  @Input()
  public set materialBlend(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialBlend = value;
    }
  }

  public get materialBlend(): ShaderMaterial | undefined {
    return this._objRef?.materialBlend;
  }
  @Input()
  public set fsQuad(value: FullScreenQuad) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }

  public get fsQuad(): FullScreenQuad | undefined {
    return this._objRef?.fsQuad;
  }
}
