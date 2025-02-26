import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
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
    standalone: false
})
export class ThCubeTextureLoaderPipe extends ThCallbackLoaderBasePipe<CubeTexture, string[]> implements PipeTransform {
  constructor(protected service: CubeTextureLoaderService) {
    super();
  }
}

@Directive({
    selector: '[loadCubeTexture]',
    standalone: false
})
export class ThCubeTextureLoaderDirective extends ThCallbackLoaderBaseDirective<CubeTexture, string[]> {
  constructor(
    @Host() protected host: ThTexture<Texture>,
    protected zone: NgZone,
    protected service: CubeTextureLoaderService,
  ) {
    super(host, zone);
  }
}
