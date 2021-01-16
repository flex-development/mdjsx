import OPTIONS from '@mdjsx-fixtures/options'
import PARSE_MD_WITH_MDX from '@mdjsx-fixtures/parse-md-with-mdx'
import PARSE_PURE_MARKDOWN from '@mdjsx-fixtures/parse-pure-md'
import PARSE_PURE_MDX from '@mdjsx-fixtures/parse-pure-mdx'
import tc from '@mdjsx/lib/tc'

/**
 * @file Unit Tests - tc
 * @module tests/tc
 */

describe('tc', () => {
  describe('parses markdown with mdx', () => {
    it('returns transform output object', async () => {
      expect(await tc(PARSE_MD_WITH_MDX, OPTIONS)).toBeTransformOutput()
    })

    it('returns string with jsx code', async () => {
      const compile = false

      expect(await tc(PARSE_MD_WITH_MDX, OPTIONS, compile)).toBeJSX()
    })
  })

  describe('parses pure markdown', () => {
    it('returns transform output object', async () => {
      expect(await tc(PARSE_PURE_MARKDOWN, OPTIONS)).toBeTransformOutput()
    })

    it('returns string with jsx code', async () => {
      const compile = false

      expect(await tc(PARSE_PURE_MARKDOWN, OPTIONS, compile)).toBeJSX()
    })
  })

  describe('parses pure mdx', () => {
    it('returns transform output object', async () => {
      expect(await tc(PARSE_PURE_MDX, OPTIONS)).toBeTransformOutput()
    })

    it('returns string with jsx code', async () => {
      const compile = false

      expect(await tc(PARSE_PURE_MDX, OPTIONS, compile)).toBeJSX()
    })
  })
})
