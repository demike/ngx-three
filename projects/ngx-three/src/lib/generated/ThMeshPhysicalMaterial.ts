/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { Color, MeshPhysicalMaterial, MeshPhysicalMaterialParameters, Texture, Vector2 } from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';
import { ThMeshStandardMaterial } from './ThMeshStandardMaterial';

@Component({
  selector: 'th-meshPhysicalMaterial',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshPhysicalMaterial)
    }
  ]
})
export class ThMeshPhysicalMaterial<
  TARGS extends any[] = [parameters: MeshPhysicalMaterialParameters]
> extends ThMeshStandardMaterial<TARGS> {
  @Input()
  public objRef!: MeshPhysicalMaterial;
  protected getType(): Type<MeshPhysicalMaterial> {
    return MeshPhysicalMaterial;
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
  public set clearcoat(value: number) {
    if (this.objRef) {
      this.objRef.clearcoat = value;
    }
  }

  @Input()
  public set clearcoatMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.clearcoatMap = value;
    }
  }

  @Input()
  public set clearcoatRoughness(value: number) {
    if (this.objRef) {
      this.objRef.clearcoatRoughness = value;
    }
  }

  @Input()
  public set clearcoatRoughnessMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.clearcoatRoughnessMap = value;
    }
  }

  @Input()
  public set clearcoatNormalScale(value: Vector2 | [x: number, y: number]) {
    if (this.objRef) {
      this.objRef.clearcoatNormalScale = applyValue<Vector2>(this.objRef.clearcoatNormalScale, value);
    }
  }
  @Input()
  public set clearcoatNormalMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.clearcoatNormalMap = value;
    }
  }

  @Input()
  public set reflectivity(value: number) {
    if (this.objRef) {
      this.objRef.reflectivity = value;
    }
  }

  @Input()
  public set ior(value: number) {
    if (this.objRef) {
      this.objRef.ior = value;
    }
  }

  @Input()
  public set sheen(value: Color | null | [color: Color | string | number]) {
    if (this.objRef) {
      this.objRef.sheen = applyValue<Color | null>(this.objRef.sheen, value);
    }
  }
  @Input()
  public set transmission(value: number) {
    if (this.objRef) {
      this.objRef.transmission = value;
    }
  }

  @Input()
  public set transmissionMap(value: Texture | null) {
    if (this.objRef) {
      this.objRef.transmissionMap = value;
    }
  }
}
