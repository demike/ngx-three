import { Type } from '@angular/core';
import { Loader } from 'three';

export abstract class ThLoader<TData = unknown, TUrl extends string | string[] = string> {
  public abstract readonly clazz: Type<Loader<TData, TUrl>>;

  protected crossOrigin?: string;
  protected withCredentials?: boolean;

  public setCrossOrigin(cors: string) {
    this.crossOrigin = cors;
  }

  public setWithCredentials(credentials: boolean) {
    this.withCredentials = credentials;
  }

  public createLoaderInstance(): Loader<TData, TUrl> {
    const loader = new this.clazz();
    if (this.crossOrigin) {
      loader.setCrossOrigin(this.crossOrigin);
    }
    if (this.withCredentials !== undefined) {
      loader.setWithCredentials(this.withCredentials);
    }
    return loader;
  }
}
