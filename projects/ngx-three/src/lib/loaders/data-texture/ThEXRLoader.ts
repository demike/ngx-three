import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { EXRLoader } from 'three/examples/jsm/loaders/EXRLoader.js';
import { ThDataTexture } from '../../generated/ThDataTexture';
import {
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
  ThCallbackLoaderService,
} from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class EXRLoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = EXRLoader;
}

@Pipe({
  name: 'loadEXRTexture',
  pure: true,
})
export class ThEXRLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  protected service = inject(EXRLoaderService);
}

@Directive({
  selector: '[loadEXRTexture]',
})
export class ThEXRLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  protected host = inject(ThDataTexture, { host: true });
  protected service = inject(EXRLoaderService);
}
