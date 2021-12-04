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
  Scene,
  ShaderMaterial,
  WebGLRenderTarget,
} from 'three';
import {
  BokehPass,
  BokehPassParamters,
} from 'three/examples/jsm/postprocessing/BokehPass';
import { ThPassBase } from '../ThPassBase';
import { applyValue } from '../util';
import { ThPass } from './ThPass';

@Component({
  selector: 'th-bokehPass',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThPassBase, useExisting: forwardRef(() => ThBokehPass) },
  ],
})
export class ThBokehPass<
  T extends BokehPass = BokehPass,
  TARGS = [scene: Scene, camera: Camera, params: BokehPassParamters]
> extends ThPass<T, TARGS> {
  public getType(): Type<BokehPass> {
    return BokehPass;
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
  public set renderTargetColor(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetColor = value;
    }
  }

  @Input()
  public set renderTargetDepth(value: WebGLRenderTarget) {
    if (this._objRef) {
      this._objRef.renderTargetDepth = value;
    }
  }

  @Input()
  public set materialDepth(value: MeshDepthMaterial) {
    if (this._objRef) {
      this._objRef.materialDepth = value;
    }
  }

  @Input()
  public set materialBokeh(value: ShaderMaterial) {
    if (this._objRef) {
      this._objRef.materialBokeh = value;
    }
  }

  @Input()
  public set uniforms(map: { [name: string]: { value: any } }) {
    if (this._objRef) {
      Object.assign(this._objRef.uniforms, map);
    }
  }

  @Input()
  public set fsQuad(value: object) {
    if (this._objRef) {
      this._objRef.fsQuad = value;
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
}
