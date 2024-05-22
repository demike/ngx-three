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
  MeshNormalMaterial,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderTarget,
} from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import {
  SAOPass,
  SAOPassParams,
} from 'three/examples/jsm/postprocessing/SAOPass.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sAOPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSAOPass) },
  ],
})
export class ThSAOPass<
  T extends SAOPass = SAOPass,
  TARGS = [scene: Scene, camera: Camera, resolution?: Vector2],
> extends ThPass<T, TARGS> {
  public getType(): Type<SAOPass> {
    return SAOPass;
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
  public set originalClearColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.originalClearColor = applyValue<Color>(
        this._objRef.originalClearColor,
        value,
      );
    }
  }
  public get originalClearColor(): Color | undefined {
    return this._objRef?.originalClearColor;
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
  @Input()
  public set oldClearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.oldClearAlpha = value;
    }
  }

  public get oldClearAlpha(): number | undefined {
    return this._objRef?.oldClearAlpha;
  }
  @Input()
  public set resolution(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.resolution = applyValue<Vector2>(
        this._objRef.resolution,
        value,
      );
    }
  }
  public get resolution(): Vector2 | undefined {
    return this._objRef?.resolution;
  }
  @Input()
  public set saoRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.saoRenderTarget = value;
    }
  }

  public get saoRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.saoRenderTarget;
  }
  @Input()
  public set blurIntermediateRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.blurIntermediateRenderTarget = value;
    }
  }

  public get blurIntermediateRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.blurIntermediateRenderTarget;
  }
  @Input()
  public set normalRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.normalRenderTarget = value;
    }
  }

  public get normalRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.normalRenderTarget;
  }
  @Input()
  public set normalMaterial(value: MeshNormalMaterial) {
    if (this._objRef) {
      this._objRef.normalMaterial = value;
    }
  }

  public get normalMaterial(): MeshNormalMaterial | undefined {
    return this._objRef?.normalMaterial;
  }
  @Input()
  public set saoMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.saoMaterial = value;
    }
  }

  public get saoMaterial(): ShaderMaterial | undefined {
    return this._objRef?.saoMaterial;
  }
  @Input()
  public set vBlurMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.vBlurMaterial = value;
    }
  }

  public get vBlurMaterial(): ShaderMaterial | undefined {
    return this._objRef?.vBlurMaterial;
  }
  @Input()
  public set hBlurMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.hBlurMaterial = value;
    }
  }

  public get hBlurMaterial(): ShaderMaterial | undefined {
    return this._objRef?.hBlurMaterial;
  }
  @Input()
  public set materialCopy(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialCopy = value;
    }
  }

  public get materialCopy(): ShaderMaterial | undefined {
    return this._objRef?.materialCopy;
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
  public set params(value: SAOPassParams) {
    if (this._objRef) {
      this._objRef.params = value;
    }
  }

  public get params(): SAOPassParams | undefined {
    return this._objRef?.params;
  }

  public static readonly OUTPUT = SAOPass.OUTPUT;
}
