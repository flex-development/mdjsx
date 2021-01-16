# KustomzCore

MDJSX core library package

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

## Usage

1. Add `"@flex-development/mdjsx": "*"` to your project `dependencies`

2. Run `yarn` to re-install project dependencies

## Built With

- [@mdx-js/mdx][1] - MDX implementation using remark
- [buble-jsx-only][2] - JSX-specific ES2015 compiler

[1]: https://github.com/mdx-js/mdx/tree/main/packages/mdx
[2]: https://github.com/datavis-tech/buble-jsx-only
