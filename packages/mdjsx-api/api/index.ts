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

export default ({ body, query }: MDJSXAPIRequest, res: Res): Res => {
  const { compile = true, options } = query

  // Merge options object. Parse if stringified object
  const $options = merge(isString(options) ? JSON.parse(options) : options, {
    buble: { objectAssign: 'Object.assign' },
    mdx: { skipExport: true }
  })

  // Handle query[option.foo]
  Object.keys(query).forEach(key => {
    if (key.includes('options.buble')) {
      $options[key.replace('options.buble', '')] = query[key]
    }

    if (key.includes('options.mdx')) {
      $options[key.replace('options.mdx', '')] = query[key]
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
