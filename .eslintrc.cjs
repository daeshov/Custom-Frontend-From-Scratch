module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,   // This allows Node.js globals
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:node/recommended'  // Add Node.js ESLint plugin rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: '18.2'
    }
  },
  plugins: [
    'react-refresh',
    'node'  // Add the Node.js ESLint plugin
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // You can add more specific rules or override plugin rules here if needed
  },
}
