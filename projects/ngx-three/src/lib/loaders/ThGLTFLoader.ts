import { Directive } from '@angular/core';
import { Object3D } from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { ThLoader } from './ThLoader';

@Directive({
  selector: '[loadGLTF]',
})
// tslint:disable-next-line: directive-class-suffix
export class ThGLTFLoader extends ThLoader<GLTF> {
  public loaderFn = async (
    input?: string,
    onProgress?: (progress: ProgressEvent) => void,
    onLoaded?: (result: GLTF) => void
  ): Promise<Object3D> => {
    if (!input) {
      throw new Error('missing input url');
    }

    const loader = new GLTFLoader();
    const result: GLTF = await loader.loadAsync(input, onProgress);

    if (onLoaded) {
      onLoaded(result);
    }

    return result.scene;
  };
}
