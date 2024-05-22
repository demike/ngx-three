import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader.js';
import { ThDataTexture } from '../../generated/ThDataTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class RGBMLoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = RGBMLoader;
}

@Pipe({
  name: 'loadRGBMTexture',
  pure: true,
})
export class ThRGBMLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  constructor(protected service: RGBMLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadRGBMTexture]',
})
export class ThRGBMLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  constructor(
    @Host() protected host: ThDataTexture,
    protected zone: NgZone,
    protected service: RGBMLoaderService,
  ) {
    super(host, zone);
  }
}
