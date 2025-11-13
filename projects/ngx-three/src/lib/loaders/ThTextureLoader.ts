import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
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
})
export class ThTextureLoaderPipe extends ThCallbackLoaderBasePipe<Texture> implements PipeTransform {
  protected service = inject(TextureLoaderService);
}

@Directive({
  selector: '[loadTexture]',
})
export class ThTextureLoaderDirective extends ThCallbackLoaderBaseDirective<Texture> {
  protected host = inject<ThTexture<Texture>>(ThTexture, { host: true });
  protected service = inject(TextureLoaderService);
}
