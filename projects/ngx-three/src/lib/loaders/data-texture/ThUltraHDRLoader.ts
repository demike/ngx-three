import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { UltraHDRLoader } from 'three/examples/jsm/loaders/UltraHDRLoader';
import {
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
  ThCallbackLoaderService,
} from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class UltraHDRLoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = UltraHDRLoader;
}

@Pipe({
  name: 'loadUltraHDRTexture',
  pure: true,
})
export class ThUltraHDRLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  constructor(protected service: UltraHDRLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadUltraHDRTexture]',
})
export class ThUltraHDRLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  constructor(
    @Host() protected host: ThDataTexture,
    protected zone: NgZone,
    protected service: UltraHDRLoaderService,
  ) {
    super(host, zone);
  }
}
