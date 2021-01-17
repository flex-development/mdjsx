# Contributing

These instructions will help you install the project on your local machine, as
well as add new features.

## Overview

[Getting Started](../../../docs/CONTRIBUTING.md)  
[Development Environment](#development-environment)  
[Making Changes](#making-changes)  
[Testing](#testing)

## Development Environment

1. Copy the snippet below to download the project on your local machine.

   ```zsh
    git clone https://github.com/flex-development/mdjsx.git; cd mdjsx; yarn
   ```

2. Run `yarn dev:api` to start the dev server on `http://localhost:8080`

## Making Changes

File: `api/index.ts`

At present, the MDJSX API is a single endpoint. In the event the API grows in
complexity, a `lib` directory should be added to house additional modules.

## Testing

**TODO**: Add unit testing workflow

1. Run `yarn dev:api` from the root of the repo

2. Send requests to `http://localhost:8080` or `http://localhost:8080/api`
