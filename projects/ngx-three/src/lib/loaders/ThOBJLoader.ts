import { Directive, Type } from '@angular/core';
import { Group, Loader, Object3D } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/ObjLoader';
import { OBJLoader2 } from 'three/examples/jsm/loaders/ObjLoader2';
import { ThLoader } from './ThLoader';

@Directive({
  selector: '[loadOBJ]',
})
export class ThOBJLoader extends ThLoader<Group> {
  public readonly LoaderType: Type<Loader> = OBJLoader;
  public loaderFn = async (
    input?: string,
    onProgress?: (progress: ProgressEvent) => void,
    onLoaded?: (result: Group) => void
  ): Promise<Object3D> => {
    if (!input) {
      throw new Error('missing input url');
    }

    const loader = new this.LoaderType();
    const result: Group = await loader.loadAsync(input, onProgress);

    if (onLoaded) {
      onLoaded(result);
    }

    return result;
  };
}

@Directive({
  selector: 'loadOBJ2',
})
export class ThOBJLoader2 extends ThOBJLoader {
  public readonly LoaderType: Type<Loader> = OBJLoader2;
}
