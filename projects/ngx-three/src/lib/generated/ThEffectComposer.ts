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
import { Clock, WebGLRenderer, WebGLRenderTarget } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { Pass } from 'three/examples/jsm/postprocessing/Pass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { ThPassBase } from '../ThPassBase';

@Component({
  selector: 'th-effectComposer',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThEffectComposer) },
  ],
})
export class ThEffectComposer<
  T extends EffectComposer = EffectComposer,
  TARGS extends any[] = [
    renderer: WebGLRenderer,
    renderTarget?: WebGLRenderTarget
  ]
> extends ThPassBase<T, TARGS> {
  public getType(): Type<EffectComposer> {
    return EffectComposer;
  }

  @Input()
  public set renderer(value: WebGLRenderer) {
    if (this._objRef) {
      this._objRef.renderer = value;
    }
  }

  @Input()
  public set renderTarget1(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTarget1 = value;
    }
  }

  @Input()
  public set renderTarget2(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTarget2 = value;
    }
  }

  @Input()
  public set writeBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.writeBuffer = value;
    }
  }

  @Input()
  public set readBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.readBuffer = value;
    }
  }

  @Input()
  public set passes(value: Pass[]) {
    if (this._objRef) {
      this._objRef.passes = value;
    }
  }

  @Input()
  public set copyPass(value: ShaderPass) {
    if (this._objRef) {
      this._objRef.copyPass = value;
    }
  }

  @Input()
  public set clock(value: Clock) {
    if (this._objRef) {
      this._objRef.clock = value;
    }
  }

  @Input()
  public set renderToScreen(value: boolean) {
    if (this._objRef) {
      this._objRef.renderToScreen = value;
    }
  }
}
