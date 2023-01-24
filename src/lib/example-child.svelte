<svelte:options tag="example-child" />

<script lang="ts">
	export let message = "";
</script>

<div class="box"><small>{message}</small></div>

<style>
	.box {
		display: inline-block;
		padding: 0.6em;
		margin: 0.3em;
		background-color: rebeccapurple;
		margin-bottom: 1.6rem;
		color: white;
		border-radius: 3px;
	}
</style>
