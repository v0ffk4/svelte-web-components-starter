<script lang="ts">
  import ExampleCounterChild from "./exampleCounterChild.svelte";

  let count: number = 0
  const increment = () => {
    count += 1
  }

  export let greeting = "hello"
</script>

<svelte:options tag="example-counter" />

<h1>{greeting}</h1>
<ExampleCounterChild />
<button on:click={increment}>
  Clicks: {count}
</button>


<style src="./example-counter.css"></style>