// @ts-check
const eslint = require('@eslint/js');
const { defineConfig } = require('eslint/config');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const preferArrow = require('eslint-plugin-prefer-arrow');

module.exports = defineConfig([
  {
    ignores: ['dist/**/*', 'coverage/**/*', 'node_modules/**/*'],
  },
  {
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, tseslint.configs.recommended, angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    plugins: {
      'prefer-arrow': preferArrow,
    },
    settings: {
      'import/ignore': ['node_modules'],
    },
    rules: {
      'prefer-arrow/prefer-arrow-functions': 'off',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@angular-eslint/prefer-standalone': 'off',
      'no-underscore-dangle': [
        'error',
        {
          allowAfterThis: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@angular-eslint/prefer-on-push-component-change-detection': 'error',
    },
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended],
    rules: {},
  },
]);