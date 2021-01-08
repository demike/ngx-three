import {
  ChangeDetectorRef,
  Directive,
  EventEmitter,
  Host,
  Input,
  Output,
} from '@angular/core';
import { Object3D } from 'three';
import { ThObject3D } from '../generated/ThObject3D';
import {
  createLazyObject3DProxy,
  LazyObject3DProxy,
} from './LazyObject3dProxy';

@Directive({
  selector: '[load]',
})
export class ThLoader<T = any> {
  @Input()
  public loaderFn?: (
    input?: string,
    onProgress?: (progress: ProgressEvent) => void,
    onLoaded?: (result: T) => void
  ) => Promise<Object3D>;

  @Input()
  url?: string; //may be an url  // TODO: allow loading of multiple urls;

  protected proxy?: LazyObject3DProxy;

  protected onLoaded$?: EventEmitter<T>;
  protected onProgress$?: EventEmitter<ProgressEvent>;

  constructor(
    @Host() protected host: ThObject3D<any>,
    @Host() protected cdref: ChangeDetectorRef
  ) {
    this.proxy = createLazyObject3DProxy();
    host.obj = this.proxy;
  }

  ngOnInit(): void {
    this.loadAsync();
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
    if (!this.loaderFn) {
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

    let loaderResult: T | undefined = undefined;
    const onLoaded = this.onLoaded$
      ? (result: T) => {
          loaderResult = result;
        }
      : undefined;

    const object = await this.loaderFn(this.url, onProgress, onLoaded);

    this.proxy.applyToObject3D(object);
    this.host.obj = object;
    this.host.parent.obj?.add(object);
    object.updateMatrix();
    object.matrixAutoUpdate = true;
    this.proxy = undefined;
    // this.cdref.detectChanges();

    if (this.onLoaded$ && loaderResult !== undefined) {
      this.onLoaded$?.next(loaderResult);
    }

    return object;
  }
}
