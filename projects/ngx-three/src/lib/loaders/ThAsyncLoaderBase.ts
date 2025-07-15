import {
  Directive,
  EventEmitter,
  inject,
  Injectable,
  Input,
  NgZone,
  OnInit,
  Output,
  PipeTransform,
} from '@angular/core';
import { Loader } from 'three';
import { ThAnimationLoopService } from '../renderer/th-animation-loop.service';
import { isObserved } from '../util';
import { createLazyObject3DProxy, LazyObject3DProxy } from './LazyObject3dProxy';
import { ThLoader } from './ThLoaderBase';
import { ThObject3D } from '../generated';

type Awaited<T> = T extends PromiseLike<infer U> ? U : T;

@Injectable()
export abstract class ThAsyncLoaderService<TData = unknown, TUrl extends string | string[] = string> extends ThLoader<
  TData,
  TUrl
> {
  public load(...args: Parameters<Loader<TData, TUrl>['loadAsync']>): ReturnType<Loader<TData, TUrl>['loadAsync']> {
    const loader = this.createLoaderInstance();
    return loader.loadAsync(...args);
  }
}

export abstract class ThAsyncLoaderBasePipe<TData = unknown, TUrl extends string | string[] = string>
  implements PipeTransform
{
  protected abstract service: ThAsyncLoaderService<TData, TUrl>;
  private animationLoop = inject(ThAnimationLoopService);
  constructor() {}

  public transform(...args: Parameters<Loader<TData, TUrl>['loadAsync']>) {
    return this.service.load(...args).then((response) => {
      this.animationLoop.requestAnimationFrame();
      return response;
    });
  }
}

@Directive({
  standalone: false,
})
export abstract class ThAsyncLoaderBaseDirective<TData = unknown, TUrl extends string | string[] = string>
  implements OnInit
{
  /**
   * injector function to get the host object reference.
   *
   * Override this method in dervied classes if you want to inject other host element types (e.g. ThBufferGeometry, etc.), default is ThOBject3D.
   * always implement as a function not as a fat arrow function, else it will not be available in the constructor.
   */
  protected injectHost(): { objRef: any } {
    return inject(ThObject3D, { host: true });
  }

  /**
   * Derived directive should inject the (derived) service.
   */
  protected abstract service: ThAsyncLoaderService<TData, TUrl>;

  protected abstract getRefFromResponse(response: Awaited<ReturnType<Loader<TData, TUrl>['loadAsync']>>): any;

  protected zone = inject(NgZone);
  protected animationLoop = inject(ThAnimationLoopService);
  protected _host: { objRef: any };

  protected initialized = false;
  protected _url?: Parameters<Loader<TData, TUrl>['loadAsync']>[0];

  protected onLoaded$?: EventEmitter<Awaited<ReturnType<Loader<TData, TUrl>['loadAsync']>>>;
  protected onProgress$?: EventEmitter<ProgressEvent>;
  protected proxy: LazyObject3DProxy;

  @Input()
  set url(url: Parameters<Loader<TData, TUrl>['loadAsync']>[0] | undefined) {
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

  constructor() {
    this.proxy = createLazyObject3DProxy();
    this._host = this.injectHost();
    this._host.objRef = this.proxy;
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

    const result = await this.zone.runOutsideAngular(() =>
      (this.service as ThAsyncLoaderService<TData, TUrl>).load(url, onProgress),
    );

    this.animationLoop.requestAnimationFrame();
    this.proxy.objRef = this.getRefFromResponse(result);
    // add the new object to the parent and
    // emit a loaded event directly on the three.js object and on objRef$
    this._host.objRef = this.proxy;

    if (this.onLoaded$ && result != null) {
      this.zone.run(() => this.onLoaded$?.next(result));
    }
  }
}
