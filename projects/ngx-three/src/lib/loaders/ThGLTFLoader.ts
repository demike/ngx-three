import { Directive, Injectable, InjectionToken, Pipe, PipeTransform, inject } from '@angular/core';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoaderService } from './compressed-texture/ThDRACOLoader';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import type { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const MESHOPT_DECODER_TOKEN = new InjectionToken<typeof MeshoptDecoder>('MeshoptDecoderToken');

/**
 * use this function to provide a MeshoptDecoder implementation to the GLTFLoaderService
 * @param decoder
 * @returns
 */
export function provideMeshoptDecoder(decoder: typeof MeshoptDecoder) {
  return {
    provide: MESHOPT_DECODER_TOKEN,
    useValue: decoder,
  };
}

@Injectable({
  providedIn: 'root',
})
export class GLTFLoaderService extends ThAsyncLoaderService<GLTF> {
  protected dracoLoaderService = inject(DRACOLoaderService);
  protected meshoptDecoder = inject(MESHOPT_DECODER_TOKEN, { optional: true });
  public clazz = GLTFLoader;

  public createLoaderInstance(): GLTFLoader {
    const loader = super.createLoaderInstance() as GLTFLoader;
    loader.setDRACOLoader(this.dracoLoaderService.createLoaderInstance());
    if (this.meshoptDecoder) {
      loader.setMeshoptDecoder(this.meshoptDecoder);
    }
    return loader;
  }
}

@Pipe({
  name: 'loadGLTF',
  pure: true,
})
export class ThGLTFLoaderPipe extends ThAsyncLoaderBasePipe<GLTF> implements PipeTransform {
  protected service = inject(GLTFLoaderService);
}

@Directive({
  selector: '[loadGLTF]',
})
export class ThGLTFLoaderDirective extends ThAsyncLoaderBaseDirective<GLTF> {
  protected service = inject(GLTFLoaderService);

  protected getRefFromResponse(response: GLTF) {
    return response.scene;
  }
}
