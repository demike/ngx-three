# Vitest Setup for ngx-three

This project has been configured to use **Vitest** as the testing framework instead of Karma + Jasmine.

## Installation

Dependencies are already installed. If needed, reinstall with:

```bash
npm install
```

## Running Tests

### Watch Mode (Development)
```bash
npm run test
```

### Run Once (CI/CD)
```bash
npm run test:run
```

### UI Mode
```bash
npm run test:ui
```

Opens an interactive test UI in the browser.

### Coverage Reports
```bash
npm run test:coverage
```

Generates coverage reports in HTML, JSON, and text formats.

## File Structure

- `vitest.config.ts` - Main vitest configuration
- `vitest.setup.ts` - Global setup file with Jasmine matchers
- `**/*.spec.ts` - Test files (automatically discovered)

## Writing Tests

### Basic Test Structure

```typescript
import { describe, it, expect } from 'vitest';

describe('MyFunction', () => {
  it('should do something', () => {
    expect(true).toBe(true);
  });
});
```

### Supported Jasmine Matchers

The following Jasmine matchers have been added to Vitest:
- `toBeTrue()` - Check if value is `true`
- `toBeFalse()` - Check if value is `false`

Standard Vitest matchers are also available:
- `toBe()`, `toEqual()`, `toMatch()`, etc.

### Angular Testing (Components & Directives)

For Angular component and directive testing, additional setup is required. Convert Karma tests using:

```typescript
import { TestBed } from '@angular/core/testing';
import { ComponentFixture } from '@angular/core/testing';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

## Configuration Details

### Environment
- Uses `happy-dom` instead of jsdom for lighter testing
- Global variables enabled for `describe`, `it`, `expect`

### Coverage
- Provider: v8
- Formats: text, json, html
- Excludes: node_modules/, dist/

### File Patterns
- Includes: `**/*.spec.ts`
- Excludes: node_modules, dist

## Migration Notes

- All `ng test` commands have been replaced with `vitest` commands
- Jasmine matchers like `toBeTrue()` and `toBeFalse()` are supported via setup file
- Component tests using TestBed should work as-is
- For full Angular support, consider adding `@testing-library/angular`

## Troubleshooting

### Tests not running
- Ensure files end with `.spec.ts`
- Check that import paths are correct
- Run with `npm run test:run --reporter=verbose` for detailed output

### Module resolution issues
- Make sure `tsconfig.json` has proper path mappings
- Check that barrel exports (`index.ts`) are properly configured

### Angular component tests failing
- Components may need `TestBed` setup
- Ensure required modules are declared in `TestBed.configureTestingModule()`
- Use `fixture.detectChanges()` after component creation
