import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { KTXLoader } from 'three/examples/jsm/loaders/KTXLoader';
import { ThCompressedTexture } from '../../generated/ThCompressedTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';

@Injectable({
  providedIn: 'root',
})
export class KTXLoaderService extends ThCallbackLoaderService<KTXLoader> {
  public clazz = KTXLoader;
}

@Pipe({
  name: 'loadKTXTexture',
  pure: true,
})
export class ThKTXLoaderPipe extends ThCallbackLoaderBasePipe<KTXLoader> implements PipeTransform {
  constructor(protected service: KTXLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadKTXTexture]',
})
export class ThKTXLoaderDirective extends ThCallbackLoaderBaseDirective<KTXLoader> {
  constructor(
    @Host() protected host: ThCompressedTexture,
    protected zone: NgZone,
    protected service: KTXLoaderService,
  ) {
    super(host, zone);
  }
}
