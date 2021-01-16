import { TranspileCompileOptions, TranspileCompileResult } from '@mdjsx/types'
import mdx from '@mdx-js/mdx'
import { transform } from 'buble-jsx-only'

/**
 * @file Implementation - tc
 * @module lib/tc
 */

/**
 * Asynchronously parse MDX and transpile to JSX, as well as optionally compile
 * the resulting JSX with Bublé.
 *
 * @async
 * @param mdxstr - String with MDX content
 * @param compile - If true, compile resulting JSX
 * @param options - Object with MDX and Buble options
 * @param options.buble - Bublé transform options
 * @param options.mdx - MDX transform and compiler options
 * @return Promise containing JSX string or Bublé transform object
 */
const tc = async (
  mdxstr = '',
  options: TranspileCompileOptions = {},
  compile = true
): Promise<TranspileCompileResult> => {
  // Parse MDX
  const jsx = (await mdx(`${mdxstr}`, options.mdx)).trim()

  // If JSX shouldn't be compiled, return result
  if (!compile) return jsx

  // Compile JSX
  return transform(jsx, options.buble)
}

export default tc
