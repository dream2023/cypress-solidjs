import { Component, onCleanup, onMount } from 'solid-js';

type Fn = () => void

export const Comp: Component<{ onMount: Fn; onUnmount: Fn }> = (props) => {
  onMount(props.onMount)
  onCleanup(props.onUnmount)
  return  <div>Component with mount and unmount calls</div>
}
