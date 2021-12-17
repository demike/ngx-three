import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { Texture, TextureLoader } from 'three';
import { ThTexture } from '../generated/ThTexture';
import { ThCallbackLoaderService, ThTextureLoaderBaseDirective, ThTextureLoaderBasePipe } from './ThTextureLoaderBase';


@Injectable({
  providedIn: 'root'
})
export class TextureLoaderService extends ThCallbackLoaderService<TextureLoader> {
  public clazz = TextureLoader;
}

@Pipe({
   name: 'loadTexture',
   pure: true
})
export class ThTextureLoaderPipe extends ThTextureLoaderBasePipe<TextureLoader> implements PipeTransform {
    constructor(protected service: TextureLoaderService) {
      super();
    }
}

@Directive({
  selector: '[loadTexture]',
})
export class ThTextureLoaderDirective extends ThTextureLoaderBaseDirective<TextureLoader> {
  constructor(@Host() protected host: ThTexture<Texture>, protected zone: NgZone, protected service: TextureLoaderService) {
    super(host,zone);
  }
}



