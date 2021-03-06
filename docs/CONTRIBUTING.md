# Contributing

These instructions will help you begin making changes on your local machine, as
well follow our coding guidelines.

## Overview

[Getting Started](#getting-started)  
[Coding Standards](#coding-standards)  
[Making Changes](#making-changes)  
[Testing](#testing)  
[Documentation](#documentation)  
[Branch Naming Conventions](#branch-naming-conventions)  
[Creating a Pull Request](#creating-a-pull-request)

## Getting Started

This project is structured as a monorepo and uses [Lerna](https://lerna.js.org/)
with Yarn workspaces.

### Git Configuration

Copy the [starter Git global configuration](.gitconfig) to stay inline with our
coding guidelines, as well as begin extending your own workflow.

**Note**: The examples below will uses aliases from the starter config.

### Development Environment

Copy the snippet below to get your development environment setup:

```zsh
git clone https://github.com/flex-development/mdjsx.git; cd mdjsx
yarn # or npm install
```

- `yarn dev:api`: Start API dev server on port `8080`

## Coding Standards

[Husky](https://github.com/typicode/husky) is used to enforce coding and commit
message standards.

### Commit Messages

This project adheres to
[Conventional Commits](https://www.conventionalcommits.org/) standards.

Commit messages should be one of the following types:

- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to our CI configuration files and scripts
- `chore`: Changes that don't impact external users
- `docs`: Documentation only changes
- `feat`: New features
- `fix`: Bug fixes
- `perf`: Performance improvements
- `refactor`: Code improvements
- `revert`: Revert past changes
- `style`: Changes that do not affect the meaning of the code
- `test`: Adding missing tests or correcting existing tests
- `wip`: Working on changes, but you need to go to bed :wink:

For example:

```zsh
  git chore "add eslint configuration"
```

will produce the following commit: `chore: add eslint configuration`

[commitlint](https://github.com/conventional-changelog/commitlint) is used to
enforce commit guidlelines.

To review our commitlint rules, see the configuration file:

- [`commitlint.config.js`](../commitlint.config.js)`

### Formatting & Linting

#### Formatting

This project uses [Prettier](https://prettier.io/) to format all code.

To review our formatting guidelines, see our configuration files:

- Configuration:[`.prettierrc.js`](../.prettierrc.js)
- Ignore Patterns: [`.prettierignore`](../.prettierignore)

#### Linting

This project uses [ESLint](https://eslint.org/) to lint JavaScript and
TypeScript files.

To review our linting guidelines, see our configuration files:

- Configuration: [`.eslintrc.json`](../.eslintrc.json)`
- Ignore Patterns: [`.eslintignore`](../.eslintignore)`

## Making Changes

For more information on how to make changes within different package scopes, see
the Contributing Guide for each package:

- [`lib`](../packages/lib/docs/CONTRIBUTING.md)
- [`serverless`](../packages/serverless/docs/CONTRIBUTING.md)

## Documentation

- JavaScript & TypeScript: [JSDoc](https://jsdoc.app)

Before making a pull request, be sure your code is well documented, as it will
be part of your code review.

## Testing

This project uses [Jest](https://jestjs.io/) as its test runner. To run the
tests in this project, run `yarn test`.

Husky is configured to run tests before every push. If a bug report concerning a
failed test is needed, you'll be able to push your code even if a test fails.

## Branch Naming Conventions

When creating a new branch, the name should match the following format:
**`feature/`**, **`hotfix/`**, **`release/`**, or **`support/`** followed by
**`<branch_name>`**.

For example:

```zsh
  git feature repo-setup
```

will create a new branch titled `feature/repo-setup` and push it to `origin`.

## Creating a Pull Request

If you need help, make note of any issues in their respective files. Whenever
possible, create a test to reproduce the error. Make sure to label your pr as
`help wanted`.

When you're ready to have your changes reviewed, make sure your code is
[well documented](#documentation). The `pre-commit` and `pre-push` hooks will
test your changes against our coding guidelines, as well run all of the tests in
this project.

### Submit for Review

- Use [**this template**](./pull_request_template.md)
- Label your pull request appropriately
- Assign the task to yourself and the appropriate reviewer
