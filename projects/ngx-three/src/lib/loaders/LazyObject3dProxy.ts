import { Object3D } from 'three';
import { applyValue, isSettable } from '../util';

class Object3DProxyHandler implements ProxyHandler<Object3D> {
  protected objRef?: Object3D;
  protected memberMap = new Map<keyof Object3D, any>();
  protected children: Object3D[] = [];

  get(target: Object3D, p: keyof LazyObject3DProxy, receiver: any): any {
    switch (p) {
      case '__isProxy':
        return true;
      case 'applyToObject3D':
        return this.applyToObject3D;
      case 'objRef':
        return this.objRef;
      case 'add':
        return this.add;
      case 'remove':
        return this.remove;
      case 'children':
        return this.objRef ? this.objRef.children : this.children;
      default: {
        const objKey = p as keyof Object3D;
        let value = this.objRef ? this.objRef[objKey] : this.memberMap.get(objKey);
        if (value === undefined) {
          value = target[objKey];
          if (value !== undefined) {
            // this is necessary for complex members
            // (returned by reference, they might be altered, we have to reapply them to the real object )
            this.memberMap.set(objKey, value);
          }
        }
        return value ?? target[objKey];
      }
    }
  }

  set(target: Object3D, p: keyof LazyObject3DProxy, value: any, receiver: any): boolean {
    if (p === 'objRef') {
      if (value) {
        this.applyToObject3D(value);
        this.children = [];
      }
      this.objRef = value;
    } else {
      // store to the member map
      this.memberMap.set(p as keyof Object3D, value);
      if (this.objRef) {
        // and apply to the real object if present
        (this.objRef as any)[p] = value;
      }
    }
    return true;
  }

  add = (...object: Object3D[]): this => {
    if (this.objRef) {
      this.objRef.add(...object);
    } else {
      this.children.push(...object);
    }

    return this;
  };

  remove = (...object: Object3D[]): this => {
    if (this.objRef) {
      this.objRef.remove(...object);
    } else {
      for (const obj of object) {
        const index = this.children.indexOf(obj);
        if (index >= 0) {
          this.children = this.children.splice(index, 1);
        }
      }
    }

    return this;
  };

  applyToObject3D = (objRef: Object3D) => {
    this.memberMap.forEach((value, key) => {
      const member = (objRef as any)[key];
      if (isSettable(member)) {
        applyValue(member, value);
      } else {
        (objRef as any)[key] = value;
      }
    });

    let children = this.children;
    if (this.objRef) {
      children = this.objRef.children;
    }

    children.forEach((child) => objRef.add(child));
  };
}

export interface LazyObject3DProxy extends Object3D {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly __isProxy?: boolean;
  objRef?: Object3D;
  applyToObject3D(real: Object3D): void;
}

export function createLazyObject3DProxy(): LazyObject3DProxy {
  return new Proxy<LazyObject3DProxy>(new Object3D() as LazyObject3DProxy, new Object3DProxyHandler());
}

export function isLazyObject3dProxy(object: Object3D | LazyObject3DProxy): object is LazyObject3DProxy {
  // eslint-disable-next-line no-underscore-dangle
  return (object as LazyObject3DProxy).__isProxy === true && (object as LazyObject3DProxy).objRef === undefined;
}
