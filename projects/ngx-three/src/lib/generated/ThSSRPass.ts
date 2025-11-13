/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
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
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  Scene,
  ShaderMaterial,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { ReflectorForSSRPass } from 'three/examples/jsm/objects/ReflectorForSSRPass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import {
  SSRPass,
  SSRPassParams,
} from 'three/examples/jsm/postprocessing/SSRPass.js';
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
  TARGS = /* params */ SSRPassParams,
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

  public get width(): number | undefined {
    return this._objRef?.width;
  }
  @Input()
  public set height(value: number) {
    if (this._objRef) {
      this._objRef.height = value;
    }
  }

  public get height(): number | undefined {
    return this._objRef?.height;
  }
  @Input()
  public set clear(value: boolean) {
    if (this._objRef) {
      this._objRef.clear = value;
    }
  }

  public get clear(): boolean | undefined {
    return this._objRef?.clear;
  }
  @Input()
  public set renderer(value: WebGLRenderer) {
    if (this._objRef) {
      this._objRef.renderer = value;
    }
  }

  public get renderer(): WebGLRenderer | undefined {
    return this._objRef?.renderer;
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
  public set groundReflector(value: ReflectorForSSRPass | null) {
    if (this._objRef) {
      this._objRef.groundReflector = value;
    }
  }

  public get groundReflector(): (ReflectorForSSRPass | null) | undefined {
    return this._objRef?.groundReflector;
  }
  @Input()
  public set opacity(value: number) {
    if (this._objRef) {
      this._objRef.opacity = value;
    }
  }

  public get opacity(): number | undefined {
    return this._objRef?.opacity;
  }
  @Input()
  public set output(value: number) {
    if (this._objRef) {
      this._objRef.output = value;
    }
  }

  public get output(): number | undefined {
    return this._objRef?.output;
  }
  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
    }
  }

  public get maxDistance(): number | undefined {
    return this._objRef?.maxDistance;
  }
  @Input()
  public set thickness(value: number) {
    if (this._objRef) {
      this._objRef.thickness = value;
    }
  }

  public get thickness(): number | undefined {
    return this._objRef?.thickness;
  }
  @Input()
  public set tempColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.tempColor = applyValue<Color>(this._objRef.tempColor, value);
    }
  }
  public get tempColor(): Color | undefined {
    return this._objRef?.tempColor;
  }
  public get selects(): (Mesh[] | null) | undefined {
    return this._objRef?.selects;
  }
  @Input()
  public set selects(value: Mesh[] | null) {
    if (this._objRef) {
      this._objRef.selects = value;
    }
  }

  @Input()
  public set selective(value: boolean) {
    if (this._objRef) {
      this._objRef.selective = value;
    }
  }

  public get selective(): boolean | undefined {
    return this._objRef?.selective;
  }
  public get bouncing(): boolean | undefined {
    return this._objRef?.bouncing;
  }
  @Input()
  public set bouncing(value: boolean) {
    if (this._objRef) {
      this._objRef.bouncing = value;
    }
  }

  @Input()
  public set blur(value: boolean) {
    if (this._objRef) {
      this._objRef.blur = value;
    }
  }

  public get blur(): boolean | undefined {
    return this._objRef?.blur;
  }
  public get distanceAttenuation(): boolean | undefined {
    return this._objRef?.distanceAttenuation;
  }
  @Input()
  public set distanceAttenuation(value: boolean) {
    if (this._objRef) {
      this._objRef.distanceAttenuation = value;
    }
  }

  public get fresnel(): boolean | undefined {
    return this._objRef?.fresnel;
  }
  @Input()
  public set fresnel(value: boolean) {
    if (this._objRef) {
      this._objRef.fresnel = value;
    }
  }

  public get infiniteThick(): boolean | undefined {
    return this._objRef?.infiniteThick;
  }
  @Input()
  public set infiniteThick(value: boolean) {
    if (this._objRef) {
      this._objRef.infiniteThick = value;
    }
  }

  @Input()
  public set beautyRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.beautyRenderTarget = value;
    }
  }

  public get beautyRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.beautyRenderTarget;
  }
  @Input()
  public set prevRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.prevRenderTarget = value;
    }
  }

  public get prevRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.prevRenderTarget;
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
  public set metalnessRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.metalnessRenderTarget = value;
    }
  }

  public get metalnessRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.metalnessRenderTarget;
  }
  @Input()
  public set ssrRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.ssrRenderTarget = value;
    }
  }

  public get ssrRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.ssrRenderTarget;
  }
  @Input()
  public set blurRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.blurRenderTarget = value;
    }
  }

  public get blurRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.blurRenderTarget;
  }
  @Input()
  public set blurRenderTarget2(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.blurRenderTarget2 = value;
    }
  }

  public get blurRenderTarget2(): WebGLRenderTarget | undefined {
    return this._objRef?.blurRenderTarget2;
  }
  @Input()
  public set ssrMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.ssrMaterial = value;
    }
  }

  public get ssrMaterial(): ShaderMaterial | undefined {
    return this._objRef?.ssrMaterial;
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
  public set metalnessOnMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.metalnessOnMaterial = value;
    }
  }

  public get metalnessOnMaterial(): MeshBasicMaterial | undefined {
    return this._objRef?.metalnessOnMaterial;
  }
  @Input()
  public set metalnessOffMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.metalnessOffMaterial = value;
    }
  }

  public get metalnessOffMaterial(): MeshBasicMaterial | undefined {
    return this._objRef?.metalnessOffMaterial;
  }
  @Input()
  public set blurMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.blurMaterial = value;
    }
  }

  public get blurMaterial(): ShaderMaterial | undefined {
    return this._objRef?.blurMaterial;
  }
  @Input()
  public set blurMaterial2(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.blurMaterial2 = value;
    }
  }

  public get blurMaterial2(): ShaderMaterial | undefined {
    return this._objRef?.blurMaterial2;
  }
  @Input()
  public set depthRenderMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.depthRenderMaterial = value;
    }
  }

  public get depthRenderMaterial(): ShaderMaterial | undefined {
    return this._objRef?.depthRenderMaterial;
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

  public static readonly OUTPUT = SSRPass.OUTPUT;

  @Input()
  public set dispose(value: () => void) {
    if (this._objRef) {
      this._objRef.dispose = value;
    }
  }

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
      clearAlpha: ColorRepresentation,
    ) => void,
  ) {
    if (this._objRef) {
      this._objRef.renderPass = value;
    }
  }

  public get renderPass():
    | ((
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: ColorRepresentation,
        clearAlpha: ColorRepresentation,
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
      clearAlpha: ColorRepresentation,
    ) => void,
  ) {
    if (this._objRef) {
      this._objRef.renderOverride = value;
    }
  }

  public get renderOverride():
    | ((
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: ColorRepresentation,
        clearAlpha: ColorRepresentation,
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
      clearAlpha: ColorRepresentation,
    ) => void,
  ) {
    if (this._objRef) {
      this._objRef.renderMetalness = value;
    }
  }

  public get renderMetalness():
    | ((
        renderer: WebGLRenderer,
        passMaterial: Material,
        renderTarget: WebGLRenderTarget,
        clearColor: ColorRepresentation,
        clearAlpha: ColorRepresentation,
      ) => void)
    | undefined {
    return this._objRef?.renderMetalness;
  }
}
