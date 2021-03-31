import { Component, Input, OnInit } from '@angular/core';
import { Object3D, Vector3 } from 'three';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-object',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThObjectBase<T extends Object3D, ARGS extends any[] = []> extends ThWrapperBase<T, ARGS> implements OnInit {
  constructor(public parent: ThObjectBase<any>) {
    super();
  }

  protected applyObjRef(objRef: T | undefined) {
    this.attachToParent(objRef, this._objRef);
    this._objRef = objRef;
    this.emitObjRefChange();
  }

  protected attachToParent(newRef?: T, oldRef?: T) {
    if (!this.parent.objRef || (newRef === oldRef && oldRef?.parent?.uuid === this.parent.objRef.uuid)) {
      return;
    }

    // remove old obj from parent
    if (oldRef && oldRef.parent) {
      oldRef.parent.remove(oldRef);
    }

    // add new obj to parent
    if (newRef && (!newRef.parent || (newRef.parent && newRef.parent.uuid !== this.parent.objRef.uuid))) {
      this.parent.objRef.add(newRef);
    }
  }

  ngOnInit(): void {
    super.ngOnInit();
    /*
    if (this._objRef && !this._objRef?.parent) {
      //  this.attachToParent(this._objRef, undefined);
    }
    */
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
