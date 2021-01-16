import { TranspileCompileOptions, TranspileCompileResult } from '@mdjsx/types'
import mdx from '@mdx-js/mdx'
import { transform } from 'buble-jsx-only'

/**
 * @file Implementation - tcsync
 * @module lib/tcsync
 */

/**
 * Synchronously parse MDX and transpile to JSX, as well as optionally compile
 * the resulting JSX with Bublé.
 *
 * @param mdxstr - String with MDX content
 * @param compile - If true, compile resulting JSX
 * @param options - Object with MDX and Buble options
 * @param options.buble - Bublé transform options
 * @param options.mdx - MDX transform and compiler options
 * @return JSX string or Bublé transform object
 */
const tcsync = (
  mdxstr = '',
  options: TranspileCompileOptions = {},
  compile = true
): TranspileCompileResult => {
  // Parse MDX
  const jsx = mdx.sync(`${mdxstr}`, options.mdx).trim()

  // If JSX shouldn't be compiled, return result
  if (!compile) return jsx

  // Compile JSX
  return transform(jsx, options.buble)
}

export default tcsync
