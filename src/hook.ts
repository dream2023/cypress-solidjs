


import { createRoot, Owner } from "solid-js";

export function runAsyncHook(cb: () => Promise<void>, owner?: Owner | undefined | null): Promise<void> {
  return new Promise((resolve, reject) => {
    createRoot(async () => {
      try {
        const consoleWarn = cy.spy(console, 'warn')
        await cb()
        if (consoleWarn.calledWith('computations created outside a `createRoot` or `render` will never be disposed')) {
          expect(consoleWarn).not.be.calledWith('computations created outside a `createRoot` or `render` will never be disposed')
        }
        consoleWarn.restore()
        resolve()
      } catch (err) {
        reject(err)
      }
    }, owner!)
  })
}

export const runHook = (cb: () => void, owner?: Owner | undefined | null) => {
  createRoot(() => {
    const consoleWarn = cy.spy(console, 'warn')
    cb()
    if (consoleWarn.calledWith('computations created outside a `createRoot` or `render` will never be disposed')) {
      expect(consoleWarn).not.be.calledWith('computations created outside a `createRoot` or `render` will never be disposed')
    }
    consoleWarn.restore()
  }, owner!);
}
