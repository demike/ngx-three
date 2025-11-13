import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader.js';
import { ThCompressedTexture } from '../../generated/ThCompressedTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';
import { CompressedTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class KTXLoaderService extends ThCallbackLoaderService<CompressedTexture> {
  public clazz = KTXLoader;
}

@Pipe({
  name: 'loadKTXTexture',
  pure: true,
})
export class ThKTXLoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
  protected service = inject(KTXLoaderService);
}

@Directive({
  selector: '[loadKTXTexture]',
})
export class ThKTXLoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
  protected host = inject(ThCompressedTexture, { host: true });
  protected service = inject(KTXLoaderService);
}
