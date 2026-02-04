<script>
	import { onMount } from 'svelte';
	import Button from '../../lib/components/ui/Button.svelte';
	import Card from '../../lib/components/ui/Card.svelte';

	let articles = $state([]);

	onMount(async () => {
		// Charger les articles depuis l'API
		const response = await fetch('/api/blog');
		articles = await response.json();
	});

	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('fr-FR', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog - BreizhCamp 2026</title>
	<meta
		name="description"
		content="Actualités, annonces et articles du BreizhCamp. Restez informés des dernières nouvelles de la conférence tech de Bretagne."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="container">
		<h1>Blog BreizhCamp</h1>
		<p class="hero-description">
			Actualités, annonces et coulisses de la plus grande conférence tech de Bretagne.
			Découvrez les dernières nouvelles et préparez-vous pour l'édition 2026.
		</p>
	</div>
</section>

<!-- Articles -->
<section class="articles">
	<div class="container">
		{#if articles.length > 0}
			<div class="articles-grid">
				{#each articles as article}
					<Card interactive>
						<article class="article-card">
							{#if article.image}
								<div class="article-image">
									<img src={article.image} alt={article.title} />
								</div>
							{/if}
							<div class="article-content">
								<div class="article-meta">
									<time datetime={article.date} class="article-date">
										{formatDate(article.date)}
									</time>
									{#if article.category}
										<span class="article-category">{article.category}</span>
									{/if}
								</div>
								<h2 class="article-title">
									<a href="/blog/{article.slug}">{article.title}</a>
								</h2>
								<p class="article-excerpt">{article.excerpt}</p>
								<div class="article-actions">
									<Button variant="link" href="/blog/{article.slug}">
										Lire la suite
									</Button>
								</div>
							</div>
						</article>
					</Card>
				{/each}
			</div>
		{:else}
			<div class="no-articles">
				<p>Aucun article disponible pour le moment.</p>
				<p>Revenez bientôt pour découvrir les actualités du BreizhCamp 2026 !</p>
			</div>
		{/if}
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	/* Hero Section */
	.hero {
		background: linear-gradient(135deg, var(--violet) 0%, var(--orange) 100%);
		color: white;
		padding: 4rem 0;
		text-align: center;
	}

	.hero h1 {
		font-size: 3rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
		line-height: 1.1;
	}

	.hero-description {
		font-size: 1.25rem;
		margin-bottom: 2rem;
		opacity: 0.95;
		line-height: 1.6;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	/* Articles */
	.articles {
		padding: 4rem 0;
	}

	.articles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2rem;
	}

	.article-card {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.article-image {
		width: 100%;
		height: 200px;
		overflow: hidden;
		border-radius: var(--border-radius);
		margin-bottom: 1.5rem;
	}

	.article-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.article-card:hover .article-image img {
		transform: scale(1.05);
	}

	.article-content {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.article-meta {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.article-date {
		color: var(--neutral-600);
		font-size: 0.9rem;
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
		margin-bottom: 1rem;
		line-height: 1.3;
	}

	.article-title a {
		color: var(--neutral-900);
		text-decoration: none;
		font-size: 1.5rem;
		font-weight: 600;
		transition: color 0.2s ease;
	}

	.article-title a:hover {
		color: var(--violet);
	}

	.article-title a:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
		border-radius: 4px;
	}

	.article-excerpt {
		color: var(--neutral-700);
		line-height: 1.6;
		margin-bottom: 1.5rem;
		flex: 1;
	}

	.article-actions {
		margin-top: auto;
	}

	.no-articles {
		text-align: center;
		padding: 4rem 2rem;
		color: var(--neutral-600);
	}

	.no-articles p {
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.hero h1 {
			font-size: 4rem;
		}

		.articles-grid {
			gap: 2.5rem;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			padding: 6rem 0;
		}

		.articles {
			padding: 6rem 0;
		}

		.articles-grid {
			gap: 3rem;
		}
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.hero-description {
			opacity: 1;
		}

		.article-date {
			color: var(--neutral-800);
		}

		.article-excerpt {
			color: var(--neutral-800);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.article-image img {
			transition: none;
		}

		.article-card:hover .article-image img {
			transform: none;
		}
	}
</style>
