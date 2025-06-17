module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'], // optional
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // Includes the no-explicit-any rule by default
    'plugin:react/recommended',             // Only if you're using React
    'plugin:prettier/recommended'
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // ✅ turn off the rule globally
    // Optional: customize other rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off', // if using TypeScript types for props
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
