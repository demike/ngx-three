import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';

import { PLYLoader } from 'three/examples/jsm/loaders/PLYLoader.js';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import { BufferGeometry } from 'three';
import { ThBufferGeometry } from '../generated';
import { isObserved } from '../util';

@Injectable({
  providedIn: 'root',
})
export class PLYLoaderService extends ThAsyncLoaderService<BufferGeometry> {
  public clazz = PLYLoader;
}

@Pipe({
  name: 'loadPLY',
  pure: true,
  standalone: false,
})
export class ThPLYLoaderPipe extends ThAsyncLoaderBasePipe<BufferGeometry> implements PipeTransform {
  protected service = inject(PLYLoaderService);
}

@Directive({
  selector: '[loadPLY]',
  standalone: false,
})
export class ThPLYLoaderDirective extends ThAsyncLoaderBaseDirective<BufferGeometry> {
  protected injectHost() {
    return inject(ThBufferGeometry, { host: true });
  }

  protected service = inject(PLYLoaderService);

  protected getRefFromResponse(response: BufferGeometry) {
    response.computeVertexNormals();
    return response;
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

    const result = await this.zone.runOutsideAngular(() => this.service.load(url, onProgress));

    // add the new object to the parent and
    // emit a loaded event directly on the three.js object and on objRef$
    this._host.objRef = this.getRefFromResponse(result);

    if (this.onLoaded$ && result !== undefined) {
      this.onLoaded$?.next(result);
    }
  }
}
