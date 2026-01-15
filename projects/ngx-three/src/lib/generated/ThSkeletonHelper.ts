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
import {
  BufferGeometry,
  Material,
  Object3DEventMap,
  SkeletonHelper,
} from 'three';
import { Object3D } from 'three/src/core/Object3D.js';
import { Bone } from 'three/src/objects/Bone.js';
import { SkinnedMesh } from 'three/src/objects/SkinnedMesh.js';
import { ThLineSegments } from './ThLineSegments';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-skeletonHelper',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThSkeletonHelper) },
  ],
})
export class ThSkeletonHelper<
  T extends SkeletonHelper = SkeletonHelper,
  TARGS = /* object */ SkinnedMesh | Object3D,
> extends ThLineSegments<
  BufferGeometry,
  Material | Material[],
  Object3DEventMap,
  T,
  TARGS
> {
  public getType(): Type<SkeletonHelper> {
    return SkeletonHelper;
  }

  public get type(): (string | 'SkeletonHelper') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set root(value: SkinnedMesh | Object3D) {
    if (this._objRef) {
      this._objRef.root = value;
    }
  }

  public get root(): (SkinnedMesh | Object3D) | undefined {
    return this._objRef?.root;
  }
  @Input()
  public set bones(value: Bone[]) {
    if (this._objRef) {
      this._objRef.bones = value;
    }
  }

  public get bones(): Bone[] | undefined {
    return this._objRef?.bones;
  }
  @Input()
  public set matrixAutoUpdate(value: boolean) {
    if (this._objRef) {
      this._objRef.matrixAutoUpdate = value;
    }
  }

  public get matrixAutoUpdate(): boolean | undefined {
    return this._objRef?.matrixAutoUpdate;
  }
}
