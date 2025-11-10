import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { UltraHDRLoader } from 'three/examples/jsm/loaders/UltraHDRLoader.js';
import {
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
  ThCallbackLoaderService,
} from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class UltraHDRLoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = UltraHDRLoader;
}

@Pipe({
  name: 'loadUltraHDRTexture',
  pure: true,
})
export class ThUltraHDRLoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  protected service = inject(UltraHDRLoaderService);
}

@Directive({
  selector: '[loadUltraHDRTexture]',
})
export class ThUltraHDRLoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  protected host = inject(ThDataTexture, { host: true });
  protected service = inject(UltraHDRLoaderService);
}
