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
  GLSLVersion,
  IUniform,
  ShaderMaterial,
  ShaderMaterialParameters,
} from 'three';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-shaderMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThShaderMaterial) },
  ],
})
export class ThShaderMaterial<
  T extends ShaderMaterial = ShaderMaterial,
  TARGS extends any[] = [parameters?: ShaderMaterialParameters]
> extends ThMaterial<T, TARGS> {
  public getType(): Type<ShaderMaterial> {
    return ShaderMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set defines(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.defines = value;
    }
  }

  @Input()
  public set uniforms(value: { [uniform: string]: IUniform }) {
    if (this._objRef) {
      this._objRef.uniforms = value;
    }
  }

  @Input()
  public set vertexShader(value: string) {
    if (this._objRef) {
      this._objRef.vertexShader = value;
    }
  }

  @Input()
  public set fragmentShader(value: string) {
    if (this._objRef) {
      this._objRef.fragmentShader = value;
    }
  }

  @Input()
  public set linewidth(value: number) {
    if (this._objRef) {
      this._objRef.linewidth = value;
    }
  }

  @Input()
  public set wireframe(value: boolean) {
    if (this._objRef) {
      this._objRef.wireframe = value;
    }
  }

  @Input()
  public set wireframeLinewidth(value: number) {
    if (this._objRef) {
      this._objRef.wireframeLinewidth = value;
    }
  }

  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  @Input()
  public set lights(value: boolean) {
    if (this._objRef) {
      this._objRef.lights = value;
    }
  }

  @Input()
  public set clipping(value: boolean) {
    if (this._objRef) {
      this._objRef.clipping = value;
    }
  }

  @Input()
  public set derivatives(value: any) {
    if (this._objRef) {
      this._objRef.derivatives = value;
    }
  }

  @Input()
  public set extensions(value: {
    derivatives: boolean;
    fragDepth: boolean;
    drawBuffers: boolean;
    shaderTextureLOD: boolean;
  }) {
    if (this._objRef) {
      this._objRef.extensions = value;
    }
  }

  @Input()
  public set defaultAttributeValues(value: any) {
    if (this._objRef) {
      this._objRef.defaultAttributeValues = value;
    }
  }

  @Input()
  public set index0AttributeName(value: string | undefined) {
    if (this._objRef) {
      this._objRef.index0AttributeName = value;
    }
  }

  @Input()
  public set uniformsNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.uniformsNeedUpdate = value;
    }
  }

  @Input()
  public set glslVersion(value: GLSLVersion | null) {
    if (this._objRef) {
      this._objRef.glslVersion = value;
    }
  }

  @Input()
  public set isShaderMaterial(value: boolean) {
    if (this._objRef) {
      this._objRef.isShaderMaterial = value;
    }
  }
}
