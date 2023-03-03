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
} from 'three/examples/jsm/postprocessing/BokehPass';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-bokehPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThBokehPass) },
  ],
})
export class ThBokehPass<
  T extends BokehPass = BokehPass,
  TARGS = [scene: Scene, camera: Camera, params: BokehPassParamters]
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

  // @ts-ignore
  public get scene(): Scene | undefined {
    return this._objRef?.scene;
  }
  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  // @ts-ignore
  public get camera(): Camera | undefined {
    return this._objRef?.camera;
  }
  @Input()
  public set renderTargetColor(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetColor = value;
    }
  }

  // @ts-ignore
  public get renderTargetColor(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetColor;
  }
  @Input()
  public set renderTargetDepth(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetDepth = value;
    }
  }

  // @ts-ignore
  public get renderTargetDepth(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetDepth;
  }
  @Input()
  public set materialDepth(value: MeshDepthMaterial) {
    if (this._objRef) {
      this._objRef.materialDepth = value;
    }
  }

  // @ts-ignore
  public get materialDepth(): MeshDepthMaterial | undefined {
    return this._objRef?.materialDepth;
  }
  @Input()
  public set materialBokeh(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialBokeh = value;
    }
  }

  // @ts-ignore
  public get materialBokeh(): ShaderMaterial | undefined {
    return this._objRef?.materialBokeh;
  }
  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      Object.assign(this._objRef.uniforms, map);
    }
  }

  // @ts-ignore
  public get uniforms(): { [name: string]: { value: any } } | undefined {
    // @ts-ignore
    return this._objRef?.uniforms;
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
  @Input()
  public set oldClearColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.oldClearColor = applyValue<Color>(
        this._objRef.oldClearColor,
        value
      );
    }
  }
  // @ts-ignore
  public get oldClearColor(): Color | undefined {
    return this._objRef?.oldClearColor;
  }
}
