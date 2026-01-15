/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import { ShaderMaterial, ShaderMaterialParameters } from 'three';
import { GLSLVersion } from 'three/src/constants.js';
import { UniformsGroup } from 'three/src/core/UniformsGroup.js';
import { IUniform } from 'three/src/renderers/shaders/UniformsLib.js';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-shaderMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThShaderMaterial) },
  ],
})
export class ThShaderMaterial<
  T extends ShaderMaterial = ShaderMaterial,
  TARGS = /* parameters? */ ShaderMaterialParameters,
> extends ThMaterial<T, TARGS> {
  public getType(): Type<ShaderMaterial> {
    return ShaderMaterial;
  }

  public get isShaderMaterial(): boolean | undefined {
    return this._objRef?.isShaderMaterial;
  }
  @Input()
  public set defines(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.defines = value;
    }
  }

  public get defines(): { [key: string]: any } | undefined {
    return this._objRef?.defines;
  }
  @Input()
  public set uniforms(value: { [uniform: string]: IUniform }) {
    if (this._objRef) {
      this._objRef.uniforms = value;
    }
  }

  public get uniforms(): { [uniform: string]: IUniform } | undefined {
    return this._objRef?.uniforms;
  }
  @Input()
  public set uniformsGroups(value: Array<UniformsGroup>) {
    if (this._objRef) {
      this._objRef.uniformsGroups = value;
    }
  }

  public get uniformsGroups(): Array<UniformsGroup> | undefined {
    return this._objRef?.uniformsGroups;
  }
  @Input()
  public set vertexShader(value: string) {
    if (this._objRef) {
      this._objRef.vertexShader = value;
    }
  }

  public get vertexShader(): string | undefined {
    return this._objRef?.vertexShader;
  }
  @Input()
  public set fragmentShader(value: string) {
    if (this._objRef) {
      this._objRef.fragmentShader = value;
    }
  }

  public get fragmentShader(): string | undefined {
    return this._objRef?.fragmentShader;
  }
  @Input()
  public set linewidth(value: number) {
    if (this._objRef) {
      this._objRef.linewidth = value;
    }
  }

  public get linewidth(): number | undefined {
    return this._objRef?.linewidth;
  }
  @Input()
  public set wireframe(value: boolean) {
    if (this._objRef) {
      this._objRef.wireframe = value;
    }
  }

  public get wireframe(): boolean | undefined {
    return this._objRef?.wireframe;
  }
  @Input()
  public set wireframeLinewidth(value: number) {
    if (this._objRef) {
      this._objRef.wireframeLinewidth = value;
    }
  }

  public get wireframeLinewidth(): number | undefined {
    return this._objRef?.wireframeLinewidth;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
  @Input()
  public set lights(value: boolean) {
    if (this._objRef) {
      this._objRef.lights = value;
    }
  }

  public get lights(): boolean | undefined {
    return this._objRef?.lights;
  }
  @Input()
  public set clipping(value: boolean) {
    if (this._objRef) {
      this._objRef.clipping = value;
    }
  }

  public get clipping(): boolean | undefined {
    return this._objRef?.clipping;
  }
  @Input()
  public set extensions(value: {
    clipCullDistance: boolean;
    multiDraw: boolean;
  }) {
    if (this._objRef) {
      this._objRef.extensions = value;
    }
  }

  public get extensions():
    | {
        clipCullDistance: boolean;
        multiDraw: boolean;
      }
    | undefined {
    return this._objRef?.extensions;
  }
  @Input()
  public set defaultAttributeValues(value: {
    color: [number, number, number];
    uv: [number, number];
    uv1: [number, number];
  }) {
    if (this._objRef) {
      this._objRef.defaultAttributeValues = value;
    }
  }

  public get defaultAttributeValues():
    | {
        color: [number, number, number];
        uv: [number, number];
        uv1: [number, number];
      }
    | undefined {
    return this._objRef?.defaultAttributeValues;
  }
  @Input()
  public set index0AttributeName(value: string | undefined) {
    if (this._objRef) {
      this._objRef.index0AttributeName = value;
    }
  }

  public get index0AttributeName(): (string | undefined) | undefined {
    return this._objRef?.index0AttributeName;
  }
  @Input()
  public set uniformsNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.uniformsNeedUpdate = value;
    }
  }

  public get uniformsNeedUpdate(): boolean | undefined {
    return this._objRef?.uniformsNeedUpdate;
  }
  @Input()
  public set glslVersion(value: GLSLVersion | null) {
    if (this._objRef) {
      this._objRef.glslVersion = value;
    }
  }

  public get glslVersion(): (GLSLVersion | null) | undefined {
    return this._objRef?.glslVersion;
  }
}
