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
import { MeshDepthMaterial, MeshDepthMaterialParameters } from 'three';
import { DepthPackingStrategies } from 'three/src/constants.js';
import { Texture } from 'three/src/textures/Texture.js';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshDepthMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThMaterial, useExisting: forwardRef(() => ThMeshDepthMaterial) },
  ],
})
export class ThMeshDepthMaterial<
  T extends MeshDepthMaterial = MeshDepthMaterial,
  TARGS = /* parameters? */ MeshDepthMaterialParameters,
> extends ThMaterial<T, TARGS> {
  public getType(): Type<MeshDepthMaterial> {
    return MeshDepthMaterial;
  }

  public get isMeshDepthMaterial(): boolean | undefined {
    return this._objRef?.isMeshDepthMaterial;
  }
  @Input()
  public set depthPacking(value: DepthPackingStrategies) {
    if (this._objRef) {
      this._objRef.depthPacking = value;
    }
  }

  public get depthPacking(): DepthPackingStrategies | undefined {
    return this._objRef?.depthPacking;
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
}
