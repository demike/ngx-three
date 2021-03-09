import { Object3D } from 'three';
import { applyValue } from '../util';

class Object3DProxyHandler implements ProxyHandler<Object3D> {
  protected memberMap = new Map<keyof Object3D, any>();
  protected children: Object3D[] = [];

  get(target: Object3D, p: keyof LazyObject3DProxy, receiver: any): any {
    switch (p) {
      case '__isProxy':
        return true;
      case 'applyToObject3D':
        return this.applyToObject3D;
      case 'add':
        return this.add;
      case 'remove':
        return this.remove;
      default: {
        let value = this.memberMap.get(p as keyof Object3D);
        if (value === undefined) {
          value = target[p as keyof Object3D];
          if (value !== undefined) {
            this.memberMap.set(p, value);
          }
        }
        return value ?? target[p as keyof Object3D];
      }
    }
  }

  set(target: Object3D, p: keyof Object3D, value: any, receiver: any): boolean {
    this.memberMap.set(p, value);
    return true;
  }

  add = (...object: Object3D[]): this => {
    this.children.push(...object);
    return this;
  };

  remove = (...object: Object3D[]): this => {
    for (const obj of object) {
      const index = this.children.indexOf(obj);
      if (index >= 0) {
        this.children = this.children.splice(index, 1);
      }
    }
    return this;
  };

  applyToObject3D = (real: Object3D) => {
    this.memberMap.forEach((value, key) => {
      applyValue((real as any)[key], value);
    });

    this.children.forEach((child) => real.add(child));
  };
}

export interface LazyObject3DProxy extends Object3D {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly __isProxy?: boolean;
  applyToObject3D(real: Object3D): void;
}

export function createLazyObject3DProxy(): LazyObject3DProxy {
  return new Proxy<LazyObject3DProxy>(new Object3D() as LazyObject3DProxy, new Object3DProxyHandler());
}

export function isLazyObject3dProxy(object: Object3D | LazyObject3DProxy): object is LazyObject3DProxy {
  // eslint-disable-next-line no-underscore-dangle
  return (object as LazyObject3DProxy).__isProxy === true;
}
