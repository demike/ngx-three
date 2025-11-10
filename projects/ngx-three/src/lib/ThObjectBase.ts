import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Object3D, Vector3 } from 'three';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-object',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThObjectBase<T extends Object3D, ARGS = unknown> extends ThWrapperBase<T, ARGS> implements OnInit {
  public parent!: ThObjectBase<any>;

  public override addToParent() {
    if (
      this._objRef &&
      this.parent.objRef &&
      (!this._objRef.parent || this._objRef.parent.uuid !== this.parent.objRef.uuid)
    ) {
      this.parent.objRef.add(this._objRef);
    }
  }

  public override removeFromParent() {
    this._objRef?.parent?.remove(this._objRef);
  }

  protected override applyObjRef(objRef: T | undefined) {
    if (this._objRef !== objRef || this._objRef?.parent?.uuid !== this.parent.objRef.uuid) {
      this.removeFromParent();
      this._objRef = objRef;
      if (this.autoAddToParent) {
        this.addToParent();
      }
    }
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

  // object 3d methods
  @Input()
  public set lookAt(vector: Vector3 | [x: number, y: number, z: number]) {
    Promise.resolve().then(() => {
      // execute next microtick, to assume all
      // position changes already happend,
      // because lookAt triggers a world matrix calculation
      if (!this.objRef) {
        return;
      }
      if (Array.isArray(vector)) {
        this.objRef.lookAt(...vector);
      } else {
        this.objRef.lookAt(vector);
      }
    });
  }
}
