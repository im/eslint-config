module.exports = {
    'parser': 'vue-eslint-parser',
    'parserOptions': {
        parser: {
            js: '@typescript-eslint/parser',
            ts: '@typescript-eslint/parser',
            '<template>': 'espree'
        },
        sourceType: 'module'
    },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/recommended'
    ],
    rules: {
        'vue/comment-directive': 'off',
        'vue/attributes-order': 'warn',
        'vue/html-indent': [
            'warn',
            4
        ],
        'vue/html-closing-bracket-newline': [
            'error', {
                singleline: 'never',
                multiline: 'never'
            }
        ],
        'vue/multi-word-component-names': 'off',
        'vue/html-self-closing': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/component-definition-name-casing': 'off',
        'vue/no-unused-vars': 'off',
        'no-unused-vars': 'off',
        'no-useless-escape': 'off',
        'prefer-const': 'off',
        'prefer-spread': 'off',
        'no-prototype-builtins': 'off',
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        'semi': [
            'error',
            'never'
        ],
        'key-spacing': ['warn', { 'beforeColon': false }],
        'object-curly-spacing': ['warn', 'always'],

        'array-bracket-spacing': ['warn', 'never'],
        'space-before-function-paren': 'off',
        'space-before-blocks': 'warn',
        'no-trailing-spaces': 'warn',
        'no-irregular-whitespace': 'warn',
        'no-multi-spaces': 'warn',
        'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 0, maxBOF: 0 }],
        '@typescript-eslint/space-before-function-paren': 'warn',
        '@typescript-eslint/no-var-requires': 'off',

    },
    env: {
        browser: true,
        node: true,
        es6: true,
    }
}