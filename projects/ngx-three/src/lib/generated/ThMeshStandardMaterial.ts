// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  Color,
  MeshStandardMaterial,
  MeshStandardMaterialParameters,
  NormalMapTypes,
  Texture,
  Vector2,
} from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshStandardMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshStandardMaterial),
    },
  ],
})
export class ThMeshStandardMaterial<
  TARGS extends any[] = [parameters?: MeshStandardMaterialParameters]
> extends ThMaterial<TARGS> {
  @Input()
  public obj!: MeshStandardMaterial;
  protected getType(): Type<MeshStandardMaterial> {
    return MeshStandardMaterial;
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
  public set color(value: Color | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.color = applyValue<Color>(this.obj.color, value);
    }
  }
  @Input()
  public set roughness(value: number) {
    if (this.obj) {
      this.obj.roughness = value;
    }
  }

  @Input()
  public set metalness(value: number) {
    if (this.obj) {
      this.obj.metalness = value;
    }
  }

  @Input()
  public set map(value: Texture | null) {
    if (this.obj) {
      this.obj.map = value;
    }
  }

  @Input()
  public set lightMap(value: Texture | null) {
    if (this.obj) {
      this.obj.lightMap = value;
    }
  }

  @Input()
  public set lightMapIntensity(value: number) {
    if (this.obj) {
      this.obj.lightMapIntensity = value;
    }
  }

  @Input()
  public set aoMap(value: Texture | null) {
    if (this.obj) {
      this.obj.aoMap = value;
    }
  }

  @Input()
  public set aoMapIntensity(value: number) {
    if (this.obj) {
      this.obj.aoMapIntensity = value;
    }
  }

  @Input()
  public set emissive(value: Color | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.emissive = applyValue<Color>(this.obj.emissive, value);
    }
  }
  @Input()
  public set emissiveIntensity(value: number) {
    if (this.obj) {
      this.obj.emissiveIntensity = value;
    }
  }

  @Input()
  public set emissiveMap(value: Texture | null) {
    if (this.obj) {
      this.obj.emissiveMap = value;
    }
  }

  @Input()
  public set bumpMap(value: Texture | null) {
    if (this.obj) {
      this.obj.bumpMap = value;
    }
  }

  @Input()
  public set bumpScale(value: number) {
    if (this.obj) {
      this.obj.bumpScale = value;
    }
  }

  @Input()
  public set normalMap(value: Texture | null) {
    if (this.obj) {
      this.obj.normalMap = value;
    }
  }

  @Input()
  public set normalMapType(value: NormalMapTypes) {
    if (this.obj) {
      this.obj.normalMapType = value;
    }
  }

  @Input()
  public set normalScale(value: Vector2 | [x: number, y: number]) {
    if (this.obj) {
      this.obj.normalScale = applyValue<Vector2>(this.obj.normalScale, value);
    }
  }
  @Input()
  public set displacementMap(value: Texture | null) {
    if (this.obj) {
      this.obj.displacementMap = value;
    }
  }

  @Input()
  public set displacementScale(value: number) {
    if (this.obj) {
      this.obj.displacementScale = value;
    }
  }

  @Input()
  public set displacementBias(value: number) {
    if (this.obj) {
      this.obj.displacementBias = value;
    }
  }

  @Input()
  public set roughnessMap(value: Texture | null) {
    if (this.obj) {
      this.obj.roughnessMap = value;
    }
  }

  @Input()
  public set metalnessMap(value: Texture | null) {
    if (this.obj) {
      this.obj.metalnessMap = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this.obj) {
      this.obj.alphaMap = value;
    }
  }

  @Input()
  public set envMap(value: Texture | null) {
    if (this.obj) {
      this.obj.envMap = value;
    }
  }

  @Input()
  public set envMapIntensity(value: number) {
    if (this.obj) {
      this.obj.envMapIntensity = value;
    }
  }

  @Input()
  public set refractionRatio(value: number) {
    if (this.obj) {
      this.obj.refractionRatio = value;
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
  public set wireframeLinecap(value: string) {
    if (this.obj) {
      this.obj.wireframeLinecap = value;
    }
  }

  @Input()
  public set wireframeLinejoin(value: string) {
    if (this.obj) {
      this.obj.wireframeLinejoin = value;
    }
  }

  @Input()
  public set skinning(value: boolean) {
    if (this.obj) {
      this.obj.skinning = value;
    }
  }

  @Input()
  public set vertexTangents(value: boolean) {
    if (this.obj) {
      this.obj.vertexTangents = value;
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
}
