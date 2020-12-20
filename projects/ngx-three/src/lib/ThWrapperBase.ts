import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
} from '@angular/core';
import { Object3D } from 'three';
@Component({
  selector: 'abs-th-wrapper',
  template: '',
})
export class ThWrapperBase<T> implements OnChanges, OnInit {
  protected obj?: Object3D;
  public args?: T;

  constructor(protected parent: ThWrapperBase<any>) {
    console.log('in wrapper');
  }
  ngOnInit(): void {
    if (!this.obj) {
      this.createObject();
    }
  }

  protected createObject(args?: Iterable<any>) {
    this.obj = new (this.getObjectType())(...(args ?? []));
    this.parent.obj?.add(this.obj);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    if (this.obj) {
      return;
    }

    this.createObject(changes['args']?.currentValue);

    for (let key in changes) {
      (this as any)[key] = changes[key].currentValue;
    }
  }

  protected getObjectType(): Type<Object3D> {
    throw new Error('derive me');
  }
}
