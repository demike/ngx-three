/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component, Input, Type } from '@angular/core';
import { Clock, WebGLRenderTarget, WebGLRenderer } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { Pass } from 'three/examples/jsm/postprocessing/Pass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { ThWrapperBase } from '../ThWrapperBase';

@Component({
  selector: 'th-effectComposerGen',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ThEffectComposerGen<
  T extends EffectComposer = EffectComposer,
  TARGS = [renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget],
> extends ThWrapperBase<T, TARGS> {
  public getType(): Type<EffectComposer> {
    return EffectComposer;
  }

  @Input()
  public set renderer(value: WebGLRenderer) {
    if (this._objRef) {
      this._objRef.renderer = value;
    }
  }

  public get renderer(): WebGLRenderer | undefined {
    return this._objRef?.renderer;
  }
  @Input()
  public set renderTarget1(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTarget1 = value;
    }
  }

  public get renderTarget1(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTarget1;
  }
  @Input()
  public set renderTarget2(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTarget2 = value;
    }
  }

  public get renderTarget2(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTarget2;
  }
  @Input()
  public set writeBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.writeBuffer = value;
    }
  }

  public get writeBuffer(): WebGLRenderTarget | undefined {
    return this._objRef?.writeBuffer;
  }
  @Input()
  public set readBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.readBuffer = value;
    }
  }

  public get readBuffer(): WebGLRenderTarget | undefined {
    return this._objRef?.readBuffer;
  }
  @Input()
  public set passes(value: Pass[]) {
    if (this._objRef) {
      this._objRef.passes = value;
    }
  }

  public get passes(): Pass[] | undefined {
    return this._objRef?.passes;
  }
  @Input()
  public set copyPass(value: ShaderPass) {
    if (this._objRef) {
      this._objRef.copyPass = value;
    }
  }

  public get copyPass(): ShaderPass | undefined {
    return this._objRef?.copyPass;
  }
  @Input()
  public set clock(value: Clock) {
    if (this._objRef) {
      this._objRef.clock = value;
    }
  }

  public get clock(): Clock | undefined {
    return this._objRef?.clock;
  }
  @Input()
  public set renderToScreen(value: boolean) {
    if (this._objRef) {
      this._objRef.renderToScreen = value;
    }
  }

  public get renderToScreen(): boolean | undefined {
    return this._objRef?.renderToScreen;
  }
}
