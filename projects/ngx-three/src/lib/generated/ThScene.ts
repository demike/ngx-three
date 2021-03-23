/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Camera, Color, IFog, Material, Scene, Texture, WebGLCubeRenderTarget, WebGLRenderer, WebGLRenderTarget } from 'three';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-scene',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThScene) }]
})
export class ThScene<TARGS extends any[] = []> extends ThObject3D<TARGS> {
  @Input()
  public objRef!: Scene;
  protected getType(): Type<Scene> {
    return Scene;
  }

  @Input()
  public set type(value: 'Scene') {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set fog(value: IFog | null) {
    if (this.objRef) {
      this.objRef.fog = value;
    }
  }

  @Input()
  public set overrideMaterial(value: Material | null) {
    if (this.objRef) {
      this.objRef.overrideMaterial = value;
    }
  }

  @Input()
  public set autoUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.autoUpdate = value;
    }
  }

  @Input()
  public set background(value: null | Color | Texture | WebGLCubeRenderTarget | [color: Color | string | number]) {
    if (this.objRef) {
      this.objRef.background = applyValue<null | Color | Texture | WebGLCubeRenderTarget>(this.objRef.background, value);
    }
  }
  @Input()
  public set environment(value: null | Texture) {
    if (this.objRef) {
      this.objRef.environment = value;
    }
  }

  @Input()
  public set onBeforeRender(
    value: (
      renderer: WebGLRenderer,
      scene: Scene,
      camera: Camera,
      renderTarget: WebGLRenderTarget | any // any required for Object3D.onBeforeRender compatibility
    ) => void
  ) {
    if (this.objRef) {
      this.objRef.onBeforeRender = value;
    }
  }

  @Input()
  public set onAfterRender(value: (renderer: WebGLRenderer, scene: Scene, camera: Camera) => void) {
    if (this.objRef) {
      this.objRef.onAfterRender = value;
    }
  }
}
