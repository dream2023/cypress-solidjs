import { createRoot, getOwner, Owner } from "solid-js";

export function runAsyncHook(cb: (owner: Owner | null) => Promise<void>, owner?: Owner | null): Promise<void> {
  return new Promise((resolve, reject) => {
    createRoot(() => {
      const owner = getOwner()
      const consoleWarn = cy.spy(console, 'warn')
      Promise.resolve(cb(owner)).then(() => {
        if (consoleWarn.calledWith('computations created outside a `createRoot` or `render` will never be disposed')) {
          expect(consoleWarn).not.be.calledWith('computations created outside a `createRoot` or `render` will never be disposed')
          reject();
        } else {
          resolve()
        }
      }, reject)
    }, owner!)
  })
}

export const runHook = (cb: (owner: Owner | null) => void, owner?: Owner | null) => {
  createRoot(() => {
    const consoleWarn = cy.spy(console, 'warn')
    const owner = getOwner()
    cb(owner)
    if (consoleWarn.calledWith('computations created outside a `createRoot` or `render` will never be disposed')) {
      expect(consoleWarn).not.be.calledWith('computations created outside a `createRoot` or `render` will never be disposed')
    }
    consoleWarn.restore()
  }, owner!);
}
