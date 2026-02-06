<script>
	import Seo from '$lib/components/seo/Seo.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	const { title, excerpt } = $$props;
</script>

<Seo title="{title} | BreizhCamp" description={excerpt} type="article" />

<article>
	<slot />

	<div>
		<Button href="/infos-pratiques">Retourner aux infos pratiques</Button>
	</div>
</article>

<style>
	div {
		display: flex;
		justify-content: center;
		margin: 128px 0 64px 0;
	}

	article {
		color: var(--neutral-700);
		line-height: 1.7;
		font-size: 1.1rem;
		padding: 24px;
		max-width: 980px;
		margin: auto;
	}

	article :global(h1) {
		color: var(--neutral-900);
		font-size: 1.5rem;
		margin: 2rem 0 1rem 0;
		font-weight: 600;
	}

	article :global(h2) {
		color: var(--neutral-800);
		font-size: 1.25rem;
		margin: 4rem 0 0.75rem 0;
		font-weight: 600;
	}

	article :global(p) {
		margin-bottom: 1rem;
	}

	article :global(ul),
	article :global(ol) {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	article :global(li) {
		margin-bottom: 0.5rem;
	}

	article :global(strong) {
		color: var(--neutral-900);
		font-weight: 600;
	}

	article :global(em) {
		color: var(--violet);
		font-style: normal;
		font-weight: 500;
	}

	@media (min-width: 768px) {
		article {
			max-width: 1024px;
			margin: auto;
		}
	}
</style>
