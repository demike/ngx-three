/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { MeshNormalMaterial, MeshNormalMaterialParameters, NormalMapTypes, Texture, Vector2 } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshNormalMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshNormalMaterial)
    }
  ]
})
export class ThMeshNormalMaterial<TARGS extends any[] = [parameters?: MeshNormalMaterialParameters]> extends ThMaterial<TARGS> {
  @Input()
  public obj!: MeshNormalMaterial;
  protected getType(): Type<MeshNormalMaterial> {
    return MeshNormalMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
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
}
