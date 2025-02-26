/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Type,
  forwardRef,
} from '@angular/core';
import {
  Color,
  ColorRepresentation,
  Euler,
  EulerOrder,
  MeshBasicMaterial,
  MeshBasicMaterialParameters,
} from 'three';
import { Combine } from 'three/src/constants.js';
import { Texture } from 'three/src/textures/Texture.js';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
    selector: 'th-meshBasicMaterial',
    template: '<ng-content/>',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: ThMaterial, useExisting: forwardRef(() => ThMeshBasicMaterial) },
    ],
    standalone: false
})
export class ThMeshBasicMaterial<
  T extends MeshBasicMaterial = MeshBasicMaterial,
  TARGS = /* parameters? */ MeshBasicMaterialParameters,
> extends ThMaterial<T, TARGS> {
  public getType(): Type<MeshBasicMaterial> {
    return MeshBasicMaterial;
  }

  public get isMeshBasicMaterial(): true | undefined {
    return this._objRef?.isMeshBasicMaterial;
  }
  @Input()
  public set color(
    value:
      | Color
      | [
          ...args:
            | [color: ColorRepresentation]
            | [r: number, g: number, b: number],
        ],
  ) {
    if (this._objRef) {
      this._objRef.color = applyValue<Color>(this._objRef.color, value);
    }
  }
  public get color(): Color | undefined {
    return this._objRef?.color;
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  public get map(): (Texture | null) | undefined {
    return this._objRef?.map;
  }
  @Input()
  public set lightMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.lightMap = value;
    }
  }

  public get lightMap(): (Texture | null) | undefined {
    return this._objRef?.lightMap;
  }
  @Input()
  public set lightMapIntensity(value: number) {
    if (this._objRef) {
      this._objRef.lightMapIntensity = value;
    }
  }

  public get lightMapIntensity(): number | undefined {
    return this._objRef?.lightMapIntensity;
  }
  @Input()
  public set aoMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.aoMap = value;
    }
  }

  public get aoMap(): (Texture | null) | undefined {
    return this._objRef?.aoMap;
  }
  @Input()
  public set aoMapIntensity(value: number) {
    if (this._objRef) {
      this._objRef.aoMapIntensity = value;
    }
  }

  public get aoMapIntensity(): number | undefined {
    return this._objRef?.aoMapIntensity;
  }
  @Input()
  public set specularMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.specularMap = value;
    }
  }

  public get specularMap(): (Texture | null) | undefined {
    return this._objRef?.specularMap;
  }
  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  public get alphaMap(): (Texture | null) | undefined {
    return this._objRef?.alphaMap;
  }
  @Input()
  public set envMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.envMap = value;
    }
  }

  public get envMap(): (Texture | null) | undefined {
    return this._objRef?.envMap;
  }
  @Input()
  public set envMapRotation(
    value: Euler | [x: number, y: number, z: number, order?: EulerOrder],
  ) {
    if (this._objRef) {
      this._objRef.envMapRotation = applyValue<Euler>(
        this._objRef.envMapRotation,
        value,
      );
    }
  }
  public get envMapRotation(): Euler | undefined {
    return this._objRef?.envMapRotation;
  }
  @Input()
  public set combine(value: Combine) {
    if (this._objRef) {
      this._objRef.combine = value;
    }
  }

  public get combine(): Combine | undefined {
    return this._objRef?.combine;
  }
  @Input()
  public set reflectivity(value: number) {
    if (this._objRef) {
      this._objRef.reflectivity = value;
    }
  }

  public get reflectivity(): number | undefined {
    return this._objRef?.reflectivity;
  }
  @Input()
  public set refractionRatio(value: number) {
    if (this._objRef) {
      this._objRef.refractionRatio = value;
    }
  }

  public get refractionRatio(): number | undefined {
    return this._objRef?.refractionRatio;
  }
  @Input()
  public set wireframe(value: boolean) {
    if (this._objRef) {
      this._objRef.wireframe = value;
    }
  }

  public get wireframe(): boolean | undefined {
    return this._objRef?.wireframe;
  }
  @Input()
  public set wireframeLinewidth(value: number) {
    if (this._objRef) {
      this._objRef.wireframeLinewidth = value;
    }
  }

  public get wireframeLinewidth(): number | undefined {
    return this._objRef?.wireframeLinewidth;
  }
  @Input()
  public set wireframeLinecap(value: string) {
    if (this._objRef) {
      this._objRef.wireframeLinecap = value;
    }
  }

  public get wireframeLinecap(): string | undefined {
    return this._objRef?.wireframeLinecap;
  }
  @Input()
  public set wireframeLinejoin(value: string) {
    if (this._objRef) {
      this._objRef.wireframeLinejoin = value;
    }
  }

  public get wireframeLinejoin(): string | undefined {
    return this._objRef?.wireframeLinejoin;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
}
