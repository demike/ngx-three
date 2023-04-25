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
  Material,
  MeshBasicMaterial,
  MeshNormalMaterial,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { ReflectorForSSRPass } from 'three/examples/jsm/objects/ReflectorForSSRPass';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import {
  SSRPass,
  SSRPassParams,
} from 'three/examples/jsm/postprocessing/SSRPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sSRPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSSRPass) },
  ],
})
export class ThSSRPass<
  T extends SSRPass = SSRPass,
  TARGS = /* params */ SSRPassParams
> extends ThPass<T, TARGS> {
  public getType(): Type<SSRPass> {
    return SSRPass;
  }

  @Input()
  public set width(value: number) {
    if (this._objRef) {
      this._objRef.width = value;
    }
  }

  // @ts-ignore
  public get width(): number | undefined {
    return this._objRef?.width;
  }
  @Input()
  public set height(value: number) {
    if (this._objRef) {
      this._objRef.height = value;
    }
  }

  // @ts-ignore
  public get height(): number | undefined {
    return this._objRef?.height;
  }
  @Input()
  public set clear(value: boolean) {
    if (this._objRef) {
      this._objRef.clear = value;
    }
  }

  // @ts-ignore
  public get clear(): boolean | undefined {
    return this._objRef?.clear;
  }
  @Input()
  public set renderer(value: WebGLRenderer) {
    if (this._objRef) {
      this._objRef.renderer = value;
    }
  }

  // @ts-ignore
  public get renderer(): WebGLRenderer | undefined {
    return this._objRef?.renderer;
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
  public set groundReflector(value: ReflectorForSSRPass | null) {
    if (this._objRef) {
      this._objRef.groundReflector = value;
    }
  }

  // @ts-ignore
  public get groundReflector(): (ReflectorForSSRPass | null) | undefined {
    return this._objRef?.groundReflector;
  }
  @Input()
  public set opacity(value: number) {
    if (this._objRef) {
      this._objRef.opacity = value;
    }
  }

  // @ts-ignore
  public get opacity(): number | undefined {
    return this._objRef?.opacity;
  }
  @Input()
  public set output(value: number) {
    if (this._objRef) {
      this._objRef.output = value;
    }
  }

  // @ts-ignore
  public get output(): number | undefined {
    return this._objRef?.output;
  }
  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
    }
  }

  // @ts-ignore
  public get maxDistance(): number | undefined {
    return this._objRef?.maxDistance;
  }
  @Input()
  public set thickness(value: number) {
    if (this._objRef) {
      this._objRef.thickness = value;
    }
  }

  // @ts-ignore
  public get thickness(): number | undefined {
    return this._objRef?.thickness;
  }
  @Input()
  public set tempColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.tempColor = applyValue<Color>(this._objRef.tempColor, value);
    }
  }
  // @ts-ignore
  public get tempColor(): Color | undefined {
    return this._objRef?.tempColor;
  }
  @Input()
  public set selective(value: boolean) {
    if (this._objRef) {
      this._objRef.selective = value;
    }
  }

  // @ts-ignore
  public get selective(): boolean | undefined {
    return this._objRef?.selective;
  }
  @Input()
  public set blur(value: boolean) {
    if (this._objRef) {
      this._objRef.blur = value;
    }
  }

  // @ts-ignore
  public get blur(): boolean | undefined {
    return this._objRef?.blur;
  }
  @Input()
  public set thickTolerance(value: number) {
    if (this._objRef) {
      this._objRef.thickTolerance = value;
    }
  }

  // @ts-ignore
  public get thickTolerance(): number | undefined {
    return this._objRef?.thickTolerance;
  }
  @Input()
  public set beautyRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.beautyRenderTarget = value;
    }
  }

  // @ts-ignore
  public get beautyRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.beautyRenderTarget;
  }
  @Input()
  public set prevRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.prevRenderTarget = value;
    }
  }

  // @ts-ignore
  public get prevRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.prevRenderTarget;
  }
  @Input()
  public set normalRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.normalRenderTarget = value;
    }
  }

  // @ts-ignore
  public get normalRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.normalRenderTarget;
  }
  @Input()
  public set metalnessRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.metalnessRenderTarget = value;
    }
  }

  // @ts-ignore
  public get metalnessRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.metalnessRenderTarget;
  }
  @Input()
  public set ssrRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.ssrRenderTarget = value;
    }
  }

  // @ts-ignore
  public get ssrRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.ssrRenderTarget;
  }
  @Input()
  public set blurRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.blurRenderTarget = value;
    }
  }

  // @ts-ignore
  public get blurRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.blurRenderTarget;
  }
  @Input()
  public set blurRenderTarget2(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.blurRenderTarget2 = value;
    }
  }

  // @ts-ignore
  public get blurRenderTarget2(): WebGLRenderTarget | undefined {
    return this._objRef?.blurRenderTarget2;
  }
  @Input()
  public set ssrMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.ssrMaterial = value;
    }
  }

  // @ts-ignore
  public get ssrMaterial(): ShaderMaterial | undefined {
    return this._objRef?.ssrMaterial;
  }
  @Input()
  public set normalMaterial(value: MeshNormalMaterial) {
    if (this._objRef) {
      this._objRef.normalMaterial = value;
    }
  }

  // @ts-ignore
  public get normalMaterial(): MeshNormalMaterial | undefined {
    return this._objRef?.normalMaterial;
  }
  @Input()
  public set metalnessOnMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.metalnessOnMaterial = value;
    }
  }

  // @ts-ignore
  public get metalnessOnMaterial(): MeshBasicMaterial | undefined {
    return this._objRef?.metalnessOnMaterial;
  }
  @Input()
  public set metalnessOffMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.metalnessOffMaterial = value;
    }
  }

  // @ts-ignore
  public get metalnessOffMaterial(): MeshBasicMaterial | undefined {
    return this._objRef?.metalnessOffMaterial;
  }
  @Input()
  public set blurMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.blurMaterial = value;
    }
  }

  // @ts-ignore
  public get blurMaterial(): ShaderMaterial | undefined {
    return this._objRef?.blurMaterial;
  }
  @Input()
  public set blurMaterial2(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.blurMaterial2 = value;
    }
  }

  // @ts-ignore
  public get blurMaterial2(): ShaderMaterial | undefined {
    return this._objRef?.blurMaterial2;
  }
  @Input()
  public set depthRenderMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.depthRenderMaterial = value;
    }
  }

  // @ts-ignore
  public get depthRenderMaterial(): ShaderMaterial | undefined {
    return this._objRef?.depthRenderMaterial;
  }
  @Input()
  public set copyMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.copyMaterial = value;
    }
  }

  // @ts-ignore
  public get copyMaterial(): ShaderMaterial | undefined {
    return this._objRef?.copyMaterial;
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
  public set originalClearColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.originalClearColor = applyValue<Color>(
        this._objRef.originalClearColor,
        value
      );
    }
  }
  // @ts-ignore
  public get originalClearColor(): Color | undefined {
    return this._objRef?.originalClearColor;
  }

  public static readonly OUTPUT = SSRPass.OUTPUT;

  @Input()
  public set dispose(value: () => void) {
    if (this._objRef) {
      this._objRef.dispose = value;
    }
  }

  // @ts-ignore
  public get dispose(): (() => void) | undefined {
    return this._objRef?.dispose;
  }
  @Input()
  public set renderPass(
    value: (
      renderer: WebGLRenderer,
      passMaterial: Material,
      renderTarget: WebGLRenderTarget,
      clearColor: ColorRepresentation,
      clearAlpha: ColorRepresentation
    ) => void
  ) {
    if (this._objRef) {
      this._objRef.renderPass = value;
    }
  }

  // @ts-ignore
  public get renderPass():
    | ((
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: ColorRepresentation,
        clearAlpha: ColorRepresentation
      ) => void)
    | undefined {
    return this._objRef?.renderPass;
  }
  @Input()
  public set renderOverride(
    value: (
      renderer: WebGLRenderer,
      passMaterial: Material,
      renderTarget: WebGLRenderTarget,
      clearColor: ColorRepresentation,
      clearAlpha: ColorRepresentation
    ) => void
  ) {
    if (this._objRef) {
      this._objRef.renderOverride = value;
    }
  }

  // @ts-ignore
  public get renderOverride():
    | ((
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: ColorRepresentation,
        clearAlpha: ColorRepresentation
      ) => void)
    | undefined {
    return this._objRef?.renderOverride;
  }
  @Input()
  public set renderMetalness(
    value: (
      renderer: WebGLRenderer,
      passMaterial: Material,
      renderTarget: WebGLRenderTarget,
      clearColor: ColorRepresentation,
      clearAlpha: ColorRepresentation
    ) => void
  ) {
    if (this._objRef) {
      this._objRef.renderMetalness = value;
    }
  }

  // @ts-ignore
  public get renderMetalness():
    | ((
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: ColorRepresentation,
        clearAlpha: ColorRepresentation
      ) => void)
    | undefined {
    return this._objRef?.renderMetalness;
  }
}
