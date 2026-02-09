<script lang="ts">
	import BlogPostCardList from './BlogPostCardList.svelte';

	const { data } = $props();
</script>

<svelte:head>
	<title>Blog - BreizhCamp 2027</title>
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
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
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
