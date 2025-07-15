import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { CubeTexture, CubeTextureLoader, Texture } from 'three';
import { ThTexture } from '../generated/ThTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from './ThCallbackLoaderBase';

@Injectable({
  providedIn: 'root',
})
export class CubeTextureLoaderService extends ThCallbackLoaderService<CubeTexture, string[]> {
  public clazz = CubeTextureLoader;
}

@Pipe({
  name: 'loadCubeTexture',
  pure: true,
  standalone: false,
})
export class ThCubeTextureLoaderPipe extends ThCallbackLoaderBasePipe<CubeTexture, string[]> implements PipeTransform {
  protected service = inject(CubeTextureLoaderService);
}

@Directive({
  selector: '[loadCubeTexture]',
  standalone: false,
})
export class ThCubeTextureLoaderDirective extends ThCallbackLoaderBaseDirective<CubeTexture, string[]> {
  protected host = inject<ThTexture<Texture>>(ThTexture, { host: true });
  protected service = inject(CubeTextureLoaderService);
}
