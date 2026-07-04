import { expect } from 'vitest';

// Add Jasmine-style matchers
expect.extend({
  toBeTrue(received: any) {
    const pass = received === true;
    return {
      pass,
      message: () => `expected ${received} to be true`,
    };
  },
  toBeFalse(received: any) {
    const pass = received === false;
    return {
      pass,
      message: () => `expected ${received} to be false`,
    };
  },
});

declare global {
  namespace Vi {
    interface Matchers<R> {
      toBeTrue(): R;
      toBeFalse(): R;
    }
  }
}
