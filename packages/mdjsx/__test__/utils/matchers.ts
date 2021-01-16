import { ANYTHING } from '@flex-development/json'
import JSX_PRAGMA from '@mdjsx-fixtures/jsx-pragma'
import isPlainObject from 'lodash/isPlainObject'
import isString from 'lodash/isString'

/**
 * @file Test Utilities - Custom Matchers
 * @module test/utils/matchers
 */

/**
 * Checks if {@param res} is a string containing JSX pragma.
 *
 * @param res - Result from data call
 */
export const toBeJSX = (res: ANYTHING): jest.CustomMatcherResult => {
  const pass_false = {
    message: () => `Expected "${res}" to contain ${JSX_PRAGMA}`,
    pass: false
  }

  if (!isString(res)) return pass_false

  if (res.includes(JSX_PRAGMA)) {
    return {
      message: () => `Expected "${res}" to not contain ${JSX_PRAGMA}`,
      pass: true
    }
  }

  return pass_false
}

/**
 * Checks if {@param res} takes the shape of a Bublé `TransformOuput` object.
 *
 * @param res - Result from data call
 */
export const toBeTransformOutput = (
  res: ANYTHING
): jest.CustomMatcherResult => {
  const pass_false = {
    message: () => `Expected "${res}" to model Bublé transform output`,
    pass: false
  }

  if (!isPlainObject(res)) return pass_false

  if (res.code && res.map && res.code.includes(JSX_PRAGMA)) {
    return {
      message: () => `Expected "${res}" to not model Bublé transform output`,
      pass: true
    }
  }

  return pass_false
}
