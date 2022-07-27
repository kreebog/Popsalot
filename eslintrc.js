module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    project: './tsconfig.json' // The error starts here
  }
}
