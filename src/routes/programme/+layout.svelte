<script lang="ts">
	let { children } = $props();
</script>

<main>
	{@render children()}
</main>

<style>
	main {
		max-width: 1440px;
		margin: auto;
		padding: 24px;
	}
</style>
