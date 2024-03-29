import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader';
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
export class DDSLoaderService extends ThCallbackLoaderService<CompressedTexture> {
  public clazz = DDSLoader;
}

@Pipe({
  name: 'loadDDSTexture',
  pure: true,
})
export class ThDDSLoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
  constructor(protected service: DDSLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadDDSTexture]',
})
export class ThDDSLoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
  constructor(
    @Host() protected host: ThCompressedTexture,
    protected zone: NgZone,
    protected service: DDSLoaderService,
  ) {
    super(host, zone);
  }
}
