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
  Color,
  ColorRepresentation,
  MeshBasicMaterial,
  ShaderMaterial,
  Vector2,
  WebGLRenderTarget,
} from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-unrealBloomPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThUnrealBloomPass) },
  ],
})
export class ThUnrealBloomPass<
  T extends UnrealBloomPass = UnrealBloomPass,
  TARGS = [
    resolution: Vector2,
    strength: number,
    radius: number,
    threshold: number,
  ],
> extends ThPass<T, TARGS> {
  public getType(): Type<UnrealBloomPass> {
    return UnrealBloomPass;
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
  public set strength(value: number) {
    if (this._objRef) {
      this._objRef.strength = value;
    }
  }

  public get strength(): number | undefined {
    return this._objRef?.strength;
  }
  @Input()
  public set radius(value: number) {
    if (this._objRef) {
      this._objRef.radius = value;
    }
  }

  public get radius(): number | undefined {
    return this._objRef?.radius;
  }
  @Input()
  public set threshold(value: number) {
    if (this._objRef) {
      this._objRef.threshold = value;
    }
  }

  public get threshold(): number | undefined {
    return this._objRef?.threshold;
  }
  @Input()
  public set clearColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.clearColor = applyValue<Color>(
        this._objRef.clearColor,
        value,
      );
    }
  }
  public get clearColor(): Color | undefined {
    return this._objRef?.clearColor;
  }
  @Input()
  public set renderTargetsHorizontal(value: WebGLRenderTarget[]) {
    if (this._objRef) {
      this._objRef.renderTargetsHorizontal = value;
    }
  }

  public get renderTargetsHorizontal(): WebGLRenderTarget[] | undefined {
    return this._objRef?.renderTargetsHorizontal;
  }
  @Input()
  public set renderTargetsVertical(value: WebGLRenderTarget[]) {
    if (this._objRef) {
      this._objRef.renderTargetsVertical = value;
    }
  }

  public get renderTargetsVertical(): WebGLRenderTarget[] | undefined {
    return this._objRef?.renderTargetsVertical;
  }
  @Input()
  public set nMips(value: number) {
    if (this._objRef) {
      this._objRef.nMips = value;
    }
  }

  public get nMips(): number | undefined {
    return this._objRef?.nMips;
  }
  @Input()
  public set renderTargetBright(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetBright = value;
    }
  }

  public get renderTargetBright(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetBright;
  }
  @Input()
  public set highPassUniforms(value: object) {
    if (this._objRef) {
      this._objRef.highPassUniforms = value;
    }
  }

  public get highPassUniforms(): object | undefined {
    return this._objRef?.highPassUniforms;
  }
  @Input()
  public set materialHighPassFilter(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialHighPassFilter = value;
    }
  }

  public get materialHighPassFilter(): ShaderMaterial | undefined {
    return this._objRef?.materialHighPassFilter;
  }
  @Input()
  public set separableBlurMaterials(value: ShaderMaterial[]) {
    if (this._objRef) {
      this._objRef.separableBlurMaterials = value;
    }
  }

  public get separableBlurMaterials(): ShaderMaterial[] | undefined {
    return this._objRef?.separableBlurMaterials;
  }
  @Input()
  public set compositeMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.compositeMaterial = value;
    }
  }

  public get compositeMaterial(): ShaderMaterial | undefined {
    return this._objRef?.compositeMaterial;
  }
  @Input()
  public set bloomTintColors(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.bloomTintColors = value;
    }
  }

  public get bloomTintColors(): Vector3[] | undefined {
    return this._objRef?.bloomTintColors;
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
  public set blendMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.blendMaterial = value;
    }
  }

  public get blendMaterial(): ShaderMaterial | undefined {
    return this._objRef?.blendMaterial;
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
  public set basic(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.basic = value;
    }
  }

  public get basic(): MeshBasicMaterial | undefined {
    return this._objRef?.basic;
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
}
