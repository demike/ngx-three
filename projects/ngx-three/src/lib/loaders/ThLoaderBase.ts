import { Type } from '@angular/core';
import { Loader } from 'three';

export abstract class ThLoader<T extends Loader> {
    public abstract readonly clazz: Type<T>;

    protected crossOrigin?: string;
    protected withCredentials?: boolean;

    public setCrossOrigin(cors: string) {
        this.crossOrigin = cors;
    }

    public setWithCredentials(credentials: boolean) {
        this.withCredentials = credentials;
    }

    public createLoaderInstance(): T {
        const loader = new this.clazz();
        if(this.crossOrigin) {
            loader.setCrossOrigin(this.crossOrigin);
        }
        if(this.withCredentials !== undefined) {
            loader.setWithCredentials(this.withCredentials);
        }
        return loader;
      }
}
