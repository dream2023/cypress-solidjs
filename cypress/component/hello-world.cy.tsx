import { mount } from '@dream2023/cypress-solidjs'
import { HelloWorld } from './hello-world'

describe('HelloWorld component', () => {
  it('works', () => {
    mount(() => <HelloWorld />)
    cy.contains('Hello World!')
  })
})
