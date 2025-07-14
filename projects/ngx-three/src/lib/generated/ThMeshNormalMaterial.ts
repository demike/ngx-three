/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  MeshNormalMaterial,
  MeshNormalMaterialParameters,
  Vector2,
} from 'three';
import { NormalMapTypes } from 'three/src/constants.js';
import { Texture } from 'three/src/textures/Texture.js';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshNormalMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshNormalMaterial),
    },
  ],
})
export class ThMeshNormalMaterial<
  T extends MeshNormalMaterial = MeshNormalMaterial,
  TARGS = /* parameters? */ MeshNormalMaterialParameters,
> extends ThMaterial<T, TARGS> {
  public getType(): Type<MeshNormalMaterial> {
    return MeshNormalMaterial;
  }

  public get isMeshNormalMaterial(): boolean | undefined {
    return this._objRef?.isMeshNormalMaterial;
  }
  @Input()
  public set bumpMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.bumpMap = value;
    }
  }

  public get bumpMap(): (Texture | null) | undefined {
    return this._objRef?.bumpMap;
  }
  @Input()
  public set bumpScale(value: number) {
    if (this._objRef) {
      this._objRef.bumpScale = value;
    }
  }

  public get bumpScale(): number | undefined {
    return this._objRef?.bumpScale;
  }
  @Input()
  public set normalMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.normalMap = value;
    }
  }

  public get normalMap(): (Texture | null) | undefined {
    return this._objRef?.normalMap;
  }
  @Input()
  public set normalMapType(value: NormalMapTypes) {
    if (this._objRef) {
      this._objRef.normalMapType = value;
    }
  }

  public get normalMapType(): NormalMapTypes | undefined {
    return this._objRef?.normalMapType;
  }
  @Input()
  public set normalScale(value: Vector2 | [x: number, y: number]) {
    if (this._objRef) {
      this._objRef.normalScale = applyValue<Vector2>(
        this._objRef.normalScale,
        value,
      );
    }
  }
  public get normalScale(): Vector2 | undefined {
    return this._objRef?.normalScale;
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
  @Input()
  public set flatShading(value: boolean) {
    if (this._objRef) {
      this._objRef.flatShading = value;
    }
  }

  public get flatShading(): boolean | undefined {
    return this._objRef?.flatShading;
  }
}
