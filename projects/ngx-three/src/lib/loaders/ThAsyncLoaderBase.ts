import { Directive, EventEmitter, Host, Input, NgZone, OnInit, Output, PipeTransform, Type } from '@angular/core';
import { ThObject3D } from 'dist/ngx-three/public-api';
import { Loader, Texture } from 'three';
import { ThTexture } from '../generated/ThTexture';
import { createLazyObject3DProxy, LazyObject3DProxy } from './LazyObject3dProxy';



type AsyncLoader = Pick<Loader, 'loadAsync'>;
type Awaited<T> = T extends PromiseLike<infer U> ? U : T;


export abstract class ThAsyncLoaderService<T extends AsyncLoader>  {
  public abstract clazz: Type<T>;
  load( ...args: Parameters<T['loadAsync']>): ReturnType<T['loadAsync']> {
    const loader = new this.clazz();
    return loader.loadAsync(...args as Parameters<AsyncLoader['loadAsync']>) as ReturnType<T['loadAsync']>;
  }
}


export abstract class ThAsyncLoaderBasePipe<T extends AsyncLoader> implements PipeTransform {
  protected abstract service: ThAsyncLoaderService<T>;

  public transform(...args: Parameters<T['loadAsync']>) {
          return this.service.load(...args);
  }
}

@Directive({})
export abstract class ThAsyncLoaderBaseDirective<T extends AsyncLoader> implements OnInit {
    protected abstract service: ThAsyncLoaderService<T>;


    protected abstract getRefFromResponse(response: Awaited<ReturnType<T['loadAsync']>>): any;


    private initialized = false;
    private _url?: Parameters<T['loadAsync']>[0];

    protected onLoaded$?: EventEmitter<ReturnType<T['loadAsync']>>;
    protected onProgress$?: EventEmitter<ProgressEvent>;
    protected proxy: LazyObject3DProxy;


    @Input()
    set url(url: Parameters<T['loadAsync']>[0] | undefined) {
      this._url = url;
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

    constructor(@Host() protected host: { objRef: any}, protected zone: NgZone) {
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

        if(this._url === undefined) {
            throw new Error('missing url');
        }

        if (!this.proxy) {
          return;
        }

        const url = this._url;


        const onProgress = this.onProgress$?.observed
          ? (progress: ProgressEvent<EventTarget>) => {
              this.onProgress$?.next(progress);
            }
          : undefined;

        const result = await this.zone.runOutsideAngular(() =>
            (this.service as ThAsyncLoaderService<AsyncLoader>).load(url, onProgress));

        this.proxy.objRef = this.getRefFromResponse(result);
        // add the new object to the parent and
        // emit a loaded event directly on the three.js object and on objRef$
        this.host.objRef = this.proxy;

        if (this.onLoaded$ && result !== undefined) {
        this.onLoaded$?.next(result);
    }

    }

}



