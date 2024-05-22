import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader.js';
import { ThCompressedTexture } from '../../generated/ThCompressedTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';
import { CompressedTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class PVRLoaderService extends ThCallbackLoaderService<CompressedTexture> {
  public clazz = PVRLoader;
}

@Pipe({
  name: 'loadPVRTexture',
  pure: true,
})
export class ThPVRLoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
  constructor(protected service: PVRLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadPVRTexture]',
})
export class ThPVRLoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
  constructor(
    @Host() protected host: ThCompressedTexture,
    protected zone: NgZone,
    protected service: PVRLoaderService,
  ) {
    super(host, zone);
  }
}
