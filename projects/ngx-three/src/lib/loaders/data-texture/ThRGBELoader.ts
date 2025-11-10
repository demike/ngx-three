import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
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
export class RGBELoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = RGBELoader;
}

@Pipe({
  name: 'loadRGBETexture',
  pure: true,
})
export class ThRGBELoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  protected service = inject(RGBELoaderService);
}

@Directive({
  selector: '[loadRGBETexture]',
})
export class ThRGBELoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  protected host = inject(ThDataTexture, { host: true });
  protected service = inject(RGBELoaderService);
}
