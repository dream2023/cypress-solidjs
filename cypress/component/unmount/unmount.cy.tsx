import { mount, unmount } from '@dream2023/cypress-solidjs'
import { Component, onCleanup } from 'solid-js';

type Fn = () => void
export const Comp: Component<{ onUnmount: Fn }> = (props) => {
  onCleanup(props.onUnmount)
  return <div>My component</div>
}

describe('Comp with componentWillUnmount', () => {
  it('calls the prop', () => {
    mount(() => <Comp onUnmount={cy.stub().as('onUnmount')} />)
    cy.contains('My component')

    // after we have confirmed the component exists let's remove it
    // unmount() command is automatically enqueued
    unmount()

    // the component is gone from the DOM
    cy.contains('My component').should('not.exist')
    // the component has called the prop on unmount
    cy.get('@onUnmount').should('have.been.calledOnce')
  })

  it('can be called using then', () => {
    mount(() => <Comp onUnmount={cy.stub().as('onUnmount')} />)
    cy.contains('My component')

    // still works, should probably be removed in v5
    cy.then(unmount)

    // the component is gone from the DOM
    cy.contains('My component').should('not.exist')
    // the component has called the prop on unmount
    cy.get('@onUnmount').should('have.been.calledOnce')
  })
})
