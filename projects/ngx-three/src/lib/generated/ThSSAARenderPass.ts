/* eslint-disable @typescript-eslint/ban-types */
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
import {
  Camera,
  ColorRepresentation,
  Scene,
  ShaderMaterial,
  WebGLRenderTarget,
} from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass.js';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sSAARenderPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSSAARenderPass) },
  ],
})
export class ThSSAARenderPass<
  T extends SSAARenderPass = SSAARenderPass,
  TARGS = [
    scene: Scene,
    camera: Camera,
    clearColor?: ColorRepresentation,
    clearAlpha?: number,
  ],
> extends ThPass<T, TARGS> {
  public getType(): Type<SSAARenderPass> {
    return SSAARenderPass;
  }

  @Input()
  public set scene(value: Scene) {
    if (this._objRef) {
      this._objRef.scene = value;
    }
  }

  public get scene(): Scene | undefined {
    return this._objRef?.scene;
  }
  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set sampleLevel(value: number) {
    if (this._objRef) {
      this._objRef.sampleLevel = value;
    }
  }

  public get sampleLevel(): number | undefined {
    return this._objRef?.sampleLevel;
  }
  @Input()
  public set unbiased(value: boolean) {
    if (this._objRef) {
      this._objRef.unbiased = value;
    }
  }

  public get unbiased(): boolean | undefined {
    return this._objRef?.unbiased;
  }
  @Input()
  public set stencilBuffer(value: boolean) {
    if (this._objRef) {
      this._objRef.stencilBuffer = value;
    }
  }

  public get stencilBuffer(): boolean | undefined {
    return this._objRef?.stencilBuffer;
  }
  @Input()
  public set clearColor(value: ColorRepresentation) {
    if (this._objRef) {
      this._objRef.clearColor = value;
    }
  }

  public get clearColor(): ColorRepresentation | undefined {
    return this._objRef?.clearColor;
  }
  @Input()
  public set clearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.clearAlpha = value;
    }
  }

  public get clearAlpha(): number | undefined {
    return this._objRef?.clearAlpha;
  }
  @Input()
  public set copyUniforms(value: object) {
    if (this._objRef) {
      this._objRef.copyUniforms = value;
    }
  }

  public get copyUniforms(): object | undefined {
    return this._objRef?.copyUniforms;
  }
  @Input()
  public set copyMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.copyMaterial = value;
    }
  }

  public get copyMaterial(): ShaderMaterial | undefined {
    return this._objRef?.copyMaterial;
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
  @Input()
  public set sampleRenderTarget(value: WebGLRenderTarget | undefined) {
    if (this._objRef) {
      this._objRef.sampleRenderTarget = value;
    }
  }

  public get sampleRenderTarget(): (WebGLRenderTarget | undefined) | undefined {
    return this._objRef?.sampleRenderTarget;
  }
}
