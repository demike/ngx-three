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
  DataTexture,
  MeshNormalMaterial,
  Scene,
  ShaderMaterial,
  WebGLRenderTarget,
} from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass.js';
import {
  SSAOPass,
  SSAOPassOUTPUT,
} from 'three/examples/jsm/postprocessing/SSAOPass.js';
import { Vector3 } from 'three/src/math/Vector3.js';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sSAOPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSSAOPass) },
  ],
})
export class ThSSAOPass<
  T extends SSAOPass = SSAOPass,
  TARGS = [
    scene: Scene,
    camera: Camera,
    width?: number,
    height?: number,
    kernelSize?: number,
  ],
> extends ThPass<T, TARGS> {
  public getType(): Type<SSAOPass> {
    return SSAOPass;
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
  public set kernelRadius(value: number) {
    if (this._objRef) {
      this._objRef.kernelRadius = value;
    }
  }

  public get kernelRadius(): number | undefined {
    return this._objRef?.kernelRadius;
  }
  @Input()
  public set kernel(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.kernel = value;
    }
  }

  public get kernel(): Vector3[] | undefined {
    return this._objRef?.kernel;
  }
  @Input()
  public set noiseTexture(value: DataTexture) {
    if (this._objRef) {
      this._objRef.noiseTexture = value;
    }
  }

  public get noiseTexture(): DataTexture | undefined {
    return this._objRef?.noiseTexture;
  }
  @Input()
  public set output(value: SSAOPassOUTPUT) {
    if (this._objRef) {
      this._objRef.output = value;
    }
  }

  public get output(): SSAOPassOUTPUT | undefined {
    return this._objRef?.output;
  }
  @Input()
  public set minDistance(value: number) {
    if (this._objRef) {
      this._objRef.minDistance = value;
    }
  }

  public get minDistance(): number | undefined {
    return this._objRef?.minDistance;
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
  public set normalRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.normalRenderTarget = value;
    }
  }

  public get normalRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.normalRenderTarget;
  }
  @Input()
  public set ssaoRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.ssaoRenderTarget = value;
    }
  }

  public get ssaoRenderTarget(): WebGLRenderTarget | undefined {
    return this._objRef?.ssaoRenderTarget;
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
  public set ssaoMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.ssaoMaterial = value;
    }
  }

  public get ssaoMaterial(): ShaderMaterial | undefined {
    return this._objRef?.ssaoMaterial;
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
  public set blurMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.blurMaterial = value;
    }
  }

  public get blurMaterial(): ShaderMaterial | undefined {
    return this._objRef?.blurMaterial;
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

  public static readonly OUTPUT = SSAOPass.OUTPUT;
}
