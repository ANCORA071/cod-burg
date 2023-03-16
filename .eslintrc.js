module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  plugins: ['prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    camelcase: 'off',
    'no-unused-vars': 'off',
  },
};
