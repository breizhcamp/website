<script>
	import '../lib/css/index.css';
	import Header from '../lib/components/layout/Header.svelte';
	import Footer from '../lib/components/layout/Footer.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		min-height: calc(100vh - 4rem);
		display: flex;
		flex-direction: column;
	}

	@media (min-width: 1024px) {
		main {
			min-height: calc(100vh - 5rem);
		}
	}
</style>
