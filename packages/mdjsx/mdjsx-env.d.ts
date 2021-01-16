
declare module '@mdx-js/mdx' {
  import { mdx } from '@mdjsx/types'

  const compile: mdx.TranspileAsync & {
    createMdxAstCompiler: mdx.CreateMDXASTCompiler
    sync: mdx.TranspileSync
  }

  export default compile
}

declare module 'buble-jsx-only' {
  export * from 'buble'
}
