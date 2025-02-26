import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { Texture, TextureLoader } from 'three';
import { ThTexture } from '../generated/ThTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from './ThCallbackLoaderBase';

@Injectable({
  providedIn: 'root',
})
export class TextureLoaderService extends ThCallbackLoaderService<Texture> {
  public clazz = TextureLoader;
}

@Pipe({
    name: 'loadTexture',
    pure: true,
    standalone: false
})
export class ThTextureLoaderPipe extends ThCallbackLoaderBasePipe<Texture> implements PipeTransform {
  constructor(protected service: TextureLoaderService) {
    super();
  }
}

@Directive({
    selector: '[loadTexture]',
    standalone: false
})
export class ThTextureLoaderDirective extends ThCallbackLoaderBaseDirective<Texture> {
  constructor(
    @Host() protected host: ThTexture<Texture>,
    protected zone: NgZone,
    protected service: TextureLoaderService,
  ) {
    super(host, zone);
  }
}
