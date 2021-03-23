import { Component } from '@angular/core';
import { ThObject3D } from './generated/ThObject3D';
import { ThCanvas } from './ThCanvas';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-control',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThControlBase<ARGS extends any[]> extends ThWrapperBase<any, ARGS> {
  constructor(protected camera: ThObject3D<any>, protected canvas?: ThCanvas) {
    super();
  }

  protected createThreeInstance(args?: Iterable<any>) {
    if (!args) {
      args = [this.camera.objRef, this.canvas?.rendererCanvas?.nativeElement];
    }
    super.createThreeInstance(args);
  }
}
