# MDJSX

Parse MDX syntax to JSX, and compile JSX

[![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Overview

[Getting Started](#getting-started)  
[Usage](#usage)  
[Built With](#built-with)  
[Contributing](docs/CONTRIBUTING.md)

## Getting Started

Parse MDX syntax to JSX, then optionally compile the result with a JSX-specific
version of [Bublé][1], an ES2015 compiler.

### Installation

1. Add `"@flex-development/mdjsx": "*"` to your project `dependencies`

2. Run `yarn` to re-install project dependencies

## Usage

Like the original [MDX API][1], MDJSX exposes asynchronous **and** synchronous
modules. By default, each library function will parse a string containing MDX,
and compile the result using Bublé.

### Async API

The `tc` function exposes the asynchronous Transpile Compile API:

```typescript
import { tc } from '@flex-development/mdjsx'

const mdxstr = '# Hello, world!'

tc(mdxstr).then(output => {
  console.debug(output.code)
  console.debug(output.map)
})
```

### Sync API

The `tcsync` function exposes the synchronous Transpile Compile API:

```typescript
import { tcsync } from '@flex-development/mdjsx'

const mdxstr = '## Hello, World\nRamps fixie flexitarian locavore man bun.'

const transform = tcsync(mdxstr)

console.debug(transform.code)
console.debug(transform.map)
```

### Transpile Compile Options

Each function supports passing additional options to the MDX parser or Bublé.
This can be done by passing an `options` object with the following shape:

```typescript
type TranspileCompileOptions = {
  buble?: TransformOptions
  mdx?: mdx.Options
}
```

```typescript
// Default options used in MDJSX REST API
const options: TranspileCompileOptions = {
  buble: { objectAssign: 'Object.assign' },
  mdx: { skipExport: true }
}
```

Type definitions can be [found here](./src/types.ts).

### Transpile Only

As mentioned previously, JSX strings are compiled by default. To prevent this
behavior, each library function supports the `compile` argument, a `boolean`
value indicating if the function should pass the resulting JSX to Bublé or not.

```typescript
import { TranspileCompileOptions, tc, tcsync } from '@flex-development/mdjsx'

const mdxstr = '# Hello, World\n\n<Button>Click me!</Button>'

const options: TranspileCompileOptions = {
  buble: { objectAssign: 'Object.assign' },
  mdx: { skipExport: true }
}

const compile = false

// Async API
tc(mdxstr, options, compile).then(jsx => console.debug(jsx))

// Sync API
console.debug(tcsync(mdxstr, options, compile))
```

## Built With

- [@mdx-js/mdx][2] - MDX implementation using remark
- [buble-jsx-only][3] - JSX-specific ES2015 compiler

[1]: https://mdxjs.com/advanced/api
[2]: https://github.com/mdx-js/mdx/tree/main/packages/mdx
[3]: https://github.com/datavis-tech/buble-jsx-only
