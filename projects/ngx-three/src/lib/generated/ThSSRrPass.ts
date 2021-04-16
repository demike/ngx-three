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
  Material,
  Mesh,
  MeshBasicMaterial,
  MeshNormalMaterial,
  MeshStandardMaterial,
  Scene,
  ShaderMaterial,
  TextureEncoding,
  WebGLRenderer,
  WebGLRenderTarget,
} from 'three';
import { Pass } from 'three/examples/jsm/postprocessing/Pass';
import {
  SSRrPass,
  SSRrPassParams,
} from 'three/examples/jsm/postprocessing/SSRrPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sSRrPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSSRrPass) },
  ],
})
export class ThSSRrPass<
  T extends SSRrPass = SSRrPass,
  TARGS extends any[] = [params: SSRrPassParams]
> extends ThPass<T, TARGS> {
  protected getType(): Type<SSRrPass> {
    return SSRrPass;
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
  public set output(value: number) {
    if (this._objRef) {
      this._objRef.output = value;
    }
  }

  @Input()
  public set ior(value: number) {
    if (this._objRef) {
      this._objRef.ior = value;
    }
  }

  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
    }
  }

  @Input()
  public set surfDist(value: number) {
    if (this._objRef) {
      this._objRef.surfDist = value;
    }
  }

  @Input()
  public set encoding(value: TextureEncoding) {
    if (this._objRef) {
      this._objRef.encoding = value;
    }
  }

  @Input()
  public set color(value: Color | [color: Color | string | number]) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  @Input()
  public set seleects(value: Mesh[] | null) {
    if (this._objRef) {
      this._objRef.seleects = value;
    }
  }

  @Input()
  public set _specular(value: boolean) {
    if (this._objRef) {
      this._objRef._specular = value;
    }
  }

  @Input()
  public set _fillHole(value: boolean) {
    if (this._objRef) {
      this._objRef._fillHole = value;
    }
  }

  @Input()
  public set _infiniteThick(value: boolean) {
    if (this._objRef) {
      this._objRef._infiniteThick = value;
    }
  }

  @Input()
  public set beautyRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.beautyRenderTarget = value;
    }
  }

  @Input()
  public set specularRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.specularRenderTarget = value;
    }
  }

  @Input()
  public set normalSelectsRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.normalSelectsRenderTarget = value;
    }
  }

  @Input()
  public set refractiveRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.refractiveRenderTarget = value;
    }
  }

  @Input()
  public set ssrrRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.ssrrRenderTarget = value;
    }
  }

  @Input()
  public set ssrrMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.ssrrMaterial = value;
    }
  }

  @Input()
  public set normalMaterial(value: MeshNormalMaterial) {
    if (this._objRef) {
      this._objRef.normalMaterial = value;
    }
  }

  @Input()
  public set refractiveOnMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.refractiveOnMaterial = value;
    }
  }

  @Input()
  public set refractiveOffMaterial(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.refractiveOffMaterial = value;
    }
  }

  @Input()
  public set specularMaterial(value: MeshStandardMaterial) {
    if (this._objRef) {
      this._objRef.specularMaterial = value;
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
  public set fsQuad(value: Pass.FullScreenQuad) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }

  @Input()
  public set originalClearColor(
    value: Color | [color: Color | string | number]
  ) {
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
  public set render(
    value: (renderer: WebGLRenderer, writeBuffer: WebGLRenderTarget) => void
  ) {
    if (this._objRef) {
      this._objRef.render = value;
    }
  }

  @Input()
  public set renderPass(
    value: (
      renderer: WebGLRenderer,
      passMaterial: Material,
      renderTarget: WebGLRenderTarget,
      clearColor: Color | string | number,
      clearAlpha: Color | string | number
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
      clearColor: Color | string | number,
      clearAlpha: Color | string | number
    ) => void
  ) {
    if (this._objRef) {
      this._objRef.renderOverride = value;
    }
  }

  @Input()
  public set renderRefractive(
    value: (
      renderer: WebGLRenderer,
      passMaterial: Material,
      renderTarget: WebGLRenderTarget,
      clearColor: Color | string | number,
      clearAlpha: Color | string | number
    ) => void
  ) {
    if (this._objRef) {
      this._objRef.renderRefractive = value;
    }
  }

  @Input()
  public set setSize(value: (width: number, height: number) => void) {
    if (this._objRef) {
      this._objRef.setSize = value;
    }
  }
}
