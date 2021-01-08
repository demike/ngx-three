import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Type,
} from '@angular/core';
import { isLazyObject3dProxy } from './loaders/LazyObject3dProxy';

@Component({
  selector: 'abs-th-wrapper',
  template: '',
})
export class ThWrapperBase<T, ARGS extends any[]> implements OnChanges, OnInit {
  public obj?: T;

  constructor() {
    // nothing to do
  }

  @Input()
  public args?: ARGS;

  ngOnInit(): void {
    if (!this.obj) {
      this.createThreeInstance();
    }
  }

  protected createThreeInstance(args?: Iterable<any>) {
    this.obj = new (this.getType())(...(args ?? []));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('on changes');
    if (this.obj && !isLazyObject3dProxy(this.obj as any)) {
      //the object is already set and it is no proxy

      // TODO: request animation frame

      return;
    }

    if (changes['obj']?.currentValue) {
      this.obj = changes['obj']?.currentValue;
    } else if (!this.obj) {
      this.createThreeInstance(changes['args']?.currentValue);
    }

    for (let key in changes) {
      (this as any)[key] = changes[key].currentValue;
    }
  }

  protected getType(): Type<T> {
    throw new Error('derive me');
  }
}
