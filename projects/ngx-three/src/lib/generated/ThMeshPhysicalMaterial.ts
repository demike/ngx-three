/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  Color,
  MeshPhysicalMaterial,
  MeshPhysicalMaterialParameters,
  Texture,
  Vector2,
} from 'three';
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
      useExisting: forwardRef(() => ThMeshPhysicalMaterial),
    },
  ],
})
export class ThMeshPhysicalMaterial<
  TARGS extends any[] = [parameters: MeshPhysicalMaterialParameters]
> extends ThMeshStandardMaterial<TARGS> {
  @Input()
  public obj!: MeshPhysicalMaterial;
  protected getType(): Type<MeshPhysicalMaterial> {
    return MeshPhysicalMaterial;
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
  public set clearcoat(value: number) {
    if (this.obj) {
      this.obj.clearcoat = value;
    }
  }

  @Input()
  public set clearcoatMap(value: Texture | null) {
    if (this.obj) {
      this.obj.clearcoatMap = value;
    }
  }

  @Input()
  public set clearcoatRoughness(value: number) {
    if (this.obj) {
      this.obj.clearcoatRoughness = value;
    }
  }

  @Input()
  public set clearcoatRoughnessMap(value: Texture | null) {
    if (this.obj) {
      this.obj.clearcoatRoughnessMap = value;
    }
  }

  @Input()
  public set clearcoatNormalScale(value: Vector2 | [x: number, y: number]) {
    if (this.obj) {
      this.obj.clearcoatNormalScale = applyValue<Vector2>(
        this.obj.clearcoatNormalScale,
        value
      );
    }
  }
  @Input()
  public set clearcoatNormalMap(value: Texture | null) {
    if (this.obj) {
      this.obj.clearcoatNormalMap = value;
    }
  }

  @Input()
  public set reflectivity(value: number) {
    if (this.obj) {
      this.obj.reflectivity = value;
    }
  }

  @Input()
  public set ior(value: number) {
    if (this.obj) {
      this.obj.ior = value;
    }
  }

  @Input()
  public set sheen(value: Color | null | [color: Color | string | number]) {
    if (this.obj) {
      this.obj.sheen = applyValue<Color | null>(this.obj.sheen, value);
    }
  }
  @Input()
  public set transmission(value: number) {
    if (this.obj) {
      this.obj.transmission = value;
    }
  }

  @Input()
  public set transmissionMap(value: Texture | null) {
    if (this.obj) {
      this.obj.transmissionMap = value;
    }
  }
}
