declare module '@mdx-js/mdx' {
  import { AnyObject } from '@flex-development/json/utils/types'

  let sync: (mdxstr: string, options?: AnyObject) => string

  export { sync }
}
