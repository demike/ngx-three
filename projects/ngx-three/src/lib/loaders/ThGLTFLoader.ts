import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoaderService } from './compressed-texture/ThDRACOLoader';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';

@Injectable({
  providedIn: 'root',
})
export class GLTFLoaderService extends ThAsyncLoaderService<GLTF> {
  protected dracoLoaderService = inject(DRACOLoaderService);

  public clazz = GLTFLoader;

  public createLoaderInstance(): GLTFLoader {
    const loader = super.createLoaderInstance() as GLTFLoader;
    loader.setDRACOLoader(this.dracoLoaderService.createLoaderInstance());
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
