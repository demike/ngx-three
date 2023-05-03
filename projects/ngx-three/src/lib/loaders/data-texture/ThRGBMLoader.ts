import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { ThTexture } from '../../generated/ThTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe
} from '../ThCallbackLoaderBase';

@Injectable({
  providedIn: 'root'
})
export class RGBMLoaderService extends ThCallbackLoaderService<RGBMLoader> {
  public clazz = RGBMLoader;
}

@Pipe({
  name: 'loadRGBMTexture',
  pure: true
})
export class ThRGBMLoaderPipe extends ThCallbackLoaderBasePipe<RGBMLoader> implements PipeTransform {
  constructor(protected service: RGBMLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadRGBMTexture]'
})
export class ThRGBMLoaderDirective extends ThCallbackLoaderBaseDirective<RGBMLoader> {
  constructor(@Host() protected host: ThDataTexture, protected zone: NgZone, protected service: RGBMLoaderService) {
    super(host, zone);
  }
}
