import { mount } from '@dream2023/cypress-solidjs'
import { Comp } from './comp'

it('calls callbacks on mount and unmount', () => {
  const onMount = cy.stub()
  const onUnmount = cy.stub()

  // mount is an async call
  mount(() => <Comp onMount={onMount} onUnmount={onUnmount} />)
  cy.then(() => {
    expect(onMount).to.have.been.calledOnce
    expect(onUnmount).to.have.not.been.called
  })

  cy.contains('Component with').should('be.visible')
})
