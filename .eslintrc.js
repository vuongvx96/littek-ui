module.exports = {
  parser: 'babel-eslint',
  env: {
    node: true,
    jest: true
  },
  extends: [
    'standard',
    'standard-react',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/react'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true
    }
  }
}
