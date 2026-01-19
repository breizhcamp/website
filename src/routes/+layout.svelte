<script lang="ts">
	import '$lib/css/index.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';

	let { children } = $props();
</script>

<div class="page-wrapper">
	<Header />
	{@render children?.()}
	<Footer />
</div>

<style>
	.page-wrapper {
		max-width: 1440px;
		margin: 0 auto;
	}

	:global(main) {
		padding: 3rem;
	}

	@media (max-width: 900px) {
		:global(main) {
			padding: 1.5rem;
		}
	}
</style>
