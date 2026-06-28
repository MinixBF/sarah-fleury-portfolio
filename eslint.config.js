// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
    {
        ignores: ['dist/**', 'projects/**/*'],
    },
    {
        files: ['**/*.ts'],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...angular.configs.tsRecommended,
        ],
        processor: angular.processInlineTemplates,
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            // This project intentionally uses unprefixed element selectors
            // (e.g. `home`, `about-us`, `project`). Enforce kebab-case only.
            '@angular-eslint/component-selector': 'off',
            '@typescript-eslint/no-inferrable-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            semi: ['error', 'always'],
            'arrow-body-style': 'off',
            curly: 'error',
            'eol-last': 'error',
            'id-denylist': 'off',
            radix: ['error', 'as-needed'],
            'object-curly-spacing': ['error', 'always'],
            'no-trailing-spaces': 'error',
            'no-console': [
                'error',
                {
                    allow: ['warn', 'error'],
                },
            ],
            'spaced-comment': [
                'error',
                'always',
                {
                    markers: ['/'],
                },
            ],
        },
    },
    {
        files: ['**/*.html'],
        extends: [...angular.configs.templateRecommended],
        rules: {},
    }
);
