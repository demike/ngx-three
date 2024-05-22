import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';

import { ThObject3D } from '../generated/ThObject3D';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import { Group } from 'three';

@Injectable({
  providedIn: 'root',
})
export class OBJLoaderService extends ThAsyncLoaderService<Group> {
  public clazz = OBJLoader;
}

@Pipe({
  name: 'loadObj',
  pure: true,
})
export class ThObjLoaderPipe extends ThAsyncLoaderBasePipe<Group> implements PipeTransform {
  constructor(protected service: OBJLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadObj]',
})
export class ThObjLoaderDirective extends ThAsyncLoaderBaseDirective<Group> {
  constructor(
    @Host() protected host: ThObject3D,
    protected zone: NgZone,
    protected service: OBJLoaderService,
  ) {
    super(host, zone);
  }

  protected getRefFromResponse(response: Group) {
    return response;
  }
}
