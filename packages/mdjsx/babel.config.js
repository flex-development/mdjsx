const rootBabelOptions = require('../../babel.config.json')
const isPlainObject = require('lodash').isPlainObject
const isString = require('lodash').isString

/**
 * @file Babel Configuration
 * @see https://babeljs.io/docs/en/configuration
 */

module.exports = api => {
  /**
   * Updates the Babel preset configuration.
   * In non-Jest environments, ES modules will not be used.
   */
  const presets = rootBabelOptions.presets.map(preset => {
    // Convert strings into array preset config
    const $preset = isString(preset) ? [preset, {}] : preset

    // If missing config object
    if (!isPlainObject($preset[1])) $preset[1] = {}

    // Decide if ES Modules should be compiled
    if (preset[0] === '@babel/preset-env') {
      // Don't use ES Modules in Jest environments
      $preset[1].targets.esmodules = !api.env('jest')
      $preset[1].modules = api.env('jest') ? 'commonjs' : false
    }

    return $preset
  })

  // Add `module-resolver` plugin
  const plugins = rootBabelOptions.plugins.concat([
    [
      'module-resolver',
      {
        alias: {
          '@mdjsx': './src',
          '@mdjsx-fixtures': './__test__/fixtures',
          '@mdjsx-test-utils': './__test__/utils'
        }
      }
    ]
  ])

  // Return Babel options
  return {
    ...rootBabelOptions,
    comments: api.env('development'),
    ignore: rootBabelOptions.ignore.concat(['src/types.ts']),
    plugins,
    presets
  }
}
