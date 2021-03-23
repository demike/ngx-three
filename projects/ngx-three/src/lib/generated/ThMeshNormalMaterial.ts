/* eslint-disable @typescript-eslint/naming-convention */
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
  public objRef!: MeshNormalMaterial;
  protected getType(): Type<MeshNormalMaterial> {
    return MeshNormalMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set bumpMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.bumpMap = value;
    }
  }

  @Input()
  public set bumpScale(value: number) {
    if (this.objRef) {
      this.objRef.bumpScale = value;
    }
  }

  @Input()
  public set normalMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.normalMap = value;
    }
  }

  @Input()
  public set normalMapType(value: NormalMapTypes) {
    if (this.objRef) {
      this.objRef.normalMapType = value;
    }
  }

  @Input()
  public set normalScale(value: Vector2 | [x: number, y: number]) {
    if (this.objRef) {
      this.objRef.normalScale = applyValue<Vector2>(this.objRef.normalScale, value);
    }
  }
  @Input()
  public set displacementMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.displacementMap = value;
    }
  }

  @Input()
  public set displacementScale(value: number) {
    if (this.objRef) {
      this.objRef.displacementScale = value;
    }
  }

  @Input()
  public set displacementBias(value: number) {
    if (this.objRef) {
      this.objRef.displacementBias = value;
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
}
