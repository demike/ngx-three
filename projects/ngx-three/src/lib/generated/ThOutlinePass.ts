/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
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
import { OutlinePass } from 'three/examples/jsm/postprocessing/OutlinePass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-outlinePass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThOutlinePass) },
  ],
})
export class ThOutlinePass<
  T extends OutlinePass = OutlinePass,
  TARGS extends any[] = [
    resolution: Vector2,
    scene: Scene,
    camera: Camera,
    selectedObjects?: Object3D[]
  ]
> extends ThPass<T, TARGS> {
  protected getType(): Type<OutlinePass> {
    return OutlinePass;
  }

  @Input()
  public set renderScene(value: Scene) {
    if (this._objRef) {
      this._objRef.renderScene = value;
    }
  }

  @Input()
  public set renderCamera(value: Camera) {
    if (this._objRef) {
      this._objRef.renderCamera = value;
    }
  }

  @Input()
  public set selectedObjects(value: Object3D[]) {
    if (this._objRef) {
      this._objRef.selectedObjects = value;
    }
  }

  @Input()
  public set visibleEdgeColor(value: Color | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.visibleEdgeColor = applyValue<Color>(
        this._objRef.visibleEdgeColor,
        value
      );
    }
  }
  @Input()
  public set hiddenEdgeColor(value: Color | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.hiddenEdgeColor = applyValue<Color>(
        this._objRef.hiddenEdgeColor,
        value
      );
    }
  }
  @Input()
  public set edgeGlow(value: number) {
    if (this._objRef) {
      this._objRef.edgeGlow = value;
    }
  }

  @Input()
  public set usePatternTexture(value: boolean) {
    if (this._objRef) {
      this._objRef.usePatternTexture = value;
    }
  }

  @Input()
  public set edgeThickness(value: number) {
    if (this._objRef) {
      this._objRef.edgeThickness = value;
    }
  }

  @Input()
  public set edgeStrength(value: number) {
    if (this._objRef) {
      this._objRef.edgeStrength = value;
    }
  }

  @Input()
  public set downSampleRatio(value: number) {
    if (this._objRef) {
      this._objRef.downSampleRatio = value;
    }
  }

  @Input()
  public set pulsePeriod(value: number) {
    if (this._objRef) {
      this._objRef.pulsePeriod = value;
    }
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
  @Input()
  public set patternTexture(value: Texture) {
    if (this._objRef) {
      this._objRef.patternTexture = value;
    }
  }

  @Input()
  public set maskBufferMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.maskBufferMaterial = value;
    }
  }

  @Input()
  public set renderTargetMaskBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetMaskBuffer = value;
    }
  }

  @Input()
  public set depthMaterial(value: MeshDepthMaterial) {
    if (this._objRef) {
      this._objRef.depthMaterial = value;
    }
  }

  @Input()
  public set prepareMaskMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.prepareMaskMaterial = value;
    }
  }

  @Input()
  public set renderTargetDepthBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetDepthBuffer = value;
    }
  }

  @Input()
  public set renderTargetMaskDownSampleBuffer(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetMaskDownSampleBuffer = value;
    }
  }

  @Input()
  public set renderTargetBlurBuffer1(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetBlurBuffer1 = value;
    }
  }

  @Input()
  public set renderTargetBlurBuffer2(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetBlurBuffer2 = value;
    }
  }

  @Input()
  public set edgeDetectionMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.edgeDetectionMaterial = value;
    }
  }

  @Input()
  public set renderTargetEdgeBuffer1(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetEdgeBuffer1 = value;
    }
  }

  @Input()
  public set renderTargetEdgeBuffer2(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetEdgeBuffer2 = value;
    }
  }

  @Input()
  public set separableBlurMaterial1(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.separableBlurMaterial1 = value;
    }
  }

  @Input()
  public set separableBlurMaterial2(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.separableBlurMaterial2 = value;
    }
  }

  @Input()
  public set overlayMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.overlayMaterial = value;
    }
  }

  @Input()
  public set copyUniforms(value: object) {
    if (this._objRef) {
      this._objRef.copyUniforms = value;
    }
  }

  @Input()
  public set materialCopy(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialCopy = value;
    }
  }

  @Input()
  public set oldClearColor(value: Color | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.oldClearColor = applyValue<Color>(
        this._objRef.oldClearColor,
        value
      );
    }
  }
  @Input()
  public set oldClearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.oldClearAlpha = value;
    }
  }

  @Input()
  public set fsQuad(value: object) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }

  @Input()
  public set tempPulseColor1(value: Color | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.tempPulseColor1 = applyValue<Color>(
        this._objRef.tempPulseColor1,
        value
      );
    }
  }
  @Input()
  public set tempPulseColor2(value: Color | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.tempPulseColor2 = applyValue<Color>(
        this._objRef.tempPulseColor2,
        value
      );
    }
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
          n44: number
        ]
  ) {
    if (this._objRef) {
      this._objRef.textureMatrix = applyValue<Matrix4>(
        this._objRef.textureMatrix,
        value
      );
    }
  }
}
