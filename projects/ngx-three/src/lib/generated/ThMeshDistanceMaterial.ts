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
  template: '',
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
  TARGS extends any[] = [parameters?: MeshDistanceMaterialParameters]
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

  @Input()
  public set map(value: Texture | null) {
    if (this._objRef) {
      this._objRef.map = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.alphaMap = value;
    }
  }

  @Input()
  public set displacementMap(value: Texture | null) {
    if (this._objRef) {
      this._objRef.displacementMap = value;
    }
  }

  @Input()
  public set displacementScale(value: number) {
    if (this._objRef) {
      this._objRef.displacementScale = value;
    }
  }

  @Input()
  public set displacementBias(value: number) {
    if (this._objRef) {
      this._objRef.displacementBias = value;
    }
  }

  @Input()
  public set farDistance(value: number) {
    if (this._objRef) {
      this._objRef.farDistance = value;
    }
  }

  @Input()
  public set nearDistance(value: number) {
    if (this._objRef) {
      this._objRef.nearDistance = value;
    }
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
  @Input()
  public set fog(value: boolean) {
    if (this._objRef) {
      this._objRef.fog = value;
    }
  }
}
