import { Observable, Subject } from "rxjs";

export interface ThSettable {
  set(...args: any): this;
  copy?(value: any): this;
}

export function isSettable(obj: any): obj is ThSettable {
  return !!(obj && obj.set); // && obj.copy;
}

/**
 * tries to apply the new value to the target.
 * if the new value is 'setter arguments' then it uses set on the target.
 * else it tries to use the 'copy' method of the target if available
 * else it return the newValue as new target
 * if newValue is undefined the old target is returned
 *
 * @param target the target for the new value
 * @param newValue the value to be set
 * @returns the new target(value)
 */
export function applyValue<T>(target: T, newValue?: any[] | T): T {
  if (isSettable(target)) {
    if (newValue === undefined) {
      return target as T;
    }

    if (Array.isArray(newValue)) {
      target.set(...newValue);
      return target as T;
    }

    if (target.copy && newValue) {
      target.copy(newValue);
      return target as T;
    }

    // just set the value
    if (newValue !== undefined) {
      target.set(newValue);
      return target;
    }
  } else {
    // apply the value
    return newValue as T;
  }

  // nothing to do
  return target;
}

export function isDisposable(obj: any): obj is { dispose: () => void } {
  if (obj && typeof obj.dispose === 'function') {
    return true;
  }
  return false;
}

/**
 * compatibility function for checking if a subject is observed
 * works with RxJs 6.x.x and RxJs 7+
 *
 * @param s the subject
 * @returns true if the subject is observed
 */
export function isObserved<T = any>(s?: Subject<T>): s is Subject<T> {
  return s !== undefined && ( s.observed /* <-- needs at least RxJs 7.x.x */ || s.observers?.length > 0 /* <-- for RxJs < 7.x.x */);
}
