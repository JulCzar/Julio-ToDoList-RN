module.exports = {
  'env': {
    'es2021': true,
    'node': true,
    'react-native/react-native': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'react',
    'react-native',
    'simple-import-sort'
  ],
  'rules': {
    'simple-import-sort/imports': 'error',
    'semi': ['error','never'],
    'quotes': ['error','single'],
    'no-var': 'error',
    'no-new-object': 'error',
    'object-shorthand': 'warn',
    'no-array-constructor': 'warn',
    'prefer-destructuring': 'warn',
    'no-useless-escape': 'warn',
    'space-before-blocks': 'warn',
    'prefer-arrow-callback': 'warn',
    'linebreak-style': ['error','unix'],
    'arrow-spacing': 'warn',
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-body-style': ['warn', 'as-needed'],
    'no-confusing-arrow': 'warn',
    'implicit-arrow-linebreak': 'warn',
    'no-duplicate-imports': 'warn',
    'dot-notation': 'warn',
    'indent': ['error',2],
    'operator-linebreak': 'warn'
  }
}
