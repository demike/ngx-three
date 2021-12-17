import { Directive, EventEmitter, Host, Input, NgZone, OnInit, Output, PipeTransform, Type } from '@angular/core';
import { Texture } from 'three';
import { ThTexture } from '../generated/ThTexture';



interface CallBackLoader  {
  load( url: string| string[], onLoad?: (...args: any) => void,
  onProgress?: (event: ProgressEvent) => void,
  onError?: (event: ErrorEvent) => void, ): any;
}


export abstract class ThCallbackLoaderService<T extends CallBackLoader>  {
  public abstract clazz: Type<T>;
  load( ...args: Parameters<T['load']>): ReturnType<T['load']> {
    const loader = new this.clazz();
    return loader.load(...args as Parameters<CallBackLoader['load']>);
  }
}


export abstract class ThTextureLoaderBasePipe<T extends CallBackLoader> implements PipeTransform {
  protected abstract service: ThCallbackLoaderService<T>;

  public transform(...args: Parameters<T['load']>) {
          return this.service.load(...args);
  }
}

@Directive({})
export abstract class ThTextureLoaderBaseDirective<T extends CallBackLoader> implements OnInit {
    protected abstract service: ThCallbackLoaderService<T>;


    private initialized = false;
    private _url?: Parameters<T['load']>[0];

    protected onLoaded$?: EventEmitter<ReturnType<T['load']>>;
    protected onProgress$?: EventEmitter<ProgressEvent>;

    @Input()
    set url(url: Parameters<T['load']>[0] | undefined) {
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

    constructor(@Host() protected host: ThTexture<Texture>, protected zone: NgZone) {
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

        const url = this._url;


        const onProgress = this.onProgress$?.observed
          ? (progress: ProgressEvent<EventTarget>) => {
              this.onProgress$?.next(progress);
            }
          : undefined;

        let loaderResult: Texture | undefined;
        const onLoad = this.onLoaded$?.observed
          ? (...args: any) => {
              this.onLoaded$?.next(args[0]);
            }
          : undefined;

        this.host.objRef = this.zone.runOutsideAngular(() =>
            (this.service as ThCallbackLoaderService<CallBackLoader>).load(url, onProgress, onLoad));
    }

}



