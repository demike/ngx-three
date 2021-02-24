/*
import { Directive, Type } from '@angular/core';
import { Group, Loader, Object3D } from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/ObjLoader';
import { ThLoader } from './ThLoader';

@Directive({
  selector: '[loadOBJ]',
})
// tslint:disable-next-line: directive-class-suffix
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
    // tslint:disable-next-line: semicolon
  };
}
*/
