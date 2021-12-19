import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { CompressedTextureLoader, Texture } from 'three';
import { ThTexture } from '../generated/ThTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from './ThCallbackLoaderBase';

@Injectable({
    providedIn: 'root'
  })
  export class CompressedTextureLoaderService extends ThCallbackLoaderService<CompressedTextureLoader> {
    public clazz = CompressedTextureLoader;
  }

  @Pipe({
    name: 'loadCompressedTexture',
    pure: true
  })
  export class ThCompressedTextureLoaderPipe extends ThCallbackLoaderBasePipe<CompressedTextureLoader> implements PipeTransform {
    constructor(protected service: CompressedTextureLoaderService) {
      super();
    }
  }

  @Directive({
   selector: '[loadCompressedTexture]',
  })
  export class ThCompressedTextureLoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTextureLoader> {
    constructor(@Host() protected host: ThTexture<Texture>, protected zone: NgZone, protected service: CompressedTextureLoaderService) {
      super(host,zone);
    }
  }
