import { Component } from '@angular/core';
import { ThObject3D } from './generated/ThObject3D';
import { ThCanvas } from './ThCanvas';
import { ThWrapperBase } from './ThWrapperBase';
@Component({
  selector: 'th-abs-control',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThPassBase<T, ARGS extends any[]> extends ThWrapperBase<T, ARGS> {
  constructor(protected effectComposer: ThObject3D<any>) {
    super();
  }
}
