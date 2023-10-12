import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { DDSLoader } from 'three/examples/jsm/loaders/DDSLoader';
import { ThCompressedTexture } from '../../generated/ThCompressedTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';

@Injectable({
  providedIn: 'root',
})
export class DDSLoaderService extends ThCallbackLoaderService<DDSLoader> {
  public clazz = DDSLoader;
}

@Pipe({
  name: 'loadDDSTexture',
  pure: true,
})
export class ThDDSLoaderPipe extends ThCallbackLoaderBasePipe<DDSLoader> implements PipeTransform {
  constructor(protected service: DDSLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadDDSTexture]',
})
export class ThDDSLoaderDirective extends ThCallbackLoaderBaseDirective<DDSLoader> {
  constructor(
    @Host() protected host: ThCompressedTexture,
    protected zone: NgZone,
    protected service: DDSLoaderService,
  ) {
    super(host, zone);
  }
}
