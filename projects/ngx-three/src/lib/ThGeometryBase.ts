import { Component } from '@angular/core';
import { BufferGeometry, Geometry } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-geometry',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThGeometryBase<T extends Geometry | BufferGeometry, ARGS extends any[]> extends ThWrapperBase<T, ARGS> {
  constructor(protected parent: ThObject3D<any>) {
    super();
  }

  protected createThreeInstance(args?: Iterable<any>) {
    super.createThreeInstance(args);

    if (!this.parent.objRef) {
      throw new Error("parent object doesn't hold a three js object instance");
    }

    (this.parent.objRef as any).geometry = this.objRef;
    if ((this.parent.objRef as any).updateMorphTargets) {
      (this.parent.objRef as any).updateMorphTargets();
    }
  }
}
