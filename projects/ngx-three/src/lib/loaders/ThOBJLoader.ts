import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';

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
  standalone: false,
})
export class ThObjLoaderPipe extends ThAsyncLoaderBasePipe<Group> implements PipeTransform {
  protected service = inject(OBJLoaderService);
}

@Directive({
  selector: '[loadObj]',
  standalone: false,
})
export class ThObjLoaderDirective extends ThAsyncLoaderBaseDirective<Group> {
  protected service = inject(OBJLoaderService);

  protected getRefFromResponse(response: Group) {
    return response;
  }
}
