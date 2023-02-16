module.exports = {
  'env': {
    'es2021': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
  ],
  'parser': 'vue-eslint-parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module',
  },
  'plugins': [
    'vue',
    '@typescript-eslint',
  ],
  'rules': {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'indent': [
      'error',
      2,
    ],
    'quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
      },
    ],
    'semi': [
      'error',
      'always',
    ],
    'vue/multi-word-component-names': [
      'error',
      {
        'ignores': [
          'index',
          'destination',
          'crew',
          'technology',
        ],
      },
    ],
    'vue/no-multiple-template-root': 'off',
  },
};
