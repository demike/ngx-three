import { Directive, Host, Injectable, NgZone, Pipe, PipeTransform } from '@angular/core';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { LogLuvLoader } from 'three/examples/jsm/loaders/LogLuvLoader';
import {
  ThCallbackLoaderBaseDirective, ThCallbackLoaderBasePipe, ThCallbackLoaderService
} from '../ThCallbackLoaderBase';

@Injectable({
    providedIn: 'root'
  })
  export class LogLuvLoaderService extends ThCallbackLoaderService<LogLuvLoader> {
    public clazz = LogLuvLoader;
  }

  @Pipe({
    name: 'loadLogLuvTexture',
    pure: true
  })
  export class ThLogLuvLoaderPipe extends ThCallbackLoaderBasePipe<LogLuvLoader> implements PipeTransform {
    constructor(protected service: LogLuvLoaderService) {
      super();
    }
  }

  @Directive({
   selector: '[loadLogLuvTexture]',
  })
  export class ThLogLuvLoaderDirective extends ThCallbackLoaderBaseDirective<LogLuvLoader> {
    constructor(@Host() protected host: ThDataTexture, protected zone: NgZone, protected service: LogLuvLoaderService) {
      super(host,zone);
    }
  }

