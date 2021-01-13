import { Component } from '@angular/core';
import { EventDispatcher } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThCanvas } from './ThCanvas';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-control',
  template: '',
})
// tslint:disable-next-line: component-class-suffix
export class ThControlBase<ARGS extends any[]> extends ThWrapperBase<
  any,
  ARGS
> {
  constructor(protected camera: ThObject3D<any>, protected canvas?: ThCanvas) {
    super();
  }

  protected createThreeInstance(args?: Iterable<any>) {
    if (!args) {
      args = [this.camera, this.canvas];
    }
    super.createThreeInstance(args);
  }
}
