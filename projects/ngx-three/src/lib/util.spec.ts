import { isSettable, applyValue } from './util';

describe('isSettable', () => {
  it('should return true if settable', () => {
    const obj = {
      set: () => {
        // do nothing
      }
    };
    expect(isSettable(obj)).toBeTrue();
  });

  it('should return false not settable', () => {
    const obj = {};
    expect(isSettable(obj)).toBeFalse();
  });
});

describe('applyValue', () => {
  it('should set a single argument array value on an object with setter', () => {
    let setValue: any;
    const obj = {
      set: (value: any) => {
        setValue = value;
      }
    };
    expect(applyValue(obj, [12])).toEqual(obj);
    expect(setValue).toEqual(12);
  });

  it('should set multiple values on an object with setter', () => {
    let setValue1: any;
    let setValue2: any;
    let setValue3: any;
    const obj = {
      set: (a: any, b: any, c: any) => {
        setValue1 = a;
        setValue2 = b;
        setValue3 = c;
      }
    };
    expect(applyValue(obj, [1, 2, 3])).toEqual(obj);
    expect(setValue1).toEqual(1);
    expect(setValue2).toEqual(2);
    expect(setValue3).toEqual(3);
  });

  it('should set a single value on an object with a copy method', () => {
    class TestObj {
      constructor(public value: number) {}
      public set(value: number) {
        this.value = value;
      }
      public copy(newObject: TestObj) {
        this.value = newObject.value;
      }
    }

    const a = new TestObj(1);
    const b = new TestObj(2);

    expect(applyValue(a, b)).toEqual(a);
    expect(a.value).toEqual(b.value);
    expect(a).not.toBe(b);
  });

  it('should just return the new value if an object has no set method', () => {
    class TestObj {
      constructor(public value: number) {}
    }

    const a = new TestObj(1);
    const b = new TestObj(2);

    expect(applyValue(a, b)).toEqual(b);
  });
});
