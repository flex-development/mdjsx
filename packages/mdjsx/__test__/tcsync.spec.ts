import OPTIONS from '@mdjsx-fixtures/options'
import PARSE_MD_WITH_MDX from '@mdjsx-fixtures/parse-md-with-mdx'
import PARSE_PURE_MARKDOWN from '@mdjsx-fixtures/parse-pure-md'
import PARSE_PURE_MDX from '@mdjsx-fixtures/parse-pure-mdx'
import tcsync from '@mdjsx/lib/tcsync'

/**
 * @file Unit Tests - tcsync
 * @module tests/tcsync
 */

describe('tcsync', () => {
  describe('parses markdown with mdx', () => {
    it('returns transform output object', () => {
      expect(tcsync(PARSE_MD_WITH_MDX, OPTIONS)).toBeTransformOutput()
    })

    it('returns string with jsx code', () => {
      const compile = false

      expect(tcsync(PARSE_MD_WITH_MDX, OPTIONS, compile)).toBeJSX()
    })
  })

  describe('parses pure markdown', () => {
    it('returns transform output object', () => {
      expect(tcsync(PARSE_PURE_MARKDOWN, OPTIONS)).toBeTransformOutput()
    })

    it('returns string with jsx code', () => {
      const compile = false

      expect(tcsync(PARSE_PURE_MARKDOWN, OPTIONS, compile)).toBeJSX()
    })
  })

  describe('parses pure mdx', () => {
    it('returns transform output object', () => {
      expect(tcsync(PARSE_PURE_MDX, OPTIONS)).toBeTransformOutput()
    })

    it('returns string with jsx code', () => {
      const compile = false

      expect(tcsync(PARSE_PURE_MDX, OPTIONS, compile)).toBeJSX()
    })
  })
})
