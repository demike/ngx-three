import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
} from '@angular/core';
import { Object3D, Vector3 } from 'three';
@Component({
  selector: 'abs-th-wrapper',
  template: '',
})
export class ThWrapperBase<T extends any[]> implements OnChanges, OnInit {
  public obj?: Object3D;

  @Input()
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
    this.obj = new (this.getType())(...(args ?? []));
    this.parent.obj?.add(this.obj);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes');
    if (this.obj) {
      return;
    }

    if (changes['obj']?.currentValue) {
      this.obj = changes['obj']?.currentValue;
    } else {
      this.createObject(changes['args']?.currentValue);
    }

    for (let key in changes) {
      (this as any)[key] = changes[key].currentValue;
    }
  }

  protected getType(): Type<Object3D> {
    throw new Error('derive me');
  }

  // object 3d methods
  @Input()
  public set lookAt(vector: Vector3 | [x: number, y?: number, z?: number]) {
    if (!this.obj) {
      return;
    }
    if (Array.isArray(vector)) {
      this.obj.lookAt(...vector);
    } else {
      this.obj.lookAt(vector);
    }
  }
}
