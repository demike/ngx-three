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
  DataTexture,
  MeshNormalMaterial,
  Scene,
  ShaderMaterial,
  Vector3,
  WebGLRenderTarget,
} from 'three';
import {
  SSAOPass,
  SSAOPassOUTPUT,
} from 'three/examples/jsm/postprocessing/SSAOPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sSAOPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSSAOPass) },
  ],
})
export class ThSSAOPass<
  T extends SSAOPass = SSAOPass,
  TARGS extends any[] = [
    scene: Scene,
    camera: Camera,
    width?: number,
    height?: number
  ]
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

  @Input()
  public set camera(value: Camera) {
    if (this._objRef) {
      this._objRef.camera = value;
    }
  }

  @Input()
  public set width(value: number) {
    if (this._objRef) {
      this._objRef.width = value;
    }
  }

  @Input()
  public set height(value: boolean) {
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
  public set kernelRadius(value: number) {
    if (this._objRef) {
      this._objRef.kernelRadius = value;
    }
  }

  @Input()
  public set kernelSize(value: number) {
    if (this._objRef) {
      this._objRef.kernelSize = value;
    }
  }

  @Input()
  public set kernel(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.kernel = value;
    }
  }

  @Input()
  public set noiseTexture(value: DataTexture) {
    if (this._objRef) {
      this._objRef.noiseTexture = value;
    }
  }

  @Input()
  public set output(value: SSAOPassOUTPUT) {
    if (this._objRef) {
      this._objRef.output = value;
    }
  }

  @Input()
  public set minDistance(value: number) {
    if (this._objRef) {
      this._objRef.minDistance = value;
    }
  }

  @Input()
  public set maxDistance(value: number) {
    if (this._objRef) {
      this._objRef.maxDistance = value;
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
  public set ssaoRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.ssaoRenderTarget = value;
    }
  }

  @Input()
  public set blurRenderTarget(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.blurRenderTarget = value;
    }
  }

  @Input()
  public set ssaoMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.ssaoMaterial = value;
    }
  }

  @Input()
  public set normalMaterial(value: MeshNormalMaterial) {
    if (this._objRef) {
      this._objRef.normalMaterial = value;
    }
  }

  @Input()
  public set blurMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.blurMaterial = value;
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
  public set fsQuad(value: object) {
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
}
