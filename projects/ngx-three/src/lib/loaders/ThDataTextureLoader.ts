import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { DataTextureLoader, Texture } from 'three';
import { ThTexture } from '../generated/ThTexture';
import {
    ThCallbackLoaderService,
    ThTextureLoaderBaseDirective, ThTextureLoaderBasePipe
} from './ThTextureLoaderBase';

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
  export class ThDataTextureLoaderPipe extends ThTextureLoaderBasePipe<DataTextureLoader> implements PipeTransform {
    constructor(protected service: DataTextureLoaderService) {
      super();
    }
  }

  @Directive({
   selector: '[loadCubeTexture]',
  })
  export class ThDataTextureLoaderDirective extends ThTextureLoaderBaseDirective<DataTextureLoader> {
    constructor(@Host() protected host: ThTexture<Texture>, protected zone: NgZone, protected service: DataTextureLoaderService) {
      super(host,zone);
    }
  }

