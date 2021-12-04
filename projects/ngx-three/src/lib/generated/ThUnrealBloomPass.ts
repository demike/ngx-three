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
  Color,
  ColorRepresentation,
  MeshBasicMaterial,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderTarget,
} from 'three';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-unrealBloomPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThUnrealBloomPass) },
  ],
})
export class ThUnrealBloomPass<
  T extends UnrealBloomPass = UnrealBloomPass,
  TARGS = [
    resolution: Vector2,
    strength: number,
    radius: number,
    threshold: number
  ]
> extends ThPass<T, TARGS> {
  public getType(): Type<UnrealBloomPass> {
    return UnrealBloomPass;
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
  public set strength(value: number) {
    if (this._objRef) {
      this._objRef.strength = value;
    }
  }

  @Input()
  public set radius(value: number) {
    if (this._objRef) {
      this._objRef.radius = value;
    }
  }

  @Input()
  public set threshold(value: number) {
    if (this._objRef) {
      this._objRef.threshold = value;
    }
  }

  @Input()
  public set clearColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.clearColor = applyValue<Color>(
        this._objRef.clearColor,
        value
      );
    }
  }
  @Input()
  public set renderTargetsHorizontal(value: WebGLRenderTarget[]) {
    if (this._objRef) {
      this._objRef.renderTargetsHorizontal = value;
    }
  }

  @Input()
  public set renderTargetsVertical(value: WebGLRenderTarget[]) {
    if (this._objRef) {
      this._objRef.renderTargetsVertical = value;
    }
  }

  @Input()
  public set nMips(value: number) {
    if (this._objRef) {
      this._objRef.nMips = value;
    }
  }

  @Input()
  public set renderTargetBright(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetBright = value;
    }
  }

  @Input()
  public set highPassUniforms(value: object) {
    if (this._objRef) {
      this._objRef.highPassUniforms = value;
    }
  }

  @Input()
  public set materialHighPassFilter(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialHighPassFilter = value;
    }
  }

  @Input()
  public set separableBlurMaterials(value: ShaderMaterial[]) {
    if (this._objRef) {
      this._objRef.separableBlurMaterials = value;
    }
  }

  @Input()
  public set compositeMaterial(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.compositeMaterial = value;
    }
  }

  @Input()
  public set bloomTintColors(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.bloomTintColors = value;
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
  public set basic(value: MeshBasicMaterial) {
    if (this._objRef) {
      this._objRef.basic = value;
    }
  }

  @Input()
  public set fsQuad(value: object) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
    }
  }
}
