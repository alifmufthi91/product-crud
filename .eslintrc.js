module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'linebreak-style': ['error', 'windows'],
    'no-unused-vars': 'off',
    camelcase: 'off'
  }
}
