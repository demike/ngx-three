import { Component, Input } from '@angular/core';
import { Object3D, Vector3 } from 'three';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'abs-th-object',
  template: '',
})
export class ThObjectBase<ARGS extends any[]> extends ThWrapperBase<
  Object3D,
  ARGS
> {
  constructor(public parent: ThObjectBase<any>) {
    super();
  }

  protected createThreeInstance(args?: Iterable<any>) {
    super.createThreeInstance(args);
    this.parent.obj?.add(this.obj!);
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
