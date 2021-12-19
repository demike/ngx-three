import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';

import { ThObject3D } from '../generated/ThObject3D';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import { Group } from 'three';


@Injectable({
  providedIn: 'root'
})
export class GLTFLoaderService extends ThAsyncLoaderService<OBJLoader> {
  public clazz = OBJLoader;
}

@Pipe({
   name: 'loadObj',
   pure: true
})
export class ThObjLoaderPipe extends ThAsyncLoaderBasePipe<OBJLoader> implements PipeTransform {
    constructor(protected service: GLTFLoaderService) {
      super();
    }
}

@Directive({
  selector: '[loadObj]',
})
export class ThGLTFLoaderDirective extends ThAsyncLoaderBaseDirective<OBJLoader> {
  constructor(@Host() protected host: ThObject3D, protected zone: NgZone, protected service: GLTFLoaderService) {
    super(host,zone);
  }

  protected getRefFromResponse(response: Group) {
      return response;
  }
}



