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
  Color,
  ColorRepresentation,
  MeshDepthMaterial,
  Scene,
  ShaderMaterial,
  WebGLRenderTarget,
} from 'three';
import {
  BokehPass,
  BokehPassParamters,
} from 'three/examples/jsm/postprocessing/BokehPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-bokehPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThBokehPass) },
  ],
})
export class ThBokehPass<
  T extends BokehPass = BokehPass,
  TARGS = [scene: Scene, camera: Camera, params: BokehPassParamters],
> extends ThPass<T, TARGS> {
  public getType(): Type<BokehPass> {
    return BokehPass;
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
  public set renderTargetColor(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetColor = value;
    }
  }

  public get renderTargetColor(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetColor;
  }
  @Input()
  public set renderTargetDepth(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetDepth = value;
    }
  }

  public get renderTargetDepth(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetDepth;
  }
  @Input()
  public set materialDepth(value: MeshDepthMaterial) {
    if (this._objRef) {
      this._objRef.materialDepth = value;
    }
  }

  public get materialDepth(): MeshDepthMaterial | undefined {
    return this._objRef?.materialDepth;
  }
  @Input()
  public set materialBokeh(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialBokeh = value;
    }
  }

  public get materialBokeh(): ShaderMaterial | undefined {
    return this._objRef?.materialBokeh;
  }
  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      Object.assign(this._objRef.uniforms, map);
    }
  }

  public get uniforms(): { [name: string]: { value: any } } | undefined {
    return this._objRef?.uniforms as
      | { [name: string]: { value: any } }
      | undefined;
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
  public set oldClearColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.oldClearColor = applyValue<Color>(
        this._objRef.oldClearColor,
        value,
      );
    }
  }
  public get oldClearColor(): Color | undefined {
    return this._objRef?.oldClearColor;
  }
}
