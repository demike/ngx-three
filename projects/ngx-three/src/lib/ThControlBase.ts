import { Component } from '@angular/core';
import { EventDispatcher } from 'three';
import { ThObject3D } from './generated/ThObject3D';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'abs-th-control',
  template: '',
})
export class ThControlBase<ARGS extends any[]> extends ThWrapperBase<
  EventDispatcher,
  ARGS
> {
  constructor(protected camera: ThObject3D<any>) {
    super();
  }

  protected createThreeInstance(args?: Iterable<any>) {
    if (!args) {
      args = [this.camera];
    }
    super.createThreeInstance(args);
  }
}
