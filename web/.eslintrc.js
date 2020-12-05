module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/essential',
   // 'eslint:recommended'
    //'plugin:vue/recommended',
    //'@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }]
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
