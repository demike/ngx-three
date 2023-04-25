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
import { ShaderMaterial, Texture, WebGLRenderTarget } from 'three';
import { FullScreenQuad } from 'three/examples/jsm/postprocessing/Pass';
import { SMAAPass } from 'three/examples/jsm/postprocessing/SMAAPass';
import { ThPassBase } from '../ThPassBase';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sMAAPass',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSMAAPass) },
  ],
})
export class ThSMAAPass<
  T extends SMAAPass = SMAAPass,
  TARGS = [width: number, height: number]
> extends ThPass<T, TARGS> {
  public getType(): Type<SMAAPass> {
    return SMAAPass;
  }

  @Input()
  public set edgesRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.edgesRT = value;
    }
  }

  @Input()
  public set weightsRT(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.weightsRT = value;
    }
  }

  @Input()
  public set areaTexture(value: Texture) {
    if (this._objRef) {
      this._objRef.areaTexture = value;
    }
  }

  @Input()
  public set searchTexture(value: Texture) {
    if (this._objRef) {
      this._objRef.searchTexture = value;
    }
  }

  @Input()
  public set uniformsEdges(value: object) {
    if (this._objRef) {
      this._objRef.uniformsEdges = value;
    }
  }

  @Input()
  public set materialEdges(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialEdges = value;
    }
  }

  @Input()
  public set uniformsWeights(value: object) {
    if (this._objRef) {
      this._objRef.uniformsWeights = value;
    }
  }

  @Input()
  public set materialWeights(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialWeights = value;
    }
  }

  @Input()
  public set uniformsBlend(value: object) {
    if (this._objRef) {
      this._objRef.uniformsBlend = value;
    }
  }

  @Input()
  public set materialBlend(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialBlend = value;
    }
  }

  @Input()
  public set fsQuad(value: FullScreenQuad) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }
}
