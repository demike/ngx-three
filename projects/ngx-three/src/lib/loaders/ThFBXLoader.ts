import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';

import { ThObject3D } from '../generated/ThObject3D';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import { Group } from 'three';


@Injectable({
  providedIn: 'root'
})
export class FBXLoaderService extends ThAsyncLoaderService<FBXLoader> {
  public clazz = FBXLoader;
}

@Pipe({
   name: 'loadFBX',
   pure: true
})
export class ThFBXLoaderPipe extends ThAsyncLoaderBasePipe<FBXLoader> implements PipeTransform {
    constructor(protected service: FBXLoaderService) {
      super();
    }
}

@Directive({
  selector: '[loadFBX]',
})
export class ThFBXLoaderDirective extends ThAsyncLoaderBaseDirective<FBXLoader> {
  constructor(@Host() protected host: ThObject3D, protected zone: NgZone, protected service: FBXLoaderService) {
    super(host,zone);
  }

  protected getRefFromResponse(response: Group) {
      return response;
  }
}



