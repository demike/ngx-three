// @ts-check
const { defineConfig } = require('eslint/config');
const rootConfig = require('../../eslint.config.js');

module.exports = defineConfig([
  ...rootConfig,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'th',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/directive-selector': [
        'off',
        {
          type: 'attribute',
          prefix: 'th',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/no-output-on-prefix': 'off',
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
]);