<script>
	import Seo from '$lib/components/seo/Seo.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import { formatDate } from '$lib/date.utils';

	const { title, category, excerpt, date, banner, author } = $$props;
</script>

<Seo
	title="{title} | BreizhCamp"
	description={excerpt}
	{date}
	image={banner}
	{author}
	type="article"
/>

<main class="article-page">
	<div class="container">
		<article class="article">
			<!-- Navigation -->
			<nav class="breadcrumb" aria-label="Fil d'Ariane">
				<a href="/">Accueil</a>
				<span aria-hidden="true">›</span>
				<a href="/blog">Blog</a>
				<span aria-hidden="true">›</span>
				<span aria-current="page">{title}</span>
			</nav>

			<!-- En-tête de l'article -->
			<header class="article-header">
				<div class="article-meta">
					<time datetime={date} class="article-date">
						{formatDate(date)}
					</time>
					{#if category}
						<span class="article-category">{category}</span>
					{/if}
				</div>
				<h1 class="article-title">{title}</h1>
				<p class="article-excerpt">{excerpt}</p>
			</header>

			<!-- Image principale -->
			{#if banner}
				<div class="article-image">
					<img src={banner} alt={title} />
				</div>
			{/if}

			<!-- Contenu de l'article -->
			<div class="article-content">
				<slot />

				<p>— {author}</p>
			</div>

			<!-- Actions -->
			<footer class="article-footer">
				<div class="article-actions">
					<Button variant="secondary" href="/blog">← Retour au blog</Button>
					<Button variant="primary" href="/">Accueil BreizhCamp</Button>
				</div>
			</footer>
		</article>
	</div>
</main>

<style>
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.article-page {
		padding: 2rem 0 4rem;
		min-height: 60vh;
	}

	/* Breadcrumb */
	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 2rem;
		font-size: 0.9rem;
		color: var(--neutral-600);
	}

	.breadcrumb a {
		color: var(--violet);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		color: var(--neutral-900);
		text-decoration: underline;
	}

	.breadcrumb a:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
		border-radius: 4px;
	}

	.breadcrumb span[aria-current='page'] {
		color: var(--neutral-800);
		font-weight: 500;
	}

	/* Article */
	.article {
		max-width: none;
	}

	.article-header {
		margin-bottom: 3rem;
	}

	.article-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1.5rem;
		flex-wrap: wrap;
	}

	.article-date {
		color: var(--neutral-700);
		font-size: 0.95rem;
		font-weight: 500;
	}

	.article-category {
		background: var(--violet);
		color: white;
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		text-transform: uppercase;
		letter-spacing: 0.025em;
	}

	.article-title {
		font-size: 2.5rem;
		font-weight: 600;
		line-height: 1.2;
		color: var(--neutral-900);
		margin-bottom: 1.5rem;
	}

	.article-excerpt {
		font-size: 1.25rem;
		line-height: 1.6;
		color: var(--neutral-700);
		font-style: italic;
	}

	.article-image {
		width: 100%;
		height: 400px;
		overflow: hidden;
		border-radius: var(--border-radius);
		margin-bottom: 3rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
	}

	.article-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.article-content {
		line-height: 1.8;
		font-size: 1.1rem;
		color: var(--neutral-800);
		margin-bottom: 3rem;
	}

	.article-content :global(h2) {
		font-size: 1.8rem;
		font-weight: 600;
		color: var(--neutral-900);
		margin: 2.5rem 0 1rem 0;
		line-height: 1.3;
	}

	.article-content :global(h3) {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--neutral-900);
		margin: 2rem 0 0.75rem 0;
		line-height: 1.3;
	}

	.article-content :global(p) {
		margin-bottom: 1.5rem;
	}

	.article-content :global(ul),
	.article-content :global(ol) {
		margin: 1.5rem 0;
		padding-left: 2rem;
	}

	.article-content :global(li) {
		margin-bottom: 0.5rem;
	}

	.article-content :global(blockquote) {
		border-left: 4px solid var(--violet);
		padding-left: 1.5rem;
		margin: 2rem 0;
		font-style: italic;
		color: var(--neutral-700);
	}

	.article-content :global(code) {
		background: var(--neutral-100);
		padding: 0.2rem 0.4rem;
		border-radius: 4px;
		font-family: 'Courier New', monospace;
		font-size: 0.9em;
	}

	.article-content :global(pre) {
		background: var(--neutral-900);
		color: white;
		padding: 1.5rem;
		border-radius: var(--border-radius);
		overflow-x: auto;
		margin: 2rem 0;
	}

	.article-content :global(pre code) {
		background: none;
		padding: 0;
		color: inherit;
	}

	.article-footer {
		border-top: 1px solid var(--neutral-200);
		padding-top: 2rem;
	}

	.article-actions {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.article-page {
			padding: 3rem 0 6rem;
		}

		.article-title {
			font-size: 3rem;
		}

		.article-image {
			height: 500px;
		}
	}

	@media (max-width: 640px) {
		.article-title {
			font-size: 2rem;
		}

		.article-excerpt {
			font-size: 1.1rem;
		}

		.article-content {
			font-size: 1rem;
		}

		.article-actions {
			flex-direction: column;
		}

		.article-image {
			height: 250px;
		}
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.article-date {
			color: var(--neutral-800);
		}

		.article-excerpt {
			color: var(--neutral-800);
		}

		.article-content {
			color: var(--neutral-900);
		}
	}
</style>
