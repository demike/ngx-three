import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { KTX2Loader } from 'three/examples/jsm/loaders/KTX2Loader';
import { ThTexture } from '../../generated/ThTexture';
import { ThCallbackLoaderService, ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe } from '../ThCallbackLoaderBase';

@Injectable({
    providedIn: 'root'
  })
  export class KTX2LoaderService extends ThCallbackLoaderService<KTX2Loader> {
    public readonly clazz = KTX2Loader;

    protected transcoderPath = '';

    public setDecoderPath(path: string) {
      this.transcoderPath = path;
    }

    public createLoaderInstance(): KTX2Loader {
        const loader = super.createLoaderInstance();
        loader.setTranscoderPath(this.transcoderPath);
        return loader;
    }
  }

  @Pipe({
    name: 'loadKTX2Texture',
    pure: true
  })
  export class ThKTX2LoaderPipe extends ThCallbackLoaderBasePipe<KTX2Loader> implements PipeTransform {
    constructor(protected service: KTX2LoaderService) {
      super();
    }
  }

  @Directive({
   selector: '[loadKTX2Texture]',
  })
  export class ThKTX2LoaderDirective extends ThCallbackLoaderBaseDirective<KTX2Loader> {
    constructor(@Host() protected host: ThTexture, protected zone: NgZone, protected service: KTX2LoaderService) {
      super(host,zone);
    }
  }
