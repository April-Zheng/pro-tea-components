module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      1,
      {
        semi: true,
        trailingComma: 'all',
        tabWidth: 2,
      },
    ],
  },
};
