import { Directive, EventEmitter, Host, Input, NgZone, OnInit, Output, PipeTransform } from '@angular/core';
import { Loader } from 'three';
import { isObserved } from '../util';
import { ThLoader } from './ThLoaderBase';

export abstract class ThCallbackLoaderService<
  TData = unknown,
  TUrl extends string | string[] = string,
> extends ThLoader<TData, TUrl> {
  public load(...args: Parameters<Loader<TData, TUrl>['load']>): ReturnType<Loader<TData, TUrl>['load']> {
    const loader = this.createLoaderInstance();
    return loader.load(...args);
  }
}

export abstract class ThCallbackLoaderBasePipe<TData = unknown, TUrl extends string | string[] = string>
  implements PipeTransform
{
  protected abstract service: ThCallbackLoaderService<TData, TUrl>;

  public transform(...args: Parameters<Loader<TData, TUrl>['load']>) {
    return this.service.load(...args);
  }
}

@Directive({})
export abstract class ThCallbackLoaderBaseDirective<TData = unknown, TUrl extends string | string[] = string>
  implements OnInit
{
  protected abstract service: ThCallbackLoaderService<TData, TUrl>;

  private initialized = false;
  private _url?: TUrl;

  protected onLoaded$?: EventEmitter<ReturnType<Loader<TData, TUrl>['load']>>;
  protected onProgress$?: EventEmitter<ProgressEvent>;

  @Input()
  set url(url: TUrl | undefined) {
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

  constructor(
    @Host() protected host: { objRef: any },
    protected zone: NgZone,
  ) {}

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

    const url = this._url;

    const onProgress = isObserved(this.onProgress$)
      ? (progress: ProgressEvent<EventTarget>) => {
          this.onProgress$?.next(progress);
        }
      : undefined;

    const onLoad = isObserved(this.onLoaded$)
      ? (...args: any) => {
          this.onLoaded$?.next(args[0]);
        }
      : undefined;

    this.host.objRef = this.zone.runOutsideAngular(() =>
      (this.service as ThCallbackLoaderService<TData, TUrl>).load(url, onLoad!, onProgress),
    );
  }
}
