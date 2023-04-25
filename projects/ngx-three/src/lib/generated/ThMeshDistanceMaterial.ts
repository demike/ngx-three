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
  MeshDistanceMaterial,
  MeshDistanceMaterialParameters,
  Texture,
  Vector3,
} from 'three';
import { applyValue } from '../util';
import { ThMaterial } from './ThMaterial';

@Component({
  selector: 'th-meshDistanceMaterial',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ThMaterial,
      useExisting: forwardRef(() => ThMeshDistanceMaterial),
    },
  ],
})
export class ThMeshDistanceMaterial<
  T extends MeshDistanceMaterial = MeshDistanceMaterial,
  TARGS = /* parameters? */ MeshDistanceMaterialParameters
> extends ThMaterial<T, TARGS> {
  public getType(): Type<MeshDistanceMaterial> {
    return MeshDistanceMaterial;
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
  public set farDistance(value: number) {
    if (this._objRef) {
      this._objRef.farDistance = value;
    }
  }

  // @ts-ignore
  public get farDistance(): number | undefined {
    return this._objRef?.farDistance;
  }
  @Input()
  public set nearDistance(value: number) {
    if (this._objRef) {
      this._objRef.nearDistance = value;
    }
  }

  // @ts-ignore
  public get nearDistance(): number | undefined {
    return this._objRef?.nearDistance;
  }
  @Input()
  public set referencePosition(
    value: Vector3 | [x: number, y: number, z: number]
  ) {
    if (this._objRef) {
      this._objRef.referencePosition = applyValue<Vector3>(
        this._objRef.referencePosition,
        value
      );
    }
  }
  // @ts-ignore
  public get referencePosition(): Vector3 | undefined {
    return this._objRef?.referencePosition;
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
