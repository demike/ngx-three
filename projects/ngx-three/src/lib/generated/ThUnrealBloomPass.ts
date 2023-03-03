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
  Color,
  ColorRepresentation,
  MeshBasicMaterial,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderTarget,
} from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-unrealBloomPass',
  template: '',
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
    threshold: number
  ]
> extends ThPass<T, TARGS> {
  public getType(): Type<UnrealBloomPass> {
    return UnrealBloomPass;
  }

  @Input()
  public set resolution(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.resolution = applyValue<Vector2>(
        this._objRef.resolution,
        value
      );
    }
  }
  // @ts-ignore
  public get resolution(): Vector2 | undefined {
    return this._objRef?.resolution;
  }
  @Input()
  public set strength(value: number) {
    if (this._objRef) {
      this._objRef.strength = value;
    }
  }

  // @ts-ignore
  public get strength(): number | undefined {
    return this._objRef?.strength;
  }
  @Input()
  public set radius(value: number) {
    if (this._objRef) {
      this._objRef.radius = value;
    }
  }

  // @ts-ignore
  public get radius(): number | undefined {
    return this._objRef?.radius;
  }
  @Input()
  public set threshold(value: number) {
    if (this._objRef) {
      this._objRef.threshold = value;
    }
  }

  // @ts-ignore
  public get threshold(): number | undefined {
    return this._objRef?.threshold;
  }
  @Input()
  public set clearColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.clearColor = applyValue<Color>(
        this._objRef.clearColor,
        value
      );
    }
  }
  // @ts-ignore
  public get clearColor(): Color | undefined {
    return this._objRef?.clearColor;
  }
  @Input()
  public set renderTargetsHorizontal(value: WebGLRenderTarget[]) {
    if (this._objRef) {
      this._objRef.renderTargetsHorizontal = value;
    }
  }

  // @ts-ignore
  public get renderTargetsHorizontal(): WebGLRenderTarget[] | undefined {
    return this._objRef?.renderTargetsHorizontal;
  }
  @Input()
  public set renderTargetsVertical(value: WebGLRenderTarget[]) {
    if (this._objRef) {
      this._objRef.renderTargetsVertical = value;
    }
  }

  // @ts-ignore
  public get renderTargetsVertical(): WebGLRenderTarget[] | undefined {
    return this._objRef?.renderTargetsVertical;
  }
  @Input()
  public set nMips(value: number) {
    if (this._objRef) {
      this._objRef.nMips = value;
    }
  }

  // @ts-ignore
  public get nMips(): number | undefined {
    return this._objRef?.nMips;
  }
  @Input()
  public set renderTargetBright(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetBright = value;
    }
  }

  // @ts-ignore
  public get renderTargetBright(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetBright;
  }
  @Input()
  public set highPassUniforms(value: object) {
    if (this._objRef) {
      this._objRef.highPassUniforms = value;
    }
  }

  // @ts-ignore
  public get highPassUniforms(): object | undefined {
    return this._objRef?.highPassUniforms;
  }
  @Input()
  public set materialHighPassFilter(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialHighPassFilter = value;
    }
  }

  // @ts-ignore
  public get materialHighPassFilter(): ShaderMaterial | undefined {
    return this._objRef?.materialHighPassFilter;
  }
  @Input()
  public set separableBlurMaterials(value: ShaderMaterial[]) {
    if (this._objRef) {
      this._objRef.separableBlurMaterials = value;
    }
  }

  // @ts-ignore
  public get separableBlurMaterials(): ShaderMaterial[] | undefined {
    return this._objRef?.separableBlurMaterials;
  }
  @Input()
  public set compositeMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.compositeMaterial = value;
    }
  }

  // @ts-ignore
  public get compositeMaterial(): ShaderMaterial | undefined {
    return this._objRef?.compositeMaterial;
  }
  @Input()
  public set bloomTintColors(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.bloomTintColors = value;
    }
  }

  // @ts-ignore
  public get bloomTintColors(): Vector3[] | undefined {
    return this._objRef?.bloomTintColors;
  }
  @Input()
  public set copyUniforms(value: object) {
    if (this._objRef) {
      this._objRef.copyUniforms = value;
    }
  }

  // @ts-ignore
  public get copyUniforms(): object | undefined {
    return this._objRef?.copyUniforms;
  }
  @Input()
  public set materialCopy(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialCopy = value;
    }
  }

  // @ts-ignore
  public get materialCopy(): ShaderMaterial | undefined {
    return this._objRef?.materialCopy;
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
  @Input()
  public set oldClearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.oldClearAlpha = value;
    }
  }

  // @ts-ignore
  public get oldClearAlpha(): number | undefined {
    return this._objRef?.oldClearAlpha;
  }
  @Input()
  public set basic(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.basic = value;
    }
  }

  // @ts-ignore
  public get basic(): MeshBasicMaterial | undefined {
    return this._objRef?.basic;
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
}
