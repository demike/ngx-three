export interface ThSettable {
  set(...args: any): this;
  copy?(value: any): this;
}

/**
 * tries to apply the new value to the target.
 * if the new value is 'setter arguments' then it uses set on the target.
 * else it tries to use the 'copy' method of the target if available
 * else it return the newValue as new target
 * if newValue is undefined the old target is returned
 * @param target the target for the new value
 * @param newValue
 */
export function applyValue<T extends ThSettable>(
  target: T,
  newValue?: any[] | T
): T {
  if (newValue === undefined) {
    return target as T;
  }

  if (Array.isArray(newValue)) {
    target.set(newValue);
    return target as T;
  }

  if (target.copy) {
    target.copy(newValue);
    return target as T;
  }

  return newValue as T;
}
