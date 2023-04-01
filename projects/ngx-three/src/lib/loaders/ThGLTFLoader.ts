import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ThObject3D } from '../generated/ThObject3D';
import { DRACOLoaderService } from './compressed-texture/ThDRACOLoader';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';

@Injectable({
  providedIn: 'root'
})
export class GLTFLoaderService extends ThAsyncLoaderService<GLTFLoader> {
  public clazz = GLTFLoader;

  constructor(protected dracoLoaderService: DRACOLoaderService) {
    super();
  }

  public createLoaderInstance(): GLTFLoader {
      const loader = super.createLoaderInstance();
      loader.setDRACOLoader(this.dracoLoaderService.createLoaderInstance());
      return loader;
  }
}

@Pipe({
  name: 'loadGLTF',
  pure: true
})
export class ThGLTFLoaderPipe extends ThAsyncLoaderBasePipe<GLTFLoader> implements PipeTransform {
  constructor(protected service: GLTFLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadGLTF]'
})
export class ThGLTFLoaderDirective extends ThAsyncLoaderBaseDirective<GLTFLoader> {
  constructor(
    @Host() protected host: ThObject3D,
    protected zone: NgZone,
    protected service: GLTFLoaderService,
  ) {
    super(host, zone);
  }

  protected getRefFromResponse(response: GLTF) {
    return response.scene;
  }
}
