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
import { AdaptiveToneMappingPass } from 'three/examples/jsm/postprocessing/AdaptiveToneMappingPass';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-adaptiveToneMappingPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThPassBase,
      useExisting: forwardRef(() => ThAdaptiveToneMappingPass),
    },
  ],
})
export class ThAdaptiveToneMappingPass<
  T extends AdaptiveToneMappingPass = AdaptiveToneMappingPass,
  TARGS = [adaptive?: boolean, resolution?: number]
> extends ThPass<T, TARGS> {
  public getType(): Type<AdaptiveToneMappingPass> {
    return AdaptiveToneMappingPass;
  }

  @Input()
  public set adaptive(value: boolean) {
    if (this._objRef) {
      this._objRef.adaptive = value;
    }
  }

  // @ts-ignore
  public get adaptive(): boolean | undefined {
    return this._objRef?.adaptive;
  }
  @Input()
  public set resolution(value: number) {
    if (this._objRef) {
      this._objRef.resolution = value;
    }
  }

  // @ts-ignore
  public get resolution(): number | undefined {
    return this._objRef?.resolution;
  }
  @Input()
  public set needsInit(value: number) {
    if (this._objRef) {
      this._objRef.needsInit = value;
    }
  }

  // @ts-ignore
  public get needsInit(): number | undefined {
    return this._objRef?.needsInit;
  }
  @Input()
  public set luminanceRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.luminanceRT = value;
    }
  }

  // @ts-ignore
  public get luminanceRT(): WebGLRenderTarget | undefined {
    return this._objRef?.luminanceRT;
  }
  @Input()
  public set previousLuminanceRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.previousLuminanceRT = value;
    }
  }

  // @ts-ignore
  public get previousLuminanceRT(): WebGLRenderTarget | undefined {
    return this._objRef?.previousLuminanceRT;
  }
  @Input()
  public set currentLuminanceRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.currentLuminanceRT = value;
    }
  }

  // @ts-ignore
  public get currentLuminanceRT(): WebGLRenderTarget | undefined {
    return this._objRef?.currentLuminanceRT;
  }
  @Input()
  public set copyUniforms(value: object) {
    if (this._objRef) {
      this._objRef.copyUniforms = value;
    }
  }

  // @ts-ignore
  public get copyUniforms(): object | undefined {
    return this._objRef?.copyUniforms;
  }
  @Input()
  public set materialCopy(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialCopy = value;
    }
  }

  // @ts-ignore
  public get materialCopy(): ShaderMaterial | undefined {
    return this._objRef?.materialCopy;
  }
  @Input()
  public set materialLuminance(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialLuminance = value;
    }
  }

  // @ts-ignore
  public get materialLuminance(): ShaderMaterial | undefined {
    return this._objRef?.materialLuminance;
  }
  @Input()
  public set adaptLuminanceShader(value: object) {
    if (this._objRef) {
      this._objRef.adaptLuminanceShader = value;
    }
  }

  // @ts-ignore
  public get adaptLuminanceShader(): object | undefined {
    return this._objRef?.adaptLuminanceShader;
  }
  @Input()
  public set materialAdaptiveLum(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialAdaptiveLum = value;
    }
  }

  // @ts-ignore
  public get materialAdaptiveLum(): ShaderMaterial | undefined {
    return this._objRef?.materialAdaptiveLum;
  }
  @Input()
  public set materialToneMap(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialToneMap = value;
    }
  }

  // @ts-ignore
  public get materialToneMap(): ShaderMaterial | undefined {
    return this._objRef?.materialToneMap;
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
