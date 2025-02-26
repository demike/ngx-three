import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  Type,
} from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { EventDispatcher, EventListener, Object3D, Object3DEventMap, Event } from 'three';
import { isLazyObject3dProxy } from './loaders/LazyObject3dProxy';
import { ThWrapperLifeCycle } from './ThWrapperLifeCycle';
import { isDisposable } from './util';

export interface ThWrapperEventMap<T = Object3D> extends Object3DEventMap {
  changes: { changes: SimpleChanges };
  loaded: { object: T };
  removed: { object: T };
}

@Component({
    selector: 'th-abs-wrapper',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ThWrapperBase<T, ARGS = unknown> implements ThWrapperLifeCycle, OnChanges, OnInit, OnDestroy {
  protected _objRef?: T;
  protected _objRef$?: ReplaySubject<T>;

  @Input()
  public autoAddToParent = true;

  @Input()
  public autoDispose = true;

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

  addToParent(): void {
    // nothing to do, implement it in a derived class
  }
  removeFromParent(): void {
    // nothing to do, implement it in a derived class
  }

  @Input()
  public args?: ARGS;

  protected eventListeners?: { [key: Event['type']]: EventListener<Event, Event['type'], T> };
  @Input()
  public set threeEvents(eventMap: { [key: Event['type']]: EventListener<Event, Event['type'], T> } | undefined) {
    this.removeEvents();
    this.eventListeners = eventMap;
    this.applyEvents();
  }

  public get threeEvents() {
    return this.eventListeners;
  }

  @Output()
  public get onUpdate(): Observable<SimpleChanges> {
    if (!this.updateEmitter) {
      this.updateEmitter = new EventEmitter();
    }
    return this.updateEmitter;
  }

  /**
   * emits the last assigned object ref
   */
  @Output()
  public get objRef$(): Observable<T> {
    if (!this._objRef$) {
      this._objRef$ = new ReplaySubject(1);
    }
    return this._objRef$;
  }

  ngOnInit(): void {
    if (!this.objRef) {
      this.objRef = this.createThreeInstance(this.args);
    }
  }

  // Override this
  public getType(): Type<any> {
    throw new Error('derive me');
  }

  public createThreeInstance(args?: unknown) {
    if (Array.isArray(args)) {
      return new (this.getType())(...(args as any[]));
    } else {
      return new (this.getType())(args);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('on changes');
    if (this.objRef && !isLazyObject3dProxy(this.objRef as any)) {
      // the object is already set and it is no proxy

      // emit the changes
      this.emitPropertyChanges(changes);

      // TODO: request animation frame

      return;
    }

    if (!this.objRef) {
      // no object and no proxy is set --> create an instance
      this.objRef = this.createThreeInstance(changes.args?.currentValue);
    }

    // eslint-disable-next-line guard-for-in
    for (const key in changes) {
      (this as any)[key] = changes[key].currentValue;
    }
    this.emitPropertyChanges(changes);
  }

  public disposeObjRef() {
    if (isDisposable(this.objRef)) {
      this.objRef.dispose();
    }
  }

  ngOnDestroy() {
    this.removeEvents();
    this.removeFromParent();

    if (this.autoDispose) {
      this.disposeObjRef();
    }
    this.emitRemoveEvent();
  }

  protected applyObjRef(objRef: T | undefined) {
    if (this._objRef !== objRef) {
      this.removeFromParent();
      this._objRef = objRef;
      if (this.autoAddToParent) {
        this.addToParent();
      }
    }
    this.emitObjRefChange();
  }

  protected emitObjRefChange() {
    // only emit change if _objRef is no proxy,
    // and trigger emit over objRef event emitter
    if (this._objRef && !isLazyObject3dProxy(this._objRef as any)) {
      (this._objRef as unknown as Object3D<ThWrapperEventMap<T>>).dispatchEvent?.({
        type: 'loaded',
        object: this._objRef,
      });
      if (this._objRef$) {
        this._objRef$.next(this._objRef);
      }
    }
  }

  protected emitRemoveEvent() {
    // only emit change if _objRef is no proxy,
    // and trigger emit over objRef event emitter
    if (this._objRef && !isLazyObject3dProxy(this._objRef as any)) {
      (this._objRef as unknown as Object3D<ThWrapperEventMap<T>>).dispatchEvent?.({
        type: 'removed',
        object: this._objRef,
      });
      if (this._objRef$) {
        this._objRef$.next(this._objRef);
      }
    }
  }

  protected emitPropertyChanges(changes: SimpleChanges) {
    if (this._objRef) {
      (this._objRef as unknown as EventDispatcher<ThWrapperEventMap<T>>).dispatchEvent?.({ type: 'changes', changes });
    }
    if (this.updateEmitter) {
      this.updateEmitter.next(changes);
    }
  }

  private removeEvents() {
    if (this.eventListeners && this._objRef) {
      for (const entry of Object.entries(this.eventListeners)) {
        (this._objRef as any).removeEventListener(entry[0], entry[1]);
      }
      this.eventListeners = undefined;
    }
  }

  private applyEvents() {
    if (this.eventListeners && this._objRef) {
      for (const entry of Object.entries(this.eventListeners)) {
        (this._objRef as any).addEventListener(entry[0], entry[1]);
      }
    }
  }
}
