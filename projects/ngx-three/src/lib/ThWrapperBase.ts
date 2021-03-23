import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { isLazyObject3dProxy } from './loaders/LazyObject3dProxy';
import { isDisposable } from './util';

@Component({
  selector: 'th-abs-wrapper',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThWrapperBase<T, ARGS extends any[]> implements OnChanges, OnInit, OnDestroy {
  public objRef?: T;

  // emit the changes
  protected updateEmitter?: EventEmitter<SimpleChanges>;

  constructor() {
    // nothing to do
  }

  @Input()
  public args?: ARGS;

  ngOnInit(): void {
    if (!this.objRef) {
      this.createThreeInstance();
    }
  }

  protected createThreeInstance(args?: Iterable<any>) {
    this.objRef = new (this.getType())(...(args ?? []));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('on changes');
    if (this.objRef && !isLazyObject3dProxy(this.objRef as any)) {
      // the object is already set and it is no proxy

      // emit the changes
      if (this.updateEmitter) {
        this.updateEmitter.next(changes);
      }

      // TODO: request animation frame

      return;
    }

    if (changes.obj?.currentValue) {
      this.objRef = changes.obj?.currentValue;
    } else if (!this.objRef) {
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

  ngOnDestroy() {
    if (isDisposable(this.objRef)) {
      this.objRef.dispose();
    }
  }
}
