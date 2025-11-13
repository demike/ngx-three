import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader.js';
import { ThTexture } from '../../generated/ThTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';
import { CompressedTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class KTX2LoaderService extends ThCallbackLoaderService<CompressedTexture> {
  public readonly clazz = KTX2Loader;

  protected transcoderPath = '';

  public setDecoderPath(path: string) {
    this.transcoderPath = path;
  }

  public createLoaderInstance(): KTX2Loader {
    const loader = super.createLoaderInstance() as KTX2Loader;
    loader.setTranscoderPath(this.transcoderPath);
    return loader;
  }
}

@Pipe({
  name: 'loadKTX2Texture',
  pure: true,
})
export class ThKTX2LoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
  protected service = inject(KTX2LoaderService);
}

@Directive({
  selector: '[loadKTX2Texture]',
})
export class ThKTX2LoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
  protected host = inject(ThTexture, { host: true });
  protected service = inject(KTX2LoaderService);
}
