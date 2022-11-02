import { Component, createSignal } from "solid-js";

export const Counter: Component = () => {
  const [count, setCount] = createSignal(0);
  return <p onClick={() => {
    setCount(count() + 1)
  }}>count: {count()}</p>
}
