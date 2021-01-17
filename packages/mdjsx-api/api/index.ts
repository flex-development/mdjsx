import { GeneralError } from '@feathersjs/errors'
import { tcsync, TranspileCompileOptions } from '@flex-development/mdjsx'
import { VercelRequest as Req, VercelResponse as Res } from '@vercel/node'
import isString from 'lodash/isString'
import merge from 'lodash/merge'

/**
 * @file API Handler
 * @module api
 */

export interface MDJSXAPIRequest extends Omit<Req, 'body' | 'query'> {
  body?: string
  query: { compile?: boolean; options?: TranspileCompileOptions }
}

const BUBLE_OPTION_PREFIX = 'options.buble'
const MDX_OPTION_PREFIX = 'options.mdx'

const DEFAULT_OPTIONS = {
  buble: { objectAssign: 'Object.assign' },
  mdx: { skipExport: true }
}

export default ({ body, query }: MDJSXAPIRequest, res: Res): Res => {
  const { compile = true, options } = query

  // Get initial options object. Parse if stringified object
  let $options = isString(options) ? JSON.parse(options) : options

  // Merge with default options
  $options = merge(DEFAULT_OPTIONS, $options)

  // Handle query[option.foo]
  Object.keys(query).forEach(key => {
    if (key.includes(BUBLE_OPTION_PREFIX)) {
      $options[key.replace(BUBLE_OPTION_PREFIX, '')] = query[key]
    }

    if (key.includes(MDX_OPTION_PREFIX)) {
      $options[key.replace(MDX_OPTION_PREFIX, '')] = query[key]
    }
  })

  try {
    return res.json(tcsync(body, $options, JSON.parse(`${compile}`)))
  } catch (err) {
    const data = { body, query: { compile, options: $options } }
    const error = new GeneralError(err, data).toJSON()

    return res.status(error.code).json(error)
  }
}
