import { Component, Input } from '@angular/core';
import { Object3D, Vector3 } from 'three';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-object',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThObjectBase<T extends Object3D, ARGS extends any[] = []> extends ThWrapperBase<T, ARGS> {
  constructor(public parent: ThObjectBase<any>) {
    super();
  }

  protected createThreeInstance(args?: Iterable<any>) {
    super.createThreeInstance(args);
    this.parent.objRef?.add(this.objRef);
  }

  // object 3d methods
  @Input()
  public set lookAt(vector: Vector3 | [x: number, y?: number, z?: number]) {
    if (!this.objRef) {
      return;
    }
    if (Array.isArray(vector)) {
      this.objRef.lookAt(...vector);
    } else {
      this.objRef.lookAt(vector);
    }
  }
}
