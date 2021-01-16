/**
 * @file ESLint Configuration
 * @see https://eslint.org/docs/user-guide/configuring
 */

module.exports = {
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.prod.json']
  },
  rules: {
    'tree-shaking/no-side-effects-in-initialization': 1
  },
  overrides: [
    {
      files: ['./scripts/*', '.eslintrc.js', 'babel.*', 'jest.*', '*.spec.ts'],
      rules: {
        'tree-shaking/no-side-effects-in-initialization': 0
      }
    }
  ]
}
