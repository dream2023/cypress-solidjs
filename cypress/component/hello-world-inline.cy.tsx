import { mount } from '@dream2023/cypress-solidjs'

const HelloWorld = () => <p>Hello World!</p>

describe('HelloWorld component', () => {
  it('works', () => {
    mount(() => <HelloWorld />)
    cy.contains('Hello World!')
  })
})
