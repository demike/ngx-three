import { Component, OnChanges, SimpleChanges, Type } from '@angular/core';
import { Object3D } from 'three';
import { ThArgs } from './ThArgs';

@Component({
  selector: 'abs-th-wrapper',
  template: '',
})
export abstract class ThWrapperBase<T> implements OnChanges {
  protected obj?: Object3D;

  public set args(a: T) {
    // nothing to do
  }

  constructor(protected parent: ThWrapperBase<any>, args?: ThArgs) {}

  protected createObject(args?: Iterable<any>) {
    this.obj = new (this.getObjectType())(...(args ?? []));
    this.parent.obj?.add(this.obj);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.obj) {
      return;
    }

    this.createObject(changes['args']?.currentValue);

    for (let key in changes) {
      (this as any)[key] = changes[key].currentValue;
    }
  }

  protected abstract getObjectType(): Type<Object3D>;
}
