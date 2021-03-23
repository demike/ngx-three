/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import { ChangeDetectionStrategy, Component, Input, SkipSelf, Type } from '@angular/core';
import { AnimationClip, Bone, Box3, Color, Face3, Geometry, MorphNormals, MorphTarget, Sphere, Vector2, Vector3, Vector4 } from 'three';
import { ThGeometryBase } from '../ThGeometryBase';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-geometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: []
})
export class ThGeometry<TARGS extends any[] = []> extends ThGeometryBase<TARGS> {
  @Input()
  public objRef!: Geometry;
  protected getType(): Type<Geometry> {
    return Geometry;
  }

  @Input()
  public set id(value: number) {
    if (this.objRef) {
      this.objRef.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this.objRef) {
      this.objRef.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this.objRef) {
      this.objRef.name = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.objRef) {
      this.objRef.type = value;
    }
  }

  @Input()
  public set vertices(value: Vector3[]) {
    if (this.objRef) {
      this.objRef.vertices = value;
    }
  }

  @Input()
  public set colors(value: Color[]) {
    if (this.objRef) {
      this.objRef.colors = value;
    }
  }

  @Input()
  public set faces(value: Face3[]) {
    if (this.objRef) {
      this.objRef.faces = value;
    }
  }

  @Input()
  public set faceVertexUvs(value: Vector2[][][]) {
    if (this.objRef) {
      this.objRef.faceVertexUvs = value;
    }
  }

  @Input()
  public set morphTargets(value: MorphTarget[]) {
    if (this.objRef) {
      this.objRef.morphTargets = value;
    }
  }

  @Input()
  public set morphNormals(value: MorphNormals[]) {
    if (this.objRef) {
      this.objRef.morphNormals = value;
    }
  }

  @Input()
  public set skinWeights(value: Vector4[]) {
    if (this.objRef) {
      this.objRef.skinWeights = value;
    }
  }

  @Input()
  public set skinIndices(value: Vector4[]) {
    if (this.objRef) {
      this.objRef.skinIndices = value;
    }
  }

  @Input()
  public set lineDistances(value: number[]) {
    if (this.objRef) {
      this.objRef.lineDistances = value;
    }
  }

  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this.objRef) {
      this.objRef.boundingBox = applyValue<Box3 | null>(this.objRef.boundingBox, value);
    }
  }
  @Input()
  public set boundingSphere(value: Sphere | null | [center: Vector3, radius: number]) {
    if (this.objRef) {
      this.objRef.boundingSphere = applyValue<Sphere | null>(this.objRef.boundingSphere, value);
    }
  }
  @Input()
  public set verticesNeedUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.verticesNeedUpdate = value;
    }
  }

  @Input()
  public set elementsNeedUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.elementsNeedUpdate = value;
    }
  }

  @Input()
  public set uvsNeedUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.uvsNeedUpdate = value;
    }
  }

  @Input()
  public set normalsNeedUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.normalsNeedUpdate = value;
    }
  }

  @Input()
  public set colorsNeedUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.colorsNeedUpdate = value;
    }
  }

  @Input()
  public set lineDistancesNeedUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.lineDistancesNeedUpdate = value;
    }
  }

  @Input()
  public set groupsNeedUpdate(value: boolean) {
    if (this.objRef) {
      this.objRef.groupsNeedUpdate = value;
    }
  }

  @Input()
  public set bones(value: Bone[]) {
    if (this.objRef) {
      this.objRef.bones = value;
    }
  }

  @Input()
  public set animation(value: AnimationClip) {
    if (this.objRef) {
      this.objRef.animation = value;
    }
  }

  @Input()
  public set animations(value: AnimationClip[]) {
    if (this.objRef) {
      this.objRef.animations = value;
    }
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
