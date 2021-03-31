import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, Type } from '@angular/core';
import { LazyObject3DProxy } from 'ngx-three';
import { Observable, ReplaySubject } from 'rxjs';
import { isLazyObject3dProxy } from './loaders/LazyObject3dProxy';
import { isDisposable } from './util';

@Component({
  selector: 'th-abs-wrapper',
  template: ''
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThWrapperBase<T, ARGS extends any[]> implements OnChanges, OnInit, OnDestroy {
  protected _objRef?: T;
  protected _objRef$?: ReplaySubject<T>;

  @Input()
  set objRef(ref: T | undefined) {
    this.applyObjRef(ref);
  }

  get objRef() {
    return this._objRef;
  }

  // emit the changes
  protected updateEmitter?: EventEmitter<SimpleChanges>;

  constructor() {
    // nothing to do
  }

  @Input()
  public args?: ARGS;

  @Output()
  public get onUpdate(): Observable<SimpleChanges> {
    if (!this.updateEmitter) {
      this.updateEmitter = new EventEmitter();
    }
    return this.updateEmitter;
  }

  public get objRef$(): Observable<T> {
    if (!this._objRef$) {
      this._objRef$ = new ReplaySubject(1);
    }
    return this._objRef$;
  }

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

    if (changes.objRef?.currentValue) {
      this.objRef = changes.objRef?.currentValue;
    } else if (!this.objRef) {
      this.createThreeInstance(changes.args?.currentValue);
    }

    // eslint-disable-next-line guard-for-in
    for (const key in changes) {
      (this as any)[key] = changes[key].currentValue;
    }
  }

  // Override this
  protected getType(): Type<any> {
    throw new Error('derive me');
  }

  ngOnDestroy() {
    if (isDisposable(this.objRef)) {
      this.objRef.dispose();
    }
  }

  protected applyObjRef(objRef: T | undefined) {
    this._objRef = objRef;
    this.emitObjRefChange();
  }

  protected emitObjRefChange() {
    // TODO only emit change if _objRef is no proxy,
    // and/or trigger emit over objRef event emitter
    if (this._objRef$) {
      this._objRef$.next(this._objRef);
    }
  }
}
