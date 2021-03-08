import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  Type,
} from '@angular/core';
import { Observable } from 'rxjs';
import { isLazyObject3dProxy } from './loaders/LazyObject3dProxy';

@Component({
  selector: 'th-abs-wrapper',
  template: '',
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThWrapperBase<T, ARGS extends any[]> implements OnChanges, OnInit {
  public obj?: T;

  // emit the changes
  protected updateEmitter?: EventEmitter<SimpleChanges>;

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
      // the object is already set and it is no proxy

      // emit the changes
      if (this.updateEmitter) {
        this.updateEmitter.next(changes);
      }

      // TODO: request animation frame

      return;
    }

    if (changes.obj?.currentValue) {
      this.obj = changes.obj?.currentValue;
    } else if (!this.obj) {
      this.createThreeInstance(changes.args?.currentValue);
    }

    // eslint-disable-next-line guard-for-in
    for (const key in changes) {
      (this as any)[key] = changes[key].currentValue;
    }
  }

  protected getType(): Type<T> {
    throw new Error('derive me');
  }

  @Output()
  public get onUpdate(): Observable<SimpleChanges> {
    if (!this.updateEmitter) {
      this.updateEmitter = new EventEmitter();
    }
    return this.updateEmitter;
  }
}
