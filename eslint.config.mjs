// @ts-check
import { fileURLToPath } from 'node:url';

import cspellPlugin from '@cspell/eslint-plugin';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import eslintConfigPrettier from 'eslint-config-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import vueLint from 'eslint-plugin-vue';
import globals from 'globals';
import tsEslint from 'typescript-eslint';

const tsconfigRootDir = fileURLToPath(new URL('.', import.meta.url));

export default tsEslint.config(
  {
    plugins: {
      '@stylistic': stylistic,
      'simple-import-sort': simpleImportSortPlugin,
      '@typescript-eslint': tsEslint.plugin,
      '@cspell': cspellPlugin
    }
  },
  {
    ignores: ['**/node_modules/**', '**/dist/**']
  },
  eslint.configs.recommended,
  ...tsEslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.es2020, ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir,
        warnOnUnsupportedTypeScriptVersion: false
      }
    },
    rules: {
      'arrow-body-style': ['error', 'as-needed'],
      'no-empty-pattern': 'warn',
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'no-restricted-syntax': [
        'error',
        {
          selector: "TSPropertySignature[key.name='children']",
          message:
            'Please use PropsWithChildren<T> instead of defining children manually'
        }
      ],
      'consistent-return': 'warn',
      'prefer-destructuring': ['error', { object: true, array: true }],
      // Stylistic
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'any', prev: 'directive', next: 'directive' },
        {
          blankLine: 'always',
          prev: '*',
          next: ['enum', 'interface', 'type']
        }
      ],
      // simple-import-sort
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      // TypeScript
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-unsafe-declaration-merging': 'warn',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/triple-slash-reference': 'warn',
      // Spell checker
      '@cspell/spellchecker': [
        'warn',
        {
          cspell: {
            language: 'en',
            dictionaries: [
              'typescript',
              'node',
              'html',
              'css',
              'bash',
              'npm',
              'pnpm'
            ]
          }
        }
      ]
    }
  },
  {
    files: ['**/*.js'],
    extends: [tsEslint.configs.disableTypeChecked],
    rules: {
      '@typescript-eslint/internal/no-poorly-typed-ts-props': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-require-imports': 'warn'
    }
  },
  ...vueLint.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'warn'
    }
  },
  eslintConfigPrettier
);
