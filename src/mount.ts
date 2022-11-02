import { getContainerEl, setupHooks } from "@cypress/mount-utils";
import type { JSX } from "solid-js/jsx-runtime";
import { render } from 'solid-js/web';

let dispose: () => void | undefined

function cleanup() {
  dispose?.()
}

export type Ui = () => JSX.Element;
interface Options {
  log?: boolean
}
export function mount(ui: Ui, options: Options = {}) {
  const root = getContainerEl();
  dispose = render(ui, root);

  return cy.wait(0, { log: false }).then(() => {
    if (options.log) {
      Cypress.log({
        name: "mount",
        message: "Mounted component",
      });
    }
  });
}

export interface UnmountArgs {
  log: boolean
  boundComponentMessage?: string
}
export function unmount(options: UnmountArgs = { log: true }) {
  return cy.then(() => {
    dispose?.()

    if (options.log) {
      Cypress.log({
        name: 'unmount',
        type: 'parent',
        message: [options.boundComponentMessage ?? 'Unmounted component'],
        consoleProps: () => {
          return {
            description: 'Unmounts Solid component',
            parent: getContainerEl().parentNode,
          }
        },
      })
    }
  })
}

setupHooks(cleanup);
