# 🚧 MDJSX

[![TypeScript](https://badgen.net/badge/-/typescript?icon=typescript&label)](https://www.typescriptlang.org/)
[![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/non-flat-round.svg)](https://github.com/ahmadawais/Emoji-Log/)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## Overview

[Getting Started](#getting-started)  
[Usage](#usage)  
[Contributing](docs/CONTRIBUTING.md)  
[Deployment](docs/DEPLOYMENT.md)

## Getting Started

MDJSX exposes a joint MDX transpilation and JSX compilation API via utility
module and serverless function. Parse MDX syntax to JSX, then optionally compile
the result with a JSX-specific version of [Bublé][1], an ES2015 compiler.

## Usage

This project is formatted as a monorepo. For more information on using each
package, see below:

- [@flex-development/mdjsx](packages/lib/README.md)

## Built With

- [@mdx-js/mdx][1] - MDX implementation using remark
- [buble-jsx-only][2] - JSX-specific ES2015 compiler
- [Vercel][3] - Hosting platform for serverless functions

[1]: https://github.com/mdx-js/mdx/tree/main/packages/mdx
[2]: https://github.com/datavis-tech/buble-jsx-only
[3]: https://vercel.com/docs/serverless-functions/introduction
