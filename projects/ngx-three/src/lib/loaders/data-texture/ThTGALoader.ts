import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';

@Injectable({
  providedIn: 'root',
})
export class TGALoaderService extends ThCallbackLoaderService<TGALoader> {
  public clazz = TGALoader;
}

@Pipe({
  name: 'loadTGATexture',
  pure: true,
})
export class ThTGALoaderPipe extends ThCallbackLoaderBasePipe<TGALoader> implements PipeTransform {
  constructor(protected service: TGALoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadTGATexture]',
})
export class ThTGALoaderDirective extends ThCallbackLoaderBaseDirective<TGALoader> {
  constructor(
    @Host() protected host: ThDataTexture,
    protected zone: NgZone,
    protected service: TGALoaderService,
  ) {
    super(host, zone);
  }
}
