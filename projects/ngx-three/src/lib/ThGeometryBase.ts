import { Component } from '@angular/core';
import { BufferGeometry, Geometry } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-geometry',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThGeometryBase<ARGS extends any[]> extends ThWrapperBase<Geometry | BufferGeometry, ARGS> {
  constructor(protected parent: ThObject3D<any>) {
    super();
  }

  protected createThreeInstance(args?: Iterable<any>) {
    super.createThreeInstance(args);

    if (!this.parent.obj) {
      throw new Error('parent object doesn\'t hold a three js object instance');
    }

    (this.parent.obj as any).geometry = this.obj;
    if ((this.parent.obj as any).updateMorphTargets) {
      (this.parent.obj as any).updateMorphTargets();
    }
  }
}
