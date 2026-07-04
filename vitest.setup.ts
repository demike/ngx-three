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

// Helper to resolve component resources (templates and styles)
export async function resolveComponentResources(component: any) {
  const metadata = (component as any).__annotations__?.find((a: any) => a.templateUrl || a.styleUrls);
  if (!metadata) return;

  // For templates - mock them as empty
  if (metadata.templateUrl) {
    metadata.template = '';
    delete metadata.templateUrl;
  }

  // For styles - mock them as empty
  if (metadata.styleUrls) {
    metadata.styles = [];
    delete metadata.styleUrls;
  }
}

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
  toHaveBeenCalled(received: any) {
    const pass = received.mock && received.mock.calls.length > 0;
    return {
      pass,
      message: () => `expected spy to have been called`,
    };
  },
  toHaveBeenCalledWith(received: any, ...args: any[]) {
    const pass = 
      received.mock && 
      received.mock.calls.some((callArgs: any[]) => 
        JSON.stringify(callArgs) === JSON.stringify(args)
      );
    return {
      pass,
      message: () => `expected spy to have been called with ${JSON.stringify(args)}`,
    };
  },
  toHaveBeenCalledOnceWith(received: any, ...args: any[]) {
    const pass = 
      received.mock && 
      received.mock.calls.length === 1 &&
      (args.length === 0 || JSON.stringify(received.mock.calls[0]) === JSON.stringify(args));
    return {
      pass,
      message: () => `expected spy to have been called exactly once`,
    };
  },
});

// Add Jasmine-style spying support via jasmine global
// This allows tests to use jasmine.createSpyObj() and spyOn() without changes
declare global {
  const jasmine: {
    createSpyObj<T>(baseName: string, methodNames: (keyof T)[] | string[]): jasmine.SpyObj<T>;
  };
  function spyOn<T extends object>(object: T, method: keyof T): jasmine.Spy;
  namespace jasmine {
    interface SpyObj<T> extends T {
      [k in keyof T]: T[k] extends (...args: any[]) => infer R
        ? jasmine.Spy & ((...args: Parameters<T[k]>) => R)
        : T[k];
    }
    interface Spy {
      (...args: any[]): any;
      calls: jasmine.Calls;
      and: jasmine.SpyAnd;
      callThrough(): jasmine.Spy;
      mock?: any;
    }
    interface SpyAnd {
      callThrough(): jasmine.Spy;
      returnValue(value: any): jasmine.Spy;
      stub(): jasmine.Spy;
    }
    interface Calls {
      count(): number;
    }
  }
  namespace Vi {
    interface Matchers<R> {
      toBeTrue(): R;
      toBeFalse(): R;
      toHaveBeenCalled(): R;
      toHaveBeenCalledWith(...args: any[]): R;
      toHaveBeenCalledOnceWith(...args: any[]): R;
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

// Add global spyOn function
(globalThis as any).spyOn = function <T extends object>(obj: T, methodName: keyof T): any {
  const original = (obj as any)[methodName];
  const spy = vi.fn(original) as any;
  
  // Add and.callThrough() and and.returnValue()
  spy.and = {
    callThrough: () => {
      spy.mockImplementation(original);
      return spy;
    },
    returnValue: (value: any) => {
      spy.mockReturnValue(value);
      return spy;
    },
    stub: () => {
      spy.mockImplementation(() => undefined);
      return spy;
    },
  };
  
  spy.callThrough = () => {
    spy.mockImplementation(original);
    return spy;
  };
  
  (obj as any)[methodName] = spy;
  return spy;
};
