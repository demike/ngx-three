import { Component } from '@angular/core';
import { BufferGeometry } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-geometry',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThGeometryBase<T extends BufferGeometry, ARGS> extends ThWrapperBase<T, ARGS> {
  constructor(protected parent: ThObject3D) {
    super();
  }

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
