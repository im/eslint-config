import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import vuePlugin from 'eslint-plugin-vue'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import vueParser from 'vue-eslint-parser'

export default tseslint.config(
    {
        files: ['**/*.{js,cjs,mjs,ts,tsx,vue}']
    },
    {
        ignores: ['node_modules', 'dist'],
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
                defineProps: true,
                defineEmits: true,
                defineExpose: true
            },
            parser: vueParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module'
            }
        }
    },
    js.configs.recommended,
    importPlugin.flatConfigs.recommended,
    ...tseslint.configs.recommended,
    ...vuePlugin.configs['flat/recommended'],
    {
        rules: {
            'import/no-unresolved': 'off',
            'import/named': 'off',
            'import/no-named-as-default': 'off'
        }
    },
    {
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
        }
    },
    {
        rules: {
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
         }
    }
)