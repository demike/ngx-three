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
import { Camera, Color, Scene, ShaderMaterial, WebGLRenderTarget } from 'three';
import { SSAARenderPass } from 'three/examples/jsm/postprocessing/SSAARenderPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-sSAARenderPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThSSAARenderPass) },
  ],
})
export class ThSSAARenderPass<
  T extends SSAARenderPass = SSAARenderPass,
  TARGS extends any[] = [
    scene: Scene,
    camera: Camera,
    clearColor: Color | string | number,
    clearAlpha: number
  ]
> extends ThPass<T, TARGS> {
  protected getType(): Type<SSAARenderPass> {
    return SSAARenderPass;
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
  public set sampleLevel(value: number) {
    if (this._objRef) {
      this._objRef.sampleLevel = value;
    }
  }

  @Input()
  public set unbiased(value: boolean) {
    if (this._objRef) {
      this._objRef.unbiased = value;
    }
  }

  @Input()
  public set clearColor(
    value: Color | string | number | [color: Color | string | number]
  ) {
    if (this._objRef) {
      this._objRef.clearColor = applyValue<Color | string | number>(
        this._objRef.clearColor,
        value
      );
    }
  }
  @Input()
  public set clearAlpha(value: number) {
    if (this._objRef) {
      this._objRef.clearAlpha = value;
    }
  }

  @Input()
  public set copyUniforms(value: object) {
    if (this._objRef) {
      this._objRef.copyUniforms = value;
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
  public set sampleRenderTarget(value: undefined | WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.sampleRenderTarget = value;
    }
  }
}
