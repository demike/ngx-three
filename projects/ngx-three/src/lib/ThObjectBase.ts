import { Component, Input } from '@angular/core';
import { Object3D, Vector3 } from 'three';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-object',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThObjectBase<ARGS extends any[]> extends ThWrapperBase<Object3D, ARGS> {
  constructor(public parent: ThObjectBase<any>) {
    super();
  }

  protected createThreeInstance(args?: Iterable<any>) {
    super.createThreeInstance(args);
    this.parent.obj?.add(this.obj as Object3D);
  }

  // object 3d methods
  @Input()
  public set lookAt(vector: Vector3 | [x: number, y?: number, z?: number]) {
    if (!this.obj) {
      return;
    }
    if (Array.isArray(vector)) {
      this.obj.lookAt(...vector);
    } else {
      this.obj.lookAt(vector);
    }
  }
}
