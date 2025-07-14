import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { PVRLoader } from 'three/examples/jsm/loaders/PVRLoader.js';
import { ThCompressedTexture } from '../../generated/ThCompressedTexture';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';
import { CompressedTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class PVRLoaderService extends ThCallbackLoaderService<CompressedTexture> {
  public clazz = PVRLoader;
}

@Pipe({
  name: 'loadPVRTexture',
  pure: true,
  standalone: false,
})
export class ThPVRLoaderPipe extends ThCallbackLoaderBasePipe<CompressedTexture> implements PipeTransform {
  protected service = inject(PVRLoaderService);
}

@Directive({
  selector: '[loadPVRTexture]',
  standalone: false,
})
export class ThPVRLoaderDirective extends ThCallbackLoaderBaseDirective<CompressedTexture> {
  protected host = inject(ThCompressedTexture, { host: true });
  protected service = inject(PVRLoaderService);
}
