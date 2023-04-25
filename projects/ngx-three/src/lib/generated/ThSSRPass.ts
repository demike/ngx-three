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

  @Input()
  public set height(value: number) {
    if (this._objRef) {
      this._objRef.height = value;
    }
  }

  @Input()
  public set clear(value: boolean) {
    if (this._objRef) {
      this._objRef.clear = value;
    }
  }

  @Input()
  public set renderer(value: WebGLRenderer) {
    if (this._objRef) {
      this._objRef.renderer = value;
    }
  }

  @Input()
  public set scene(value: Scene) {
    if (this._objRef) {
      this._objRef.scene = value;
    }
  }

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  @Input()
  public set groundReflector(value: ReflectorForSSRPass | null) {
    if (this._objRef) {
      this._objRef.groundReflector = value;
    }
  }

  @Input()
  public set opacity(value: number) {
    if (this._objRef) {
      this._objRef.opacity = value;
    }
  }

  @Input()
  public set output(value: number) {
    if (this._objRef) {
      this._objRef.output = value;
    }
  }

  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
    }
  }

  @Input()
  public set thickness(value: number) {
    if (this._objRef) {
      this._objRef.thickness = value;
    }
  }

  @Input()
  public set tempColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.tempColor = applyValue<Color>(this._objRef.tempColor, value);
    }
  }
  @Input()
  public set selective(value: boolean) {
    if (this._objRef) {
      this._objRef.selective = value;
    }
  }

  @Input()
  public set blur(value: boolean) {
    if (this._objRef) {
      this._objRef.blur = value;
    }
  }

  @Input()
  public set thickTolerance(value: number) {
    if (this._objRef) {
      this._objRef.thickTolerance = value;
    }
  }

  @Input()
  public set beautyRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.beautyRenderTarget = value;
    }
  }

  @Input()
  public set prevRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.prevRenderTarget = value;
    }
  }

  @Input()
  public set normalRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.normalRenderTarget = value;
    }
  }

  @Input()
  public set metalnessRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.metalnessRenderTarget = value;
    }
  }

  @Input()
  public set ssrRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.ssrRenderTarget = value;
    }
  }

  @Input()
  public set blurRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.blurRenderTarget = value;
    }
  }

  @Input()
  public set blurRenderTarget2(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.blurRenderTarget2 = value;
    }
  }

  @Input()
  public set ssrMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.ssrMaterial = value;
    }
  }

  @Input()
  public set normalMaterial(value: MeshNormalMaterial) {
    if (this._objRef) {
      this._objRef.normalMaterial = value;
    }
  }

  @Input()
  public set metalnessOnMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.metalnessOnMaterial = value;
    }
  }

  @Input()
  public set metalnessOffMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.metalnessOffMaterial = value;
    }
  }

  @Input()
  public set blurMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.blurMaterial = value;
    }
  }

  @Input()
  public set blurMaterial2(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.blurMaterial2 = value;
    }
  }

  @Input()
  public set depthRenderMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.depthRenderMaterial = value;
    }
  }

  @Input()
  public set copyMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.copyMaterial = value;
    }
  }

  @Input()
  public set fsQuad(value: FullScreenQuad) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
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
  @Input()
  public set dispose(value: () => void) {
    if (this._objRef) {
      this._objRef.dispose = value;
    }
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
}
