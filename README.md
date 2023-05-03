# @dream2023/cypress-solidjs

Mount SolidJS components in the open source [Cypress.io](https://www.cypress.io/) test runner **v10.7.0+**

## Install

- Requires SolidJS >= 1
- Requires Cypress v12.7.0 or later
- Requires [Node](https://nodejs.org/en/) version 12 or above

```sh
npm install --save-dev cypress @dream2023/cypress-ct-solid-js
```

## Usage

```ts
// cypress.config.ts
import { defineConfig } from 'cypress'
export default defineConfig({
  component: {
    devServer: {
      framework: '@dream2023/cypress-ct-solid-js',
      bundler: 'vite',
    },
  },
})
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

## Example

```tsx
import { mount, runHook, runAsyncHook } from '@dream2023/cypress-solidjs'

const HelloWorld = () => <p>Hello World!</p>;

const useCounter = (): { count: Accessor<number>, inc: () => void } => {
  const [count, setCount] = createSignal<number>(0)
  const inc = () => {
    setCount(count => count + 1)
  }
  return { count, inc }
}

const useDelay = (time: number) => {
  const [done, setDone] = createSignal(false);
  setTimeout(() => {
    setDone(true)
  }, time)

  return done
}
describe('HelloWorld component', () => {
  it('render component', () => {
    mount(() => <HelloWorld />)
    cy.contains('Hello World!')
  })

  it('hook', () => {
    runHook(() => {
      const { count, inc } = useCounter()
      expect(count()).to.be.eq(0)
      inc()
      expect(count()).to.be.eq(1)
    })
  })

  it('async hook', () => {
    return runAsyncHook(async () => {
      const time = 1000
      const done = useDelay(time)
      expect(done()).to.eq(false)
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(undefined)
        }, time)
      })
      expect(done()).to.eq(true)
    })
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
