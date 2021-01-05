import { Component } from '@angular/core';
import { Material } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'abs-th-material',
  template: '',
})
export class ThMaterialBase<ARGS extends any[]> extends ThWrapperBase<
  Material,
  ARGS
> {
  constructor(protected parent: ThObject3D<any>) {
    super();
  }

  protected createThreeInstance(args?: Iterable<any>) {
    super.createThreeInstance(args);

    (this.parent.obj as any).material = this.obj;
  }
}
