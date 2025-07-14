import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';

import { ThObject3D } from '../generated/ThObject3D';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { ThAsyncLoaderBaseDirective, ThAsyncLoaderBasePipe, ThAsyncLoaderService } from './ThAsyncLoaderBase';
import { Group } from 'three';

@Injectable({
  providedIn: 'root',
})
export class FBXLoaderService extends ThAsyncLoaderService<Group> {
  public clazz = FBXLoader;
}

@Pipe({
  name: 'loadFBX',
  pure: true,
  standalone: false,
})
export class ThFBXLoaderPipe extends ThAsyncLoaderBasePipe<Group> implements PipeTransform {
  protected service = inject(FBXLoaderService);
}

@Directive({
  selector: '[loadFBX]',
  standalone: false,
})
export class ThFBXLoaderDirective extends ThAsyncLoaderBaseDirective<Group> {
  protected host = inject(ThObject3D, { host: true });
  protected service = inject(FBXLoaderService);

  protected getRefFromResponse(response: Group) {
    return response;
  }
}
