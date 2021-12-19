import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader';
import { ThDataTexture } from '../../generated/ThDataTexture';
import {
  ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, ThCallbackLoaderService
} from '../ThCallbackLoaderBase';

@Injectable({
    providedIn: 'root'
  })
  export class EXRLoaderService extends ThCallbackLoaderService<EXRLoader> {
    public clazz = EXRLoader;
  }

  @Pipe({
    name: 'loadEXRTexture',
    pure: true
  })
  export class ThEXRLoaderPipe extends ThCallbackLoaderBasePipe<EXRLoader> implements PipeTransform {
    constructor(protected service: EXRLoaderService) {
      super();
    }
  }

  @Directive({
   selector: '[loadEXRTexture]',
  })
  export class ThEXRLoaderDirective extends ThCallbackLoaderBaseDirective<EXRLoader> {
    constructor(@Host() protected host: ThDataTexture, protected zone: NgZone, protected service: EXRLoaderService) {
      super(host,zone);
    }
  }

