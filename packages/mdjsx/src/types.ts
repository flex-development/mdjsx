import type { TransformOptions, TransformOutput } from 'buble'
import type { Plugin, Processor } from 'unified'

/**
 * @file Type Declarations
 * @module types
 */

/**
 * Types aren't exported from the `@mdx-js/mdx` module, so they've be re-defined
 * for library use here.
 *
 * @see https://github.com/mdx-js/mdx/blob/main/packages/mdx/types/index.d.ts
 */
export namespace mdx {
  /**
   * Asynchronously compile MDX to JSX.
   *
   * @param mdx String with MDX content
   * @param options MDX transformation and compiler options
   * @return JSX code string
   */
  export type Compile = (mdx: string, options?: Options) => Promise<string>

  /**
   * Generate an MDX compiler.
   */
  export type CreateCompiler = (options?: Options) => Processor

  /**
   * Generate an MDX AST syntax tree compiler.
   */
  export type CreateMDXASTCompiler = (options?: Options) => Processor

  /**
   * MDX transformation and compiler options.
   */
  export interface Options {
    /**
     * Path on disk to processed file.
     *
     * @default undefined
     */
    filepath?: string

    /**
     * Array of rehype plugins to tranform HTML content.
     *
     * @see https://github.com/rehypejs/rehype/blob/main/doc/plugins.md
     *
     * @default []
     */
    rehypePlugins?: Plugin[]

    /**
     * Array of remark plugins to transform Markdown content.
     *
     * @see https://github.com/remarkjs/remark/blob/main/doc/plugins.md
     *
     * @default []
     */
    remarkPlugins?: Plugin[]

    /**
     * Skip the addition of `export default` statement when serializing to JSX.
     *
     * @default false
     */
    skipExport?: boolean

    /**
     * Wrap `export default` statement when serializing to JSX.
     */
    wrapExport?: string
  }

  /**
   * Synchronously compile MDX to JSX.
   *
   * @param mdx String with MDX content
   * @param options MDX transformation and compiler options
   * @return JSX code string
   */
  export type Sync = (mdx: string, options?: Options) => string
}

/**
 * Object with MDX transformation and compiler options, as well as Bublé
 * transform options.
 */
export type TranspileCompileOptions = {
  buble?: TransformOptions
  mdx?: mdx.Options
}

/**
 * Data returned by the core library functions. If JSX isn't compiled after MDX
 * is parsed, the library functions will return a string. Otherwise, they will
 * return a Bublé transform output object.
 */
export type TranspileCompileResult = TransformOutput | string

/**
 * Bublé definitions used throughout the library.
 */
export type { TransformOutput } from 'buble'
