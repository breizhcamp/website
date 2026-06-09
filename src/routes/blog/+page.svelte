<script lang="ts">
	import { PUBLIC_BASE_URL } from '$env/static/public';
	import Seo from '$lib/components/seo/Seo.svelte';
	import BlogPostCardList from './BlogPostCardList.svelte';
	import { editionYear } from '$lib/constants';

	const { data } = $props();
</script>

<Seo
	title="Blog"
	description="Actualités, annonces et articles du BreizhCamp. Restez informés des dernières nouvelles de la conférence tech de Bretagne."
/>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="Flux RSS des articles de blog du BreizhCamp"
		href="{PUBLIC_BASE_URL}/blog/rss.xml"
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="container">
		<h1>Blog BreizhCamp</h1>
		<p class="hero-description">
			Actualités, annonces et coulisses de la plus grande conférence tech de Bretagne.
			Découvrez les dernières nouvelles et préparez-vous pour l'édition {editionYear}.
		</p>
		<a href="/blog/rss.xml" target="_blank" rel="noopener" class="rss-feed">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M4 11a9 9 0 0 1 9 9" />
				<path d="M4 4a16 16 0 0 1 16 16" />
				<circle cx="5" cy="19" r="1" />
			</svg>
			Flux RSS des articles du blog
		</a>
	</div>
</section>

<!-- Articles -->
<section class="articles">
	<div class="container">
		<BlogPostCardList posts={data.posts} />
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
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.rss-feed,
	.rss-feed:visited {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		color: white;
	}

	.rss-feed:hover {
		color: #bbb;
	}

	/* Articles */
	.articles {
		padding: 4rem 0;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.hero h1 {
			font-size: 4rem;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			padding: 6rem 0;
		}

		.articles {
			padding: 6rem 0;
		}
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.hero-description {
			opacity: 1;
		}
	}
</style>
