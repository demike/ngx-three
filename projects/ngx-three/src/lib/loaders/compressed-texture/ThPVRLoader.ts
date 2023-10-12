import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader';
import { ThCompressedTexture } from '../../generated/ThCompressedTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';

@Injectable({
  providedIn: 'root',
})
export class PVRLoaderService extends ThCallbackLoaderService<PVRLoader> {
  public clazz = PVRLoader;
}

@Pipe({
  name: 'loadPVRTexture',
  pure: true,
})
export class ThPVRLoaderPipe extends ThCallbackLoaderBasePipe<PVRLoader> implements PipeTransform {
  constructor(protected service: PVRLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadPVRTexture]',
})
export class ThPVRLoaderDirective extends ThCallbackLoaderBaseDirective<PVRLoader> {
  constructor(
    @Host() protected host: ThCompressedTexture,
    protected zone: NgZone,
    protected service: PVRLoaderService,
  ) {
    super(host, zone);
  }
}
