import { Directive, EventEmitter, Host, inject, Injectable, Input, NgZone, OnInit, Output, PipeTransform, Type } from '@angular/core';
import { Loader } from 'three';
import { ThAnimationLoopService } from '../renderer/th-animation-loop.service';
import { isObserved } from '../util';
import { createLazyObject3DProxy, LazyObject3DProxy } from './LazyObject3dProxy';

type AsyncLoader = Pick<Loader, 'loadAsync'>;
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

@Injectable()
export abstract class ThAsyncLoaderService<T extends AsyncLoader> {
  public abstract clazz: Type<T>;
  load(...args: Parameters<T['loadAsync']>): ReturnType<T['loadAsync']> {
    const loader = new this.clazz();
    return loader.loadAsync(...(args as Parameters<AsyncLoader['loadAsync']>)) as ReturnType<T['loadAsync']>;
  }
}

export abstract class ThAsyncLoaderBasePipe<T extends AsyncLoader> implements PipeTransform {
  protected abstract service: ThAsyncLoaderService<T>;
  private animationLoop = inject(ThAnimationLoopService);
  constructor() {}

  public transform(...args: Parameters<T['loadAsync']>) {
    return this.service.load(...args).then(response => { this.animationLoop.requestAnimationFrame(); return response;});
  }
}

@Directive({})
export abstract class ThAsyncLoaderBaseDirective<T extends AsyncLoader> implements OnInit {
  protected abstract service: ThAsyncLoaderService<T>;

  protected abstract getRefFromResponse(response: Awaited<ReturnType<T['loadAsync']>>): any;

  protected initialized = false;
  protected _url?: Parameters<T['loadAsync']>[0];

  protected onLoaded$?: EventEmitter<Awaited<ReturnType<T['loadAsync']>>>;
  protected onProgress$?: EventEmitter<ProgressEvent>;
  protected proxy: LazyObject3DProxy;

  protected animationLoop = inject(ThAnimationLoopService);

  @Input()
  set url(url: Parameters<T['loadAsync']>[0] | undefined) {
    this._url = url;
    console.log('got some model');
    this.load();
  }

  get url() {
    return this._url;
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

  constructor(@Host() protected host: { objRef: any }, protected zone: NgZone) {
    this.proxy = createLazyObject3DProxy();
    host.objRef = this.proxy;
  }

  ngOnInit(): void {
    this.initialized = true;
    this.load();
    // this.zone.runOutsideAngular(() => );
  }

  protected async load() {
    if (!this.initialized) {
      return;
    }

    if (this._url === undefined) {
      throw new Error('missing url');
    }

    if (!this.proxy) {
      return;
    }

    const url = this._url;

    const onProgress = isObserved(this.onProgress$)
      ? (progress: ProgressEvent<EventTarget>) => {
          this.zone.run(() => {
            this.onProgress$?.next(progress);
          });
        }
      : undefined;

    const result = await this.zone.runOutsideAngular(() => (this.service as ThAsyncLoaderService<AsyncLoader>).load(url, onProgress));

    this.animationLoop.requestAnimationFrame();
    this.proxy.objRef = this.getRefFromResponse(result);
    // add the new object to the parent and
    // emit a loaded event directly on the three.js object and on objRef$
    this.host.objRef = this.proxy;

    if (this.onLoaded$ && result !== undefined) {
      this.zone.run(() => this.onLoaded$?.next(result));
    }
  }
}
