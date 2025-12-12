
import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config'
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

export default defineConfig(
    eslint.configs.recommended,
    tseslint.configs.strict,
    tseslint.configs.stylistic,
    {
        ignores: [
            "dist",
            "node_modules",
            "docs",
            "eslint.config.js",
            "vite.config.ts"
        ]
    },
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            react: react,
        },
        languageOptions: {
            parser: tsparser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                project: './tsconfig.json',
            },
        },
        rules: {
            "@typescript-eslint/consistent-type-definitions": "off",
            "semi": ["error", "always"],
            "brace-style": ["error", "allman", { "allowSingleLine": true }],
            "eol-last": ["error", "always"],
            "react/react-in-jsx-scope": "off",
        }
    }
);