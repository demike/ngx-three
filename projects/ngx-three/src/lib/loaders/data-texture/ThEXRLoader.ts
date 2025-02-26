import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { ThDataTexture } from '../../generated/ThDataTexture';
import {
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
  ThCallbackLoaderService,
} from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class EXRLoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = EXRLoader;
}

@Pipe({
    name: 'loadEXRTexture',
    pure: true,
    standalone: false
})
export class ThEXRLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  constructor(protected service: EXRLoaderService) {
    super();
  }
}

@Directive({
    selector: '[loadEXRTexture]',
    standalone: false
})
export class ThEXRLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  constructor(
    @Host() protected host: ThDataTexture,
    protected zone: NgZone,
    protected service: EXRLoaderService,
  ) {
    super(host, zone);
  }
}
