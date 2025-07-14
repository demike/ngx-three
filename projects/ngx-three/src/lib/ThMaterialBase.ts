import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Material, Mesh } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
    selector: 'th-abs-material',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThMaterialBase<T extends Material, ARGS> extends ThWrapperBase<T, ARGS> {
  protected parent = inject<ThObject3D<any>>(ThObject3D);


  public addToParent() {
    if (!this.parent.objRef) {
      throw new Error("parent object doesn't hold a three js object instance");
    }

    (this.parent.objRef as Mesh).material = this.objRef as Material;
  }

  public removeFromParent() {
    if (this._objRef && this.parent && this.parent.objRef) {
      (this.parent.objRef as any).material = undefined;
    }
  }
}
