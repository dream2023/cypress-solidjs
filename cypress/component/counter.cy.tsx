import { mount } from '@dream2023/cypress-solidjs'
import { Counter } from './counter'

describe('Transpiled', () => {
  it('counts clicks', () => {
    mount(() => <Counter />)
    cy.contains('count: 0')
    .click()
    .contains('count: 1')
    .click()
    .contains('count: 2')
  })

  it('counts clicks 2', () => {
    mount(() => <Counter />)
    cy.contains('count: 0')
    .click()
    .contains('count: 1')
    .click()
    .contains('count: 2')
  })
})

describe('Counter mounted before each test', () => {
  beforeEach(() => {
    mount(() => <Counter />)
  })

  it('goes to 3', () => {
    cy.contains('count: 0')
    .click()
    .click()
    .click()
    .contains('count: 3')
  })
})
