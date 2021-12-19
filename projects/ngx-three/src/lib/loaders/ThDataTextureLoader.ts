import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { DataTextureLoader, Texture } from 'three';
import { ThTexture } from '../generated/ThTexture';
import {
    ThCallbackLoaderService,
    ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe
} from './ThCallbackLoaderBase';

@Injectable({
    providedIn: 'root'
  })
  export class DataTextureLoaderService extends ThCallbackLoaderService<DataTextureLoader> {
    public clazz = DataTextureLoader;
  }

  @Pipe({
    name: 'loadCubeTexture',
    pure: true
  })
  export class ThDataTextureLoaderPipe extends ThCallbackLoaderBasePipe<DataTextureLoader> implements PipeTransform {
    constructor(protected service: DataTextureLoaderService) {
      super();
    }
  }

  @Directive({
   selector: '[loadCubeTexture]',
  })
  export class ThDataTextureLoaderDirective extends ThCallbackLoaderBaseDirective<DataTextureLoader> {
    constructor(@Host() protected host: ThTexture<Texture>, protected zone: NgZone, protected service: DataTextureLoaderService) {
      super(host,zone);
    }
  }

