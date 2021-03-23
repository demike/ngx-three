/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { MeshDistanceMaterial, MeshDistanceMaterialParameters, Texture, Vector3 } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshDistanceMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshDistanceMaterial)
    }
  ]
})
export class ThMeshDistanceMaterial<TARGS extends any[] = [parameters?: MeshDistanceMaterialParameters]> extends ThMaterial<TARGS> {
  @Input()
  public objRef!: MeshDistanceMaterial;
  protected getType(): Type<MeshDistanceMaterial> {
    return MeshDistanceMaterial;
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
  public set farDistance(value: number) {
    if (this.objRef) {
      this.objRef.farDistance = value;
    }
  }

  @Input()
  public set nearDistance(value: number) {
    if (this.objRef) {
      this.objRef.nearDistance = value;
    }
  }

  @Input()
  public set referencePosition(value: Vector3 | [x: number, y: number, z: number]) {
    if (this.objRef) {
      this.objRef.referencePosition = applyValue<Vector3>(this.objRef.referencePosition, value);
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
  public set fog(value: boolean) {
    if (this.objRef) {
      this.objRef.fog = value;
    }
  }
}
