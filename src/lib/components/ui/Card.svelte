<script>
	const { align = 'left', children } = $props(); // left, center
</script>

<article class="card align-{align}">
	{@render children?.()}
</article>

<style>
	.card {
		border: 1px solid var(--neutral-100);
		border-radius: var(--border-radius);
		padding: 2rem;
		background: white;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
		transition: box-shadow 0.3s;
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.card:hover {
		box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
	}

	.align-center {
		align-items: center;
		text-align: center;
	}
	.align-left {
		align-items: flex-start;
		text-align: left;
	}
</style>
