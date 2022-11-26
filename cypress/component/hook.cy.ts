import { Accessor, createSignal } from "solid-js"
import { runAsyncHook, runHook } from "../../src/hook"

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