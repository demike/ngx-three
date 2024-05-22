/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Vector4, WebGLRenderer, WebGLRenderTarget } from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { ThEngineService } from '../../ThEngine.service';
import { ThView } from '../../ThView';
import { ThEffectComposerGen } from '../ThEffectComposerGen';

@Component({
  selector: 'th-effectComposer',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ThEffectComposer<
  T extends EffectComposer = EffectComposer,
  TARGS extends any[] = [renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget],
> extends ThEffectComposerGen<T, TARGS> {
  constructor(
    protected view: ThView,
    protected engineService: ThEngineService,
  ) {
    super();
  }

  public createThreeInstance(args?: TARGS): EffectComposer {
    if (!args) {
      args = new Array(5) as TARGS;
    }

    args[0] = args[0] ?? this.engineService.wegblRenderer;
    args[1] = args[1] ?? this.initRenderTarget();

    return super.createThreeInstance(args);
  }

  private initRenderTarget() {
    if (!this.view.viewPort) {
      return;
    } else {
      let width: number;
      let height: number;
      if (this.view.viewPort instanceof Vector4) {
        width = this.view.viewPort.z;
        height = this.view.viewPort?.width;
      } else {
        width = this.view.viewPort.width;
        height = this.view.viewPort.height;
      }
      return new WebGLRenderTarget(width, height);
    }
  }

  public addToParent() {
    if (this._objRef) {
      this.view.effectComposer = this._objRef;
    }
  }

  public removeFromParent() {
    this.view.effectComposer = undefined;
  }
}
