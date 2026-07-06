# Vitest Setup for ngx-three

This project has been configured to use **Vitest** as the testing framework instead of Karma + Jasmine, with full support for WebGL tests via headless Chromium.

## Installation

Dependencies are already installed. If needed, reinstall with:

```bash
npm install
```

## Running Tests

### Unit Tests (jsdom - Default)
```bash
npm run test           # Watch mode
npm run test:run       # Single run
npm run test:ui        # UI mode
npm run test:coverage  # With coverage
```

### WebGL Tests (Headless Chromium)
For testing Three.js rendering and WebGL-dependent code:

```bash
npm run test:browser       # Watch mode with Chromium
npm run test:browser:ui    # UI mode with Chromium
```

**Note:** Browser tests run in a real headless browser with full WebGL support, so they're slower but comprehensive.

## Test Strategy

### Use jsdom (Default) For:
- Pure utility functions
- Pipes and services
- Component logic (non-rendering)
- Fast unit tests

### Use Chromium Browser For:
- Three.js rendering tests
- WebGL canvas tests
- Canvas context dependent code
- Component visual tests

## File Structure

- `vitest.config.ts` - Main vitest configuration with browser support
- `vitest.setup.ts` - Global setup file with Jasmine matchers and TestBed initialization
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

### Testing Three.js/WebGL Code

Add `.webgl.spec.ts` suffix for browser-only tests (optional naming convention):

```typescript
// my-component.webgl.spec.ts
import { describe, it, expect } from 'vitest';

describe('ThreeJsComponent', () => {
  it('should render with WebGL', () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('webgl');
    expect(context).toBeTruthy();
  });
});
```

Run with:
```bash
npm run test:browser -- my-component.webgl.spec.ts
```

### Supported Jasmine Matchers

- `toBeTrue()` - Check if value is `true`
- `toBeFalse()` - Check if value is `false`
- Standard vitest matchers: `toBe()`, `toEqual()`, `toMatch()`, etc.

### Angular Testing

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

### Environments

#### jsdom (Default)
- Good DOM compliance
- No WebGL support
- Suitable for most unit tests
- Moderate performance

#### Chromium (Browser)
- Full WebGL support
- Real browser rendering
- Slower but comprehensive
- Configured via Playwright

### Coverage
- Provider: v8
- Formats: text, json, html
- Excludes: node_modules/, dist/

### File Patterns
- Includes: `**/*.spec.ts`
- Excludes: node_modules, dist

## Migration Notes

- All `ng test` commands replaced with `vitest` commands
- Jasmine matchers supported via setup file
- Component tests using TestBed work as-is
- WebGL tests require `--browser.enabled` flag

## Troubleshooting

### Tests not running
- Ensure files end with `.spec.ts`
- Check import paths are correct
- Run with verbose: `npm run test:run -- --reporter=verbose`

### Module resolution issues
- Check `tsconfig.json` path mappings
- Verify barrel exports in `index.ts`

### WebGL tests failing
- Run with browser: `npm run test:browser`
- Check canvas context is available: `canvas.getContext('webgl')`
- Verify Three.js is properly initialized

### Performance
- jsdom tests are fast (~500ms)
- Browser tests are slower (20-30s startup + test time)
- Use jsdom for unit tests, browser only for rendering tests

## Examples

### Testing a Three.js component
```typescript
// th-cube.component.webgl.spec.ts
describe('ThCubeComponent', () => {
  it('should create a Three.js cube', async () => {
    const canvas = document.createElement('canvas');
    const renderer = new THREE.WebGLRenderer({ canvas });
    
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const mesh = new THREE.Mesh(geometry, material);
    
    expect(mesh).toBeTruthy();
    expect(mesh.geometry).toBeInstanceOf(THREE.BoxGeometry);
  });
});
```

Run: `npm run test:browser -- th-cube.component.webgl.spec.ts`

