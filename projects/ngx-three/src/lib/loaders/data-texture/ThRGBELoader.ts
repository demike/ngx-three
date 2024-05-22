import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
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
export class RGBELoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = RGBELoader;
}

@Pipe({
  name: 'loadRGBETexture',
  pure: true,
})
export class ThRGBELoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  constructor(protected service: RGBELoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadRGBETexture]',
})
export class ThRGBELoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  constructor(
    @Host() protected host: ThDataTexture,
    protected zone: NgZone,
    protected service: RGBELoaderService,
  ) {
    super(host, zone);
  }
}
