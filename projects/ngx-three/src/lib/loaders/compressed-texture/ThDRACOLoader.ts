import { Injectable } from '@angular/core';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { ThCallbackLoaderService } from '../ThCallbackLoaderBase';

export interface DRACODecoderConfig {
  type: 'js'| 'wasm';
}

@Injectable({
    providedIn: 'root'
  })
  export class DRACOLoaderService extends ThCallbackLoaderService<DRACOLoader> {
    public readonly clazz = DRACOLoader;
    protected decoderPath = '';
    protected decoderConfig?: DRACODecoderConfig;
    protected reuseInstance = true;

    protected instance?: DRACOLoader;

    public setDecoderPath(path: string) {
      this.decoderPath = path;
    }

    public setDecoderConfig(config: DRACODecoderConfig) {
      this.decoderConfig = config;
    }

    public setReuseInstance(reuse: boolean) {
      this.reuseInstance = reuse;
    }

    public createLoaderInstance(): DRACOLoader {
      if (this.reuseInstance && this.instance) {
          return this.instance;
      }

      const loader = super.createLoaderInstance();
      loader.setDecoderPath(this.decoderPath);
      if(this.decoderConfig) {
        loader.setDecoderConfig(this.decoderConfig);
      }

      if (this.reuseInstance) {
        this.instance = loader;
      }
      
      return loader;
    }
  }
