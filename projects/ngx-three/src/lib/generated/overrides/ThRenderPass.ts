/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { AfterContentChecked, ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { Camera, Color, Material, Scene } from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ThPassBase } from '../../ThPassBase';
import { ThView } from '../../ThView';
import { ThRenderPassGen } from '../ThRenderPassGen';
import { ThEffectComposer } from './ThEffectComposer';

@Component({
  selector: 'th-renderPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThPassBase, useExisting: forwardRef(() => ThRenderPass) }],
})
export class ThRenderPass<
    T extends RenderPass = RenderPass,
    TARGS extends any[] = [
      scene: Scene,
      camera: Camera,
      overrideMaterial?: Material,
      clearColor?: Color,
      clearAlpha?: number,
    ],
  >
  extends ThRenderPassGen<T, TARGS>
  implements AfterContentChecked
{
  constructor(
    protected effectComposer: ThEffectComposer,
    private view: ThView,
  ) {
    super(effectComposer);
  }

  public createThreeInstance(args?: TARGS): RenderPass {
    if (!args) {
      args = new Array(5) as TARGS;
    }

    args[0] = args[0] ?? this.view.scene;
    args[1] = args[1] ?? this.view.camera;
    args[2] = args[2] ?? this.overrideMaterial;
    args[3] = args[3] ?? this.clearColor;
    args[4] = args[4] ?? this.clearAlpha;

    return super.createThreeInstance(args);
  }

  public ngAfterContentChecked() {
    if (!this._objRef) {
      return;
    }

    if (this.view.scene && this.view.scene.objRef) {
      this._objRef.scene = this.view.scene.objRef;
    }

    if (this.view.camera && this.view.camera.objRef) {
      this._objRef.camera = this.view.camera.objRef;
    }
  }
}
