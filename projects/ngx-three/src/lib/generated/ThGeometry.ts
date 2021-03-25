/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SkipSelf,
  Type,
} from '@angular/core';
import {
  AnimationClip,
  Bone,
  Box3,
  Color,
  Face3,
  Geometry,
  MorphNormals,
  MorphTarget,
  Sphere,
  Vector2,
  Vector3,
  Vector4,
} from 'three';
import { ThGeometryBase } from '../ThGeometryBase';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-geometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ThGeometry<
  T extends Geometry = Geometry,
  TARGS extends any[] = []
> extends ThGeometryBase<T, TARGS> {
  protected getType(): Type<Geometry> {
    return Geometry;
  }

  @Input()
  public set id(value: number) {
    if (this._objRef) {
      this._objRef.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this._objRef) {
      this._objRef.type = value;
    }
  }

  @Input()
  public set vertices(value: Vector3[]) {
    if (this._objRef) {
      this._objRef.vertices = value;
    }
  }

  @Input()
  public set colors(value: Color[]) {
    if (this._objRef) {
      this._objRef.colors = value;
    }
  }

  @Input()
  public set faces(value: Face3[]) {
    if (this._objRef) {
      this._objRef.faces = value;
    }
  }

  @Input()
  public set faceVertexUvs(value: Vector2[][][]) {
    if (this._objRef) {
      this._objRef.faceVertexUvs = value;
    }
  }

  @Input()
  public set morphTargets(value: MorphTarget[]) {
    if (this._objRef) {
      this._objRef.morphTargets = value;
    }
  }

  @Input()
  public set morphNormals(value: MorphNormals[]) {
    if (this._objRef) {
      this._objRef.morphNormals = value;
    }
  }

  @Input()
  public set skinWeights(value: Vector4[]) {
    if (this._objRef) {
      this._objRef.skinWeights = value;
    }
  }

  @Input()
  public set skinIndices(value: Vector4[]) {
    if (this._objRef) {
      this._objRef.skinIndices = value;
    }
  }

  @Input()
  public set lineDistances(value: number[]) {
    if (this._objRef) {
      this._objRef.lineDistances = value;
    }
  }

  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.boundingBox = applyValue<Box3 | null>(
        this._objRef.boundingBox,
        value
      );
    }
  }
  @Input()
  public set boundingSphere(
    value: Sphere | null | [center: Vector3, radius: number]
  ) {
    if (this._objRef) {
      this._objRef.boundingSphere = applyValue<Sphere | null>(
        this._objRef.boundingSphere,
        value
      );
    }
  }
  @Input()
  public set verticesNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.verticesNeedUpdate = value;
    }
  }

  @Input()
  public set elementsNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.elementsNeedUpdate = value;
    }
  }

  @Input()
  public set uvsNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.uvsNeedUpdate = value;
    }
  }

  @Input()
  public set normalsNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.normalsNeedUpdate = value;
    }
  }

  @Input()
  public set colorsNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.colorsNeedUpdate = value;
    }
  }

  @Input()
  public set lineDistancesNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.lineDistancesNeedUpdate = value;
    }
  }

  @Input()
  public set groupsNeedUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.groupsNeedUpdate = value;
    }
  }

  @Input()
  public set bones(value: Bone[]) {
    if (this._objRef) {
      this._objRef.bones = value;
    }
  }

  @Input()
  public set animation(value: AnimationClip) {
    if (this._objRef) {
      this._objRef.animation = value;
    }
  }

  @Input()
  public set animations(value: AnimationClip[]) {
    if (this._objRef) {
      this._objRef.animations = value;
    }
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
