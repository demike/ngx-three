/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, forwardRef, Input, Type } from '@angular/core';
import { DepthPackingStrategies, MeshDepthMaterial, MeshDepthMaterialParameters, Texture } from 'three';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshDepthMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThMaterial, useExisting: forwardRef(() => ThMeshDepthMaterial) }]
})
export class ThMeshDepthMaterial<
  T extends MeshDepthMaterial = MeshDepthMaterial,
  TARGS = /* parameters? */ MeshDepthMaterialParameters
> extends ThMaterial<T, TARGS> {
  public getType(): Type<MeshDepthMaterial> {
    return MeshDepthMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  // @ts-ignore
  public get type(): string | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  // @ts-ignore
  public get map(): (Texture | null) | undefined {
    return this._objRef?.map;
  }
  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  // @ts-ignore
  public get alphaMap(): (Texture | null) | undefined {
    return this._objRef?.alphaMap;
  }
  @Input()
  public set depthPacking(value: DepthPackingStrategies) {
    if (this._objRef) {
      this._objRef.depthPacking = value;
    }
  }

  // @ts-ignore
  public get depthPacking(): DepthPackingStrategies | undefined {
    return this._objRef?.depthPacking;
  }
  @Input()
  public set displacementMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.displacementMap = value;
    }
  }

  // @ts-ignore
  public get displacementMap(): (Texture | null) | undefined {
    return this._objRef?.displacementMap;
  }
  @Input()
  public set displacementScale(value: number) {
    if (this._objRef) {
      this._objRef.displacementScale = value;
    }
  }

  // @ts-ignore
  public get displacementScale(): number | undefined {
    return this._objRef?.displacementScale;
  }
  @Input()
  public set displacementBias(value: number) {
    if (this._objRef) {
      this._objRef.displacementBias = value;
    }
  }

  // @ts-ignore
  public get displacementBias(): number | undefined {
    return this._objRef?.displacementBias;
  }
  @Input()
  public set wireframe(value: boolean) {
    if (this._objRef) {
      this._objRef.wireframe = value;
    }
  }

  // @ts-ignore
  public get wireframe(): boolean | undefined {
    return this._objRef?.wireframe;
  }
  @Input()
  public set wireframeLinewidth(value: number) {
    if (this._objRef) {
      this._objRef.wireframeLinewidth = value;
    }
  }

  // @ts-ignore
  public get wireframeLinewidth(): number | undefined {
    return this._objRef?.wireframeLinewidth;
  }
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }

  // @ts-ignore
  public get fog(): boolean | undefined {
    return this._objRef?.fog;
  }
}
