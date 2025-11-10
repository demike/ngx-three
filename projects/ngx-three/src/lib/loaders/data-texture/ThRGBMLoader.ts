import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { RGBMLoader } from 'three/examples/jsm/loaders/RGBMLoader.js';
import { ThDataTexture } from '../../generated/ThDataTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class RGBMLoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = RGBMLoader;
}

@Pipe({
  name: 'loadRGBMTexture',
  pure: true,
})
export class ThRGBMLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  protected service = inject(RGBMLoaderService);
}

@Directive({
  selector: '[loadRGBMTexture]',
})
export class ThRGBMLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  protected host = inject(ThDataTexture, { host: true });
  protected service = inject(RGBMLoaderService);
}
