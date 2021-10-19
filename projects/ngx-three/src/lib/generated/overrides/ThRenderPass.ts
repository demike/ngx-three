/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Camera, Color, Material, Scene } from 'three';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ThRenderPassGen } from '../ThRenderPassGen';

@Component({
  selector: 'th-renderPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: undefined,
})
export class ThRenderPass<
  T extends RenderPass = RenderPass,
  TARGS extends any[] = [
    scene: Scene,
    camera: Camera,
    overrideMaterial?: Material,
    clearColor?: Color,
    clearAlpha?: number
  ]
> extends ThRenderPassGen<T, TARGS> {
  // TODO: implement me!
}
