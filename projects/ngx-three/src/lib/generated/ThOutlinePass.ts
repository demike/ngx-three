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
  Color,
  ColorRepresentation,
  Matrix4,
  MeshBasicMaterial,
  MeshDepthMaterial,
  Object3D,
  Scene,
  ShaderMaterial,
  Texture,
  Vector2,
  WebGLRenderTarget,
} from 'three';
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass.js';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-outlinePass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThOutlinePass) },
  ],
})
export class ThOutlinePass<
  T extends OutlinePass = OutlinePass,
  TARGS = [
    resolution: Vector2,
    scene: Scene,
    camera: Camera,
    selectedObjects?: Object3D[],
  ],
> extends ThPass<T, TARGS> {
  public getType(): Type<OutlinePass> {
    return OutlinePass;
  }

  @Input()
  public set renderScene(value: Scene) {
    if (this._objRef) {
      this._objRef.renderScene = value;
    }
  }

  public get renderScene(): Scene | undefined {
    return this._objRef?.renderScene;
  }
  @Input()
  public set renderCamera(value: Camera) {
    if (this._objRef) {
      this._objRef.renderCamera = value;
    }
  }

  public get renderCamera(): Camera | undefined {
    return this._objRef?.renderCamera;
  }
  @Input()
  public set selectedObjects(value: Object3D[]) {
    if (this._objRef) {
      this._objRef.selectedObjects = value;
    }
  }

  public get selectedObjects(): Object3D[] | undefined {
    return this._objRef?.selectedObjects;
  }
  @Input()
  public set visibleEdgeColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.visibleEdgeColor = applyValue<Color>(
        this._objRef.visibleEdgeColor,
        value,
      );
    }
  }
  public get visibleEdgeColor(): Color | undefined {
    return this._objRef?.visibleEdgeColor;
  }
  @Input()
  public set hiddenEdgeColor(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.hiddenEdgeColor = applyValue<Color>(
        this._objRef.hiddenEdgeColor,
        value,
      );
    }
  }
  public get hiddenEdgeColor(): Color | undefined {
    return this._objRef?.hiddenEdgeColor;
  }
  @Input()
  public set edgeGlow(value: number) {
    if (this._objRef) {
      this._objRef.edgeGlow = value;
    }
  }

  public get edgeGlow(): number | undefined {
    return this._objRef?.edgeGlow;
  }
  @Input()
  public set usePatternTexture(value: boolean) {
    if (this._objRef) {
      this._objRef.usePatternTexture = value;
    }
  }

  public get usePatternTexture(): boolean | undefined {
    return this._objRef?.usePatternTexture;
  }
  @Input()
  public set edgeThickness(value: number) {
    if (this._objRef) {
      this._objRef.edgeThickness = value;
    }
  }

  public get edgeThickness(): number | undefined {
    return this._objRef?.edgeThickness;
  }
  @Input()
  public set edgeStrength(value: number) {
    if (this._objRef) {
      this._objRef.edgeStrength = value;
    }
  }

  public get edgeStrength(): number | undefined {
    return this._objRef?.edgeStrength;
  }
  @Input()
  public set downSampleRatio(value: number) {
    if (this._objRef) {
      this._objRef.downSampleRatio = value;
    }
  }

  public get downSampleRatio(): number | undefined {
    return this._objRef?.downSampleRatio;
  }
  @Input()
  public set pulsePeriod(value: number) {
    if (this._objRef) {
      this._objRef.pulsePeriod = value;
    }
  }

  public get pulsePeriod(): number | undefined {
    return this._objRef?.pulsePeriod;
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
  public set patternTexture(value: Texture) {
    if (this._objRef) {
      this._objRef.patternTexture = value;
    }
  }

  public get patternTexture(): Texture | undefined {
    return this._objRef?.patternTexture;
  }
  @Input()
  public set maskBufferMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.maskBufferMaterial = value;
    }
  }

  public get maskBufferMaterial(): MeshBasicMaterial | undefined {
    return this._objRef?.maskBufferMaterial;
  }
  @Input()
  public set renderTargetMaskBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetMaskBuffer = value;
    }
  }

  public get renderTargetMaskBuffer(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetMaskBuffer;
  }
  @Input()
  public set depthMaterial(value: MeshDepthMaterial) {
    if (this._objRef) {
      this._objRef.depthMaterial = value;
    }
  }

  public get depthMaterial(): MeshDepthMaterial | undefined {
    return this._objRef?.depthMaterial;
  }
  @Input()
  public set prepareMaskMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.prepareMaskMaterial = value;
    }
  }

  public get prepareMaskMaterial(): ShaderMaterial | undefined {
    return this._objRef?.prepareMaskMaterial;
  }
  @Input()
  public set renderTargetDepthBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetDepthBuffer = value;
    }
  }

  public get renderTargetDepthBuffer(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetDepthBuffer;
  }
  @Input()
  public set renderTargetMaskDownSampleBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetMaskDownSampleBuffer = value;
    }
  }

  public get renderTargetMaskDownSampleBuffer(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetMaskDownSampleBuffer;
  }
  @Input()
  public set renderTargetBlurBuffer1(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetBlurBuffer1 = value;
    }
  }

  public get renderTargetBlurBuffer1(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetBlurBuffer1;
  }
  @Input()
  public set renderTargetBlurBuffer2(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetBlurBuffer2 = value;
    }
  }

  public get renderTargetBlurBuffer2(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetBlurBuffer2;
  }
  @Input()
  public set edgeDetectionMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.edgeDetectionMaterial = value;
    }
  }

  public get edgeDetectionMaterial(): ShaderMaterial | undefined {
    return this._objRef?.edgeDetectionMaterial;
  }
  @Input()
  public set renderTargetEdgeBuffer1(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetEdgeBuffer1 = value;
    }
  }

  public get renderTargetEdgeBuffer1(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetEdgeBuffer1;
  }
  @Input()
  public set renderTargetEdgeBuffer2(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetEdgeBuffer2 = value;
    }
  }

  public get renderTargetEdgeBuffer2(): WebGLRenderTarget | undefined {
    return this._objRef?.renderTargetEdgeBuffer2;
  }
  @Input()
  public set separableBlurMaterial1(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.separableBlurMaterial1 = value;
    }
  }

  public get separableBlurMaterial1(): ShaderMaterial | undefined {
    return this._objRef?.separableBlurMaterial1;
  }
  @Input()
  public set separableBlurMaterial2(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.separableBlurMaterial2 = value;
    }
  }

  public get separableBlurMaterial2(): ShaderMaterial | undefined {
    return this._objRef?.separableBlurMaterial2;
  }
  @Input()
  public set overlayMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.overlayMaterial = value;
    }
  }

  public get overlayMaterial(): ShaderMaterial | undefined {
    return this._objRef?.overlayMaterial;
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
  public set materialCopy(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialCopy = value;
    }
  }

  public get materialCopy(): ShaderMaterial | undefined {
    return this._objRef?.materialCopy;
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
  public set fsQuad(value: FullScreenQuad) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }

  public get fsQuad(): FullScreenQuad | undefined {
    return this._objRef?.fsQuad;
  }
  @Input()
  public set tempPulseColor1(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.tempPulseColor1 = applyValue<Color>(
        this._objRef.tempPulseColor1,
        value,
      );
    }
  }
  public get tempPulseColor1(): Color | undefined {
    return this._objRef?.tempPulseColor1;
  }
  @Input()
  public set tempPulseColor2(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.tempPulseColor2 = applyValue<Color>(
        this._objRef.tempPulseColor2,
        value,
      );
    }
  }
  public get tempPulseColor2(): Color | undefined {
    return this._objRef?.tempPulseColor2;
  }
  @Input()
  public set textureMatrix(
    value:
      | Matrix4
      | [
          n11: number,
          n12: number,
          n13: number,
          n14: number,
          n21: number,
          n22: number,
          n23: number,
          n24: number,
          n31: number,
          n32: number,
          n33: number,
          n34: number,
          n41: number,
          n42: number,
          n43: number,
          n44: number,
        ],
  ) {
    if (this._objRef) {
      this._objRef.textureMatrix = applyValue<Matrix4>(
        this._objRef.textureMatrix,
        value,
      );
    }
  }
  public get textureMatrix(): Matrix4 | undefined {
    return this._objRef?.textureMatrix;
  }
}
