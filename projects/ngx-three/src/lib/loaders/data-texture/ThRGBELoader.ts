import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';
import { ThDataTexture } from '../../generated/ThDataTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';

@Injectable({
  providedIn: 'root',
})
export class RGBELoaderService extends ThCallbackLoaderService<RGBELoader> {
  public clazz = RGBELoader;
}

@Pipe({
  name: 'loadRGBETexture',
  pure: true,
})
export class ThRGBELoaderPipe extends ThCallbackLoaderBasePipe<RGBELoader> implements PipeTransform {
  constructor(protected service: RGBELoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadRGBETexture]',
})
export class ThRGBELoaderDirective extends ThCallbackLoaderBaseDirective<RGBELoader> {
  constructor(
    @Host() protected host: ThDataTexture,
    protected zone: NgZone,
    protected service: RGBELoaderService,
  ) {
    super(host, zone);
  }
}
