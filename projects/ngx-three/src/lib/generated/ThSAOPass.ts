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
  MeshDepthMaterial,
  MeshNormalMaterial,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderTarget,
} from 'three';
import {
  SAOPass,
  SAOPassParams,
} from 'three/examples/jsm/postprocessing/SAOPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sAOPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSAOPass) },
  ],
})
export class ThSAOPass<
  T extends SAOPass = SAOPass,
  TARGS = [
    scene: Scene,
    camera: Camera,
    depthTexture?: boolean,
    useNormals?: boolean,
    resolution?: Vector2
  ]
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

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  @Input()
  public set supportsDepthTextureExtension(value: boolean) {
    if (this._objRef) {
      this._objRef.supportsDepthTextureExtension = value;
    }
  }

  @Input()
  public set supportsNormalTexture(value: boolean) {
    if (this._objRef) {
      this._objRef.supportsNormalTexture = value;
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
  public set oldClearColor(value: Color | [color: ColorRepresentation]) {
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
  public set resolution(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.resolution = applyValue<Vector2>(
        this._objRef.resolution,
        value
      );
    }
  }
  @Input()
  public set saoRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.saoRenderTarget = value;
    }
  }

  @Input()
  public set blurIntermediateRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.blurIntermediateRenderTarget = value;
    }
  }

  @Input()
  public set beautyRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.beautyRenderTarget = value;
    }
  }

  @Input()
  public set normalRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.normalRenderTarget = value;
    }
  }

  @Input()
  public set depthRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.depthRenderTarget = value;
    }
  }

  @Input()
  public set depthMaterial(value: MeshDepthMaterial) {
    if (this._objRef) {
      this._objRef.depthMaterial = value;
    }
  }

  @Input()
  public set normalMaterial(value: MeshNormalMaterial) {
    if (this._objRef) {
      this._objRef.normalMaterial = value;
    }
  }

  @Input()
  public set saoMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.saoMaterial = value;
    }
  }

  @Input()
  public set vBlurMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.vBlurMaterial = value;
    }
  }

  @Input()
  public set hBlurMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.hBlurMaterial = value;
    }
  }

  @Input()
  public set materialCopy(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialCopy = value;
    }
  }

  @Input()
  public set depthCopy(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.depthCopy = value;
    }
  }

  @Input()
  public set fsQuad(value: object) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }

  @Input()
  public set params(value: SAOPassParams) {
    if (this._objRef) {
      this._objRef.params = value;
    }
  }
}
