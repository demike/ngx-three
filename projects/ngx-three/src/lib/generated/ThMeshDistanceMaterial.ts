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
  TARGS extends any[] = [parameters?: MeshDistanceMaterialParameters]
> extends ThMaterial<TARGS> {
  @Input()
  public obj!: MeshDistanceMaterial;
  protected getType(): Type<MeshDistanceMaterial> {
    return MeshDistanceMaterial;
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set map(value: Texture | null) {
    if (this.obj) {
      this.obj.map = value;
    }
  }

  @Input()
  public set alphaMap(value: Texture | null) {
    if (this.obj) {
      this.obj.alphaMap = value;
    }
  }

  @Input()
  public set displacementMap(value: Texture | null) {
    if (this.obj) {
      this.obj.displacementMap = value;
    }
  }

  @Input()
  public set displacementScale(value: number) {
    if (this.obj) {
      this.obj.displacementScale = value;
    }
  }

  @Input()
  public set displacementBias(value: number) {
    if (this.obj) {
      this.obj.displacementBias = value;
    }
  }

  @Input()
  public set farDistance(value: number) {
    if (this.obj) {
      this.obj.farDistance = value;
    }
  }

  @Input()
  public set nearDistance(value: number) {
    if (this.obj) {
      this.obj.nearDistance = value;
    }
  }

  @Input()
  public set referencePosition(
    value: Vector3 | [x: number, y: number, z: number]
  ) {
    if (this.obj) {
      this.obj.referencePosition = applyValue<Vector3>(
        this.obj.referencePosition,
        value
      );
    }
  }
  @Input()
  public set skinning(value: boolean) {
    if (this.obj) {
      this.obj.skinning = value;
    }
  }

  @Input()
  public set morphTargets(value: boolean) {
    if (this.obj) {
      this.obj.morphTargets = value;
    }
  }

  @Input()
  public set fog(value: boolean) {
    if (this.obj) {
      this.obj.fog = value;
    }
  }
}
