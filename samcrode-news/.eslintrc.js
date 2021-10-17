module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'next'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx', '.jsx'] }],
  },
};
