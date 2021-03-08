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
  public obj!: Geometry;
  protected getType(): Type<Geometry> {
    return Geometry;
  }

  @Input()
  public set id(value: number) {
    if (this.obj) {
      this.obj.id = value;
    }
  }

  @Input()
  public set uuid(value: string) {
    if (this.obj) {
      this.obj.uuid = value;
    }
  }

  @Input()
  public set name(value: string) {
    if (this.obj) {
      this.obj.name = value;
    }
  }

  @Input()
  public set type(value: string) {
    if (this.obj) {
      this.obj.type = value;
    }
  }

  @Input()
  public set vertices(value: Vector3[]) {
    if (this.obj) {
      this.obj.vertices = value;
    }
  }

  @Input()
  public set colors(value: Color[]) {
    if (this.obj) {
      this.obj.colors = value;
    }
  }

  @Input()
  public set faces(value: Face3[]) {
    if (this.obj) {
      this.obj.faces = value;
    }
  }

  @Input()
  public set faceVertexUvs(value: Vector2[][][]) {
    if (this.obj) {
      this.obj.faceVertexUvs = value;
    }
  }

  @Input()
  public set morphTargets(value: MorphTarget[]) {
    if (this.obj) {
      this.obj.morphTargets = value;
    }
  }

  @Input()
  public set morphNormals(value: MorphNormals[]) {
    if (this.obj) {
      this.obj.morphNormals = value;
    }
  }

  @Input()
  public set skinWeights(value: Vector4[]) {
    if (this.obj) {
      this.obj.skinWeights = value;
    }
  }

  @Input()
  public set skinIndices(value: Vector4[]) {
    if (this.obj) {
      this.obj.skinIndices = value;
    }
  }

  @Input()
  public set lineDistances(value: number[]) {
    if (this.obj) {
      this.obj.lineDistances = value;
    }
  }

  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this.obj) {
      this.obj.boundingBox = applyValue<Box3 | null>(this.obj.boundingBox, value);
    }
  }
  @Input()
  public set boundingSphere(value: Sphere | null | [center: Vector3, radius: number]) {
    if (this.obj) {
      this.obj.boundingSphere = applyValue<Sphere | null>(this.obj.boundingSphere, value);
    }
  }
  @Input()
  public set verticesNeedUpdate(value: boolean) {
    if (this.obj) {
      this.obj.verticesNeedUpdate = value;
    }
  }

  @Input()
  public set elementsNeedUpdate(value: boolean) {
    if (this.obj) {
      this.obj.elementsNeedUpdate = value;
    }
  }

  @Input()
  public set uvsNeedUpdate(value: boolean) {
    if (this.obj) {
      this.obj.uvsNeedUpdate = value;
    }
  }

  @Input()
  public set normalsNeedUpdate(value: boolean) {
    if (this.obj) {
      this.obj.normalsNeedUpdate = value;
    }
  }

  @Input()
  public set colorsNeedUpdate(value: boolean) {
    if (this.obj) {
      this.obj.colorsNeedUpdate = value;
    }
  }

  @Input()
  public set lineDistancesNeedUpdate(value: boolean) {
    if (this.obj) {
      this.obj.lineDistancesNeedUpdate = value;
    }
  }

  @Input()
  public set groupsNeedUpdate(value: boolean) {
    if (this.obj) {
      this.obj.groupsNeedUpdate = value;
    }
  }

  @Input()
  public set bones(value: Bone[]) {
    if (this.obj) {
      this.obj.bones = value;
    }
  }

  @Input()
  public set animation(value: AnimationClip) {
    if (this.obj) {
      this.obj.animation = value;
    }
  }

  @Input()
  public set animations(value: AnimationClip[]) {
    if (this.obj) {
      this.obj.animations = value;
    }
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
