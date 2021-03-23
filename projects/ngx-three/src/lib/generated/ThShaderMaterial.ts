/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { GLSLVersion, IUniform, ShaderMaterial, ShaderMaterialParameters } from 'three';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-shaderMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThMaterial, useExisting: forwardRef(() => ThShaderMaterial) }]
})
export class ThShaderMaterial<TARGS extends any[] = [parameters?: ShaderMaterialParameters]> extends ThMaterial<TARGS> {
  @Input()
  public objRef!: ShaderMaterial;
  protected getType(): Type<ShaderMaterial> {
    return ShaderMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set defines(value: { [key: string]: any }) {
    if (this.objRef) {
      this.objRef.defines = value;
    }
  }

  @Input()
  public set uniforms(value: { [uniform: string]: IUniform }) {
    if (this.objRef) {
      this.objRef.uniforms = value;
    }
  }

  @Input()
  public set vertexShader(value: string) {
    if (this.objRef) {
      this.objRef.vertexShader = value;
    }
  }

  @Input()
  public set fragmentShader(value: string) {
    if (this.objRef) {
      this.objRef.fragmentShader = value;
    }
  }

  @Input()
  public set linewidth(value: number) {
    if (this.objRef) {
      this.objRef.linewidth = value;
    }
  }

  @Input()
  public set wireframe(value: boolean) {
    if (this.objRef) {
      this.objRef.wireframe = value;
    }
  }

  @Input()
  public set wireframeLinewidth(value: number) {
    if (this.objRef) {
      this.objRef.wireframeLinewidth = value;
    }
  }

  @Input()
  public set fog(value: boolean) {
    if (this.objRef) {
      this.objRef.fog = value;
    }
  }

  @Input()
  public set lights(value: boolean) {
    if (this.objRef) {
      this.objRef.lights = value;
    }
  }

  @Input()
  public set clipping(value: boolean) {
    if (this.objRef) {
      this.objRef.clipping = value;
    }
  }

  @Input()
  public set skinning(value: boolean) {
    if (this.objRef) {
      this.objRef.skinning = value;
    }
  }

  @Input()
  public set morphTargets(value: boolean) {
    if (this.objRef) {
      this.objRef.morphTargets = value;
    }
  }

  @Input()
  public set morphNormals(value: boolean) {
    if (this.objRef) {
      this.objRef.morphNormals = value;
    }
  }

  @Input()
  public set derivatives(value: any) {
    if (this.objRef) {
      this.objRef.derivatives = value;
    }
  }

  @Input()
  public set extensions(value: { derivatives: boolean; fragDepth: boolean; drawBuffers: boolean; shaderTextureLOD: boolean }) {
    if (this.objRef) {
      this.objRef.extensions = value;
    }
  }

  @Input()
  public set defaultAttributeValues(value: any) {
    if (this.objRef) {
      this.objRef.defaultAttributeValues = value;
    }
  }

  @Input()
  public set index0AttributeName(value: string | undefined) {
    if (this.objRef) {
      this.objRef.index0AttributeName = value;
    }
  }

  @Input()
  public set uniformsNeedUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.uniformsNeedUpdate = value;
    }
  }

  @Input()
  public set glslVersion(value: GLSLVersion | null) {
    if (this.objRef) {
      this.objRef.glslVersion = value;
    }
  }
}
