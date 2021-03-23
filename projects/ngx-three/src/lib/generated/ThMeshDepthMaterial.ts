/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { DepthPackingStrategies, MeshDepthMaterial, MeshDepthMaterialParameters, Texture } from 'three';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshDepthMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThMaterial, useExisting: forwardRef(() => ThMeshDepthMaterial) }]
})
export class ThMeshDepthMaterial<TARGS extends any[] = [parameters?: MeshDepthMaterialParameters]> extends ThMaterial<TARGS> {
  @Input()
  public objRef!: MeshDepthMaterial;
  protected getType(): Type<MeshDepthMaterial> {
    return MeshDepthMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set map(value: Texture | null) {
    if (this.objRef) {
      this.objRef.map = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.alphaMap = value;
    }
  }

  @Input()
  public set depthPacking(value: DepthPackingStrategies) {
    if (this.objRef) {
      this.objRef.depthPacking = value;
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
  public set fog(value: boolean) {
    if (this.objRef) {
      this.objRef.fog = value;
    }
  }
}
