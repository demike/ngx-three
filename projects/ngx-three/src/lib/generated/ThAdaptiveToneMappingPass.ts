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
import { ShaderMaterial, WebGLRenderTarget } from 'three';
import { AdaptiveToneMappingPass } from 'three/examples/jsm/postprocessing/AdaptiveToneMappingPass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-adaptiveToneMappingPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThPassBase,
      useExisting: forwardRef(() => ThAdaptiveToneMappingPass),
    },
  ],
})
export class ThAdaptiveToneMappingPass<
  T extends AdaptiveToneMappingPass = AdaptiveToneMappingPass,
  TARGS extends any[] = [adaptive?: boolean, resolution?: number]
> extends ThPass<T, TARGS> {
  protected getType(): Type<AdaptiveToneMappingPass> {
    return AdaptiveToneMappingPass;
  }

  @Input()
  public set adaptive(value: boolean) {
    if (this._objRef) {
      this._objRef.adaptive = value;
    }
  }

  @Input()
  public set resolution(value: number) {
    if (this._objRef) {
      this._objRef.resolution = value;
    }
  }

  @Input()
  public set needsInit(value: number) {
    if (this._objRef) {
      this._objRef.needsInit = value;
    }
  }

  @Input()
  public set luminanceRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.luminanceRT = value;
    }
  }

  @Input()
  public set previousLuminanceRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.previousLuminanceRT = value;
    }
  }

  @Input()
  public set currentLuminanceRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.currentLuminanceRT = value;
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
  public set materialLuminance(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialLuminance = value;
    }
  }

  @Input()
  public set adaptLuminanceShader(value: object) {
    if (this._objRef) {
      this._objRef.adaptLuminanceShader = value;
    }
  }

  @Input()
  public set materialAdaptiveLum(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialAdaptiveLum = value;
    }
  }

  @Input()
  public set materialToneMap(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialToneMap = value;
    }
  }

  @Input()
  public set fsQuad(value: object) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }
}
