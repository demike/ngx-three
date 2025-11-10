import { Directive, Injectable, Pipe, PipeTransform, inject } from '@angular/core';
import { ThDataTexture } from '../../generated/ThDataTexture';
import { TGALoader } from 'three/examples/jsm/loaders/TGALoader.js';
import {
  ThCallbackLoaderService,
  ThCallbackLoaderBaseDirective,
  ThCallbackLoaderBasePipe,
} from '../ThCallbackLoaderBase';
import { DataTexture } from 'three';

@Injectable({
  providedIn: 'root',
})
export class TGALoaderService extends ThCallbackLoaderService<DataTexture> {
  public clazz = TGALoader;
}

@Pipe({
  name: 'loadTGATexture',
  pure: true,
})
export class ThTGALoaderPipe extends ThCallbackLoaderBasePipe<DataTexture> implements PipeTransform {
  protected service = inject(TGALoaderService);
}

@Directive({
  selector: '[loadTGATexture]',
})
export class ThTGALoaderDirective extends ThCallbackLoaderBaseDirective<DataTexture> {
  protected host = inject(ThDataTexture, { host: true });
  protected service = inject(TGALoaderService);
}
