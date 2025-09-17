// @ts-check

import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig({
  languageOptions: {
    parserOptions: {
      project: true,
      tsconfigRootDir: import.meta.dirname,
    }},
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      tseslint.configs.recommended,
      eslintConfigPrettier
    ],
    rules: {
      "no-console": "error",
      "no-useless-catch":0,
      "quotes": ["error", "double", { allowTemplateLiterals: true }],
    },
}
);