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
import { MeshDistanceMaterial, MeshDistanceMaterialParameters } from 'three';
import { Texture } from 'three/src/textures/Texture.js';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshDistanceMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshDistanceMaterial),
    },
  ],
})
export class ThMeshDistanceMaterial<
  T extends MeshDistanceMaterial = MeshDistanceMaterial,
  TARGS = /* parameters? */ MeshDistanceMaterialParameters,
> extends ThMaterial<T, TARGS> {
  public getType(): Type<MeshDistanceMaterial> {
    return MeshDistanceMaterial;
  }

  public get isMeshDistanceMaterial(): boolean | undefined {
    return this._objRef?.isMeshDistanceMaterial;
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
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  public get alphaMap(): (Texture | null) | undefined {
    return this._objRef?.alphaMap;
  }
  @Input()
  public set displacementMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.displacementMap = value;
    }
  }

  public get displacementMap(): (Texture | null) | undefined {
    return this._objRef?.displacementMap;
  }
  @Input()
  public set displacementScale(value: number) {
    if (this._objRef) {
      this._objRef.displacementScale = value;
    }
  }

  public get displacementScale(): number | undefined {
    return this._objRef?.displacementScale;
  }
  @Input()
  public set displacementBias(value: number) {
    if (this._objRef) {
      this._objRef.displacementBias = value;
    }
  }

  public get displacementBias(): number | undefined {
    return this._objRef?.displacementBias;
  }
}
