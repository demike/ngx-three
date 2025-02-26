import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
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
    standalone: false
})
export class ThKTXLoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
  constructor(protected service: KTXLoaderService) {
    super();
  }
}

@Directive({
    selector: '[loadKTXTexture]',
    standalone: false
})
export class ThKTXLoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
  constructor(
    @Host() protected host: ThCompressedTexture,
    protected zone: NgZone,
    protected service: KTXLoaderService,
  ) {
    super(host, zone);
  }
}
