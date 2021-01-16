const path = require('path')

/**
 * @file Jest Configuration
 * @see https://jestjs.io/docs/en/configuration
 */

module.exports = {
  globals: {
    'ts-jest': {
      babelConfig: '<rootDir>/babel.config.js',
      tsconfig: '<rootDir>/tsconfig.json'
    }
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@mdjsx/(.*)$': '<rootDir>/src/$1'
  },
  prettierPath: path.join(__dirname, '../../node_modules/prettier'),
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '__mocks__',
    '__test__/utils',
    'fixtures',
    'node_modules/',
    '(.*).d.ts'
  ],
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  verbose: true
}
