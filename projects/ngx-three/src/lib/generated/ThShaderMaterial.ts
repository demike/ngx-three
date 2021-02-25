// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
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
  TARGS extends any[] = [parameters?: ShaderMaterialParameters]
> extends ThMaterial<TARGS> {
  @Input()
  public obj!: ShaderMaterial;
  protected getType(): Type<ShaderMaterial> {
    return ShaderMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set defines(value: { [key: string]: any }) {
    if (this.obj) {
      this.obj.defines = value;
    }
  }

  @Input()
  public set uniforms(value: { [uniform: string]: IUniform }) {
    if (this.obj) {
      this.obj.uniforms = value;
    }
  }

  @Input()
  public set vertexShader(value: string) {
    if (this.obj) {
      this.obj.vertexShader = value;
    }
  }

  @Input()
  public set fragmentShader(value: string) {
    if (this.obj) {
      this.obj.fragmentShader = value;
    }
  }

  @Input()
  public set linewidth(value: number) {
    if (this.obj) {
      this.obj.linewidth = value;
    }
  }

  @Input()
  public set wireframe(value: boolean) {
    if (this.obj) {
      this.obj.wireframe = value;
    }
  }

  @Input()
  public set wireframeLinewidth(value: number) {
    if (this.obj) {
      this.obj.wireframeLinewidth = value;
    }
  }

  @Input()
  public set fog(value: boolean) {
    if (this.obj) {
      this.obj.fog = value;
    }
  }

  @Input()
  public set lights(value: boolean) {
    if (this.obj) {
      this.obj.lights = value;
    }
  }

  @Input()
  public set clipping(value: boolean) {
    if (this.obj) {
      this.obj.clipping = value;
    }
  }

  @Input()
  public set skinning(value: boolean) {
    if (this.obj) {
      this.obj.skinning = value;
    }
  }

  @Input()
  public set morphTargets(value: boolean) {
    if (this.obj) {
      this.obj.morphTargets = value;
    }
  }

  @Input()
  public set morphNormals(value: boolean) {
    if (this.obj) {
      this.obj.morphNormals = value;
    }
  }

  @Input()
  public set derivatives(value: any) {
    if (this.obj) {
      this.obj.derivatives = value;
    }
  }

  @Input()
  public set extensions(value: {
    derivatives: boolean;
    fragDepth: boolean;
    drawBuffers: boolean;
    shaderTextureLOD: boolean;
  }) {
    if (this.obj) {
      this.obj.extensions = value;
    }
  }

  @Input()
  public set defaultAttributeValues(value: any) {
    if (this.obj) {
      this.obj.defaultAttributeValues = value;
    }
  }

  @Input()
  public set index0AttributeName(value: string | undefined) {
    if (this.obj) {
      this.obj.index0AttributeName = value;
    }
  }

  @Input()
  public set uniformsNeedUpdate(value: boolean) {
    if (this.obj) {
      this.obj.uniformsNeedUpdate = value;
    }
  }

  @Input()
  public set glslVersion(value: GLSLVersion | null) {
    if (this.obj) {
      this.obj.glslVersion = value;
    }
  }
}
