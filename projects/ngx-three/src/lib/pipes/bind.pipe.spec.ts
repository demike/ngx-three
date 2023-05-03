import { BindPipe } from './bind.pipe';

class Test {
  public member = 23;
  public method() {
    return this.member;
  }
}

describe('Pipe: Bind', () => {
  it('create an instance', () => {
    const pipe = new BindPipe();
    expect(pipe).toBeTruthy();
  });

  it('should bind a method', () => {
    const instance = new Test();
    const pipe = new BindPipe();

    const fn = instance.method;

    // calling fn results in wrong this scope
    expect(() => fn()).toThrow();

    const boundFn = pipe.transform(instance.method, instance);
    expect(boundFn()).toBe(instance.member);
  });
});
