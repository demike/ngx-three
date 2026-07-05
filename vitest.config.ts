import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  resolve: {
    alias: {
      'ngx-three': new URL('./projects/ngx-three/src/public-api.ts', import.meta.url).pathname,
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['projects/ngx-three/**/*.spec.ts'],
    exclude: ['node_modules', 'dist', 'projects/ngx-three-demo'],
    setupFiles: ['./vitest.setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
      ],
    },
    browser: {
      provider: playwright(),
      enabled: false, // Set to true to run tests in browser; overridden by --browser.enabled CLI flag
      instances: [
        {
          browser: 'chromium',
        },
      ],
    },
  },
});
