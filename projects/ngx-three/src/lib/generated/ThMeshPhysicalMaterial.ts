/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
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
  ColorRepresentation,
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
  T extends MeshPhysicalMaterial = MeshPhysicalMaterial,
  TARGS = /* parameters? */ MeshPhysicalMaterialParameters
> extends ThMeshStandardMaterial<T, TARGS> {
  public getType(): Type<MeshPhysicalMaterial> {
    return MeshPhysicalMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set defines(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.defines = value;
    }
  }

  @Input()
  public set clearcoat(value: number) {
    if (this._objRef) {
      this._objRef.clearcoat = value;
    }
  }

  @Input()
  public set clearcoatMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.clearcoatMap = value;
    }
  }

  @Input()
  public set clearcoatRoughness(value: number) {
    if (this._objRef) {
      this._objRef.clearcoatRoughness = value;
    }
  }

  @Input()
  public set clearcoatRoughnessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.clearcoatRoughnessMap = value;
    }
  }

  @Input()
  public set clearcoatNormalScale(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.clearcoatNormalScale = applyValue<Vector2>(
        this._objRef.clearcoatNormalScale,
        value
      );
    }
  }
  @Input()
  public set clearcoatNormalMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.clearcoatNormalMap = value;
    }
  }

  @Input()
  public set reflectivity(value: number) {
    if (this._objRef) {
      this._objRef.reflectivity = value;
    }
  }

  @Input()
  public set ior(value: number) {
    if (this._objRef) {
      this._objRef.ior = value;
    }
  }

  @Input()
  public set sheen(value: number) {
    if (this._objRef) {
      this._objRef.sheen = value;
    }
  }

  @Input()
  public set sheenColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.sheenColor = applyValue<Color>(
        this._objRef.sheenColor,
        value
      );
    }
  }
  @Input()
  public set sheenColorMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.sheenColorMap = value;
    }
  }

  @Input()
  public set sheenRoughness(value: number) {
    if (this._objRef) {
      this._objRef.sheenRoughness = value;
    }
  }

  @Input()
  public set sheenRoughnessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.sheenRoughnessMap = value;
    }
  }

  @Input()
  public set transmission(value: number) {
    if (this._objRef) {
      this._objRef.transmission = value;
    }
  }

  @Input()
  public set transmissionMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.transmissionMap = value;
    }
  }

  @Input()
  public set thickness(value: number) {
    if (this._objRef) {
      this._objRef.thickness = value;
    }
  }

  @Input()
  public set thicknessMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.thicknessMap = value;
    }
  }

  @Input()
  public set attenuationDistance(value: number) {
    if (this._objRef) {
      this._objRef.attenuationDistance = value;
    }
  }

  @Input()
  public set attenuationColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.attenuationColor = applyValue<Color>(
        this._objRef.attenuationColor,
        value
      );
    }
  }
  @Input()
  public set specularIntensity(value: number) {
    if (this._objRef) {
      this._objRef.specularIntensity = value;
    }
  }

  @Input()
  public set specularColor(value: Color | [color: ColorRepresentation]) {
    if (this._objRef) {
      this._objRef.specularColor = applyValue<Color>(
        this._objRef.specularColor,
        value
      );
    }
  }
  @Input()
  public set specularIntensityMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.specularIntensityMap = value;
    }
  }

  @Input()
  public set specularColorMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.specularColorMap = value;
    }
  }
}
