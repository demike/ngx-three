import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { LogLuvLoader } from 'three/examples/jsm/loaders/LogLuvLoader.js';
import {
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
  ThCallbackLoaderService,
} from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class LogLuvLoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = LogLuvLoader;
}

@Pipe({
  name: 'loadLogLuvTexture',
  pure: true,
})
export class ThLogLuvLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  constructor(protected service: LogLuvLoaderService) {
    super();
  }
}

@Directive({
  selector: '[loadLogLuvTexture]',
})
export class ThLogLuvLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  constructor(
    @Host() protected host: ThDataTexture,
    protected zone: NgZone,
    protected service: LogLuvLoaderService,
  ) {
    super(host, zone);
  }
}
