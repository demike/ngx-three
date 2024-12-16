import { Object3D, Event, Object3DEventMap } from 'three';
import { applyValue, isSettable } from '../util';

class Object3DProxyHandler implements ProxyHandler<Object3D> {
  constructor(target: Object3D) {
    this.objRef = target;
  }

  protected objRef: Object3D;
  protected memberMap = new Map<keyof Object3D, any>();
  protected children: Object3D[] = [];
  protected eventListener: { [key: string]: ((event: Event) => void)[] } = {};
  protected loaded = false;

  get(_target: unknown, p: keyof LazyObject3DProxy, _receiver: any): any {
    switch (p) {
      case '__isProxy':
        return true;
      case 'applyToObject3D':
        return this.applyToObject3D;
      case 'objRef':
        if (this.loaded) {
          return this.objRef;
        } else {
          return undefined;
        }
      case 'add':
        return this.add;
      case 'remove':
        return this.remove;
      case 'children':
        return this.objRef ? this.objRef.children : this.children;
      default: {
        const objKey = p as keyof Object3D;
        const value = this.objRef[objKey];
        if (value !== undefined) {
          // this is necessary for complex members
          // (returned by reference, they might be altered, we have to reapply them to the real object )
          this.memberMap.set(objKey, value);
        }
        return value;
      }
    }
  }

  set(_target: unknown, p: keyof LazyObject3DProxy, value: any, _receiver: any): boolean {
    if (p === 'objRef') {
      if (value) {
        this.applyToObject3D(value);
      }
      this.loaded = true;
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
    }

    this.children.push(...object);

    return this;
  };

  remove = (...object: Object3D[]): this => {
    if (this.objRef) {
      this.objRef.remove(...object);
    }

    for (const obj of object) {
      const index = this.children.indexOf(obj);
      if (index >= 0) {
        this.children = this.children.splice(index, 1);
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

    this.children.forEach((child) => objRef.add(child));

    if (this.objRef?.parent) {
      const parent = this.objRef?.parent;
      parent.remove(this.objRef);
      parent.add(objRef);
    }
  };

  /**
   * Adds a listener to an event type.
   *
   * @param type The type of event to listen to.
   * @param listener The function that gets called when the event is fired.
   */
  addEventListener = <T extends Extract<keyof Object3DEventMap, string>>(
    type: T,
    listener: (event: Event) => void,
  ): void => {
    let arr = this.eventListener[type];
    if (!arr) {
      arr = [];
      this.eventListener[type] = arr;
    }

    arr.push(listener);

    if (this.objRef) {
      this.objRef.addEventListener(type, listener);
    }
  };

  /**
   * Removes a listener from an event type.
   *
   * @param type The type of the listener that gets removed.
   * @param listener The listener function that gets removed.
   */
  removeEventListener = (type: string, listener: (event: Event) => void): void => {
    const arr = this.eventListener[type];
    if (!arr) {
      return;
    }

    const index = arr.indexOf(listener);
    if (index >= 0) {
      arr.splice(index, 1);
    }
  };
}

export interface LazyObject3DProxy<TEventMap extends Object3DEventMap = Object3DEventMap> extends Object3D<TEventMap> {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  readonly __isProxy?: boolean;
  objRef?: Object3D;
  applyToObject3D(real: Object3D): void;
}

export function createLazyObject3DProxy<TEventMap extends Object3DEventMap = Object3DEventMap>(
  target = new Object3D<TEventMap>(),
): LazyObject3DProxy<TEventMap> {
  const handler = new Object3DProxyHandler(target);
  return new Proxy<LazyObject3DProxy<TEventMap>>(handler as unknown as LazyObject3DProxy<TEventMap>, handler);
}

export function isLazyObject3dProxy(object: Object3D | LazyObject3DProxy): object is LazyObject3DProxy {
  return (
    // eslint-disable-next-line no-underscore-dangle
    (object as LazyObject3DProxy).__isProxy === true && (object as LazyObject3DProxy).objRef === undefined
  );
}
