import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { CompressedTextureLoader, Texture } from 'three';
import { ThTexture } from '../generated/ThTexture';
import { ThCallbackLoaderService, ThTextureLoaderBaseDirective, ThTextureLoaderBasePipe } from './ThTextureLoaderBase';

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
  export class ThCompressedTextureLoaderPipe extends ThTextureLoaderBasePipe<CompressedTextureLoader> implements PipeTransform {
    constructor(protected service: CompressedTextureLoaderService) {
      super();
    }
  }

  @Directive({
   selector: '[loadCompressedTexture]',
  })
  export class ThCompressedTextureLoaderDirective extends ThTextureLoaderBaseDirective<CompressedTextureLoader> {
    constructor(@Host() protected host: ThTexture<Texture>, protected zone: NgZone, protected service: CompressedTextureLoaderService) {
      super(host,zone);
    }
  }
