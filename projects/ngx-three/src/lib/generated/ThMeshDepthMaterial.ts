// tslint:disable: component-selector component-class-suffix no-redundant-jsdoc deprecation
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  DepthPackingStrategies,
  MeshDepthMaterial,
  MeshDepthMaterialParameters,
  Texture,
} from 'three';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshDepthMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThMeshDepthMaterial) },
  ],
})
export class ThMeshDepthMaterial<
  TARGS extends any[] = [parameters?: MeshDepthMaterialParameters]
> extends ThMaterial<TARGS> {
  @Input()
  public obj!: MeshDepthMaterial;
  protected getType(): Type<MeshDepthMaterial> {
    return MeshDepthMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set map(value: Texture | null) {
    if (this.obj) {
      this.obj.map = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this.obj) {
      this.obj.alphaMap = value;
    }
  }

  @Input()
  public set depthPacking(value: DepthPackingStrategies) {
    if (this.obj) {
      this.obj.depthPacking = value;
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
  public set fog(value: boolean) {
    if (this.obj) {
      this.obj.fog = value;
    }
  }
}
