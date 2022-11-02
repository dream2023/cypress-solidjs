# @dream2023/cypress-solidjs

Mount SolidJS components in the open source [Cypress.io](https://www.cypress.io/) test runner **v10.7.0+**

## Install

- Requires SolidJS >= 1
- Requires Cypress v10.7.0 or later
- Requires [Node](https://nodejs.org/en/) version 12 or above

```sh
npm install --save-dev @dream2023/cypress-solidjs
```

## Run

Open cypress test runner

```bash
npx cypress open --component
```

If you need to run test in CI

```bash
npx cypress run --component
```

For more information, please check the official docs for [running Cypress](https://on.cypress.io/guides/getting-started/opening-the-app#Quick-Configuration) and for [component testing](https://on.cypress.io/guides/component-testing/writing-your-first-component-test).

## API

- `mount` is the most important function, allows to mount a given Solid UI component as a mini web application and interact with it using Cypress commands
- `unmount` removes previously mounted component, mostly useful to test how the component cleans up after itself

## Example

```js
import { mount } from '@dream2023/cypress-solidjs'

const HelloWorld = () => <p>Hello World!</p>

describe('HelloWorld component', () => {
  it('works', () => {
    mount(() => <HelloWorld />)
    cy.contains('Hello World!')
  })
})
```

## Development

Run `yarn build` to compile and sync packages to the `cypress` cli package.

Run `yarn cy:open` to open Cypress component testing against real-world examples.

Run `yarn test` to execute headless Cypress tests.

## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/develop/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).
