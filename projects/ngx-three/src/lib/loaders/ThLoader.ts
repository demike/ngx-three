import { Directive, EventEmitter, Host, Input, NgZone, OnInit, Output, SimpleChange } from '@angular/core';

import { Object3D } from 'three';
import { ThObject3D } from '../generated/ThObject3D';
import { createLazyObject3DProxy, LazyObject3DProxy } from './LazyObject3dProxy';

@Directive({
  selector: '[load]'
})
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class ThLoader<T = any> implements OnInit {
  private initialized = false;

  private _url?: string;

  @Input()
  public loaderFn?: (input?: string, onProgress?: (progress: ProgressEvent) => void, onLoaded?: (result: T) => void) => Promise<Object3D>;

  @Input()
  set url(url: string | undefined) {
    this._url = url;
    this.loadAsync();
  }

  get url() {
    return this._url;
  }

  protected proxy: LazyObject3DProxy;

  protected onLoaded$?: EventEmitter<T>;
  protected onProgress$?: EventEmitter<ProgressEvent>;

  constructor(@Host() protected host: ThObject3D<any>, protected zone: NgZone) {
    this.proxy = createLazyObject3DProxy();
    host.objRef = this.proxy;
  }

  ngOnInit(): void {
    this.initialized = true;
    this.loadAsync();
    // this.zone.runOutsideAngular(() => );
  }

  @Output() get onLoaded() {
    if (!this.onLoaded$) {
      this.onLoaded$ = new EventEmitter();
    }
    return this.onLoaded$;
  }

  @Output() get onProgress() {
    if (!this.onProgress$) {
      this.onProgress$ = new EventEmitter();
    }
    return this.onProgress$;
  }

  protected async loadAsync() {
    if (!this.initialized) {
      return;
    }
    const loaderFn = this.loaderFn;
    if (!loaderFn) {
      throw new Error('Missing loader Function ( @Input() loaderFn )');
    }

    if (!this.proxy) {
      return;
    }

    const onProgress = this.onProgress$
      ? (progress: ProgressEvent<EventTarget>) => {
          this.onProgress$?.next(progress);
        }
      : undefined;

    let loaderResult: T | undefined;
    const onLoaded = this.onLoaded$
      ? (result: T) => {
          loaderResult = result;
        }
      : undefined;

    const object = await this.zone.runOutsideAngular(() => loaderFn(this.url, onProgress, onLoaded));

    this.proxy.objRef = object;
    if (!this.proxy.parent) {
      this.host.parent.objRef?.add(this.proxy);
    }

    if (this.onLoaded$ && loaderResult !== undefined) {
      this.onLoaded$?.next(loaderResult);
    }

    return object;
  }
}
