import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BufferGeometry, NormalOrGLBufferAttributes } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-geometry',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThGeometryBase<T extends BufferGeometry<NormalOrGLBufferAttributes>, ARGS> extends ThWrapperBase<T, ARGS> {
  protected parent = inject(ThObject3D);

  public addToParent() {
    if (!this.parent.objRef) {
      return;
      //throw new Error("parent object doesn't hold a three js object instance");
    }

    (this.parent.objRef as any).geometry = this.objRef;
    if ((this.parent.objRef as any).updateMorphTargets) {
      (this.parent.objRef as any).updateMorphTargets();
    }
  }

  public removeFromParent() {
    if (this._objRef && this.parent && this.parent.objRef) {
      (this.parent.objRef as any).geometry = undefined;
    }
  }
}
