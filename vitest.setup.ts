import { expect, beforeAll, vi } from 'vitest';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// Initialize Angular testing environment
beforeAll(() => {
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
});

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

// Add Jasmine-style spying support via jasmine global
// This allows tests to use jasmine.createSpyObj() without changes
declare global {
  const jasmine: {
    createSpyObj<T>(baseName: string, methodNames: (keyof T)[] | string[]): jasmine.SpyObj<T>;
  };
  namespace jasmine {
    interface SpyObj<T> extends T {
      [k in keyof T]: T[k] extends (...args: any[]) => infer R
        ? jasmine.Spy & ((...args: Parameters<T[k]>) => R)
        : T[k];
    }
    interface Spy {
      (...args: any[]): any;
      calls: jasmine.Calls;
      and: jasmine.Spy;
    }
    interface Calls {
      count(): number;
    }
  }
  namespace Vi {
    interface Matchers<R> {
      toBeTrue(): R;
      toBeFalse(): R;
    }
  }
}

// Create a global jasmine object with createSpyObj implementation
(globalThis as any).jasmine = {
  createSpyObj<T>(baseName: string, methodNames: (keyof T)[] | string[]): any {
    const spy: any = {};
    if (Array.isArray(methodNames)) {
      methodNames.forEach((methodName) => {
        spy[methodName] = vi.fn();
      });
    }
    return spy;
  },
};
