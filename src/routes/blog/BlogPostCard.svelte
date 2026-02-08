<script lang="ts">
	import { formatDate } from '$lib/date.utils';
	import type { Post } from '$lib/types/blog';

	const { post }: { post: Post } = $props();
</script>

<article class="news-card" role="listitem">
	<div class="news-image">
		{#if post.banner}
			<img src={post.banner} alt={post.title} />
		{:else}
			<div class="placeholder-image">Image actualité</div>
		{/if}
	</div>
	<div class="news-content">
		<div class="news-date">
			{formatDate(post.date).toUpperCase()}
		</div>
		{#if post.category}
			<div class="news-category">{post.category}</div>
		{/if}
		<h3>
			<a href={post.slug}>{post.title}</a>
		</h3>
		<p>{post.excerpt}</p>
		<a href={post.slug} class="news-link">Lire la suite</a>
	</div>
</article>

<style>
	.news-card {
		background: white;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.news-image {
		height: 200px;
		overflow: hidden;
	}

	.placeholder-image {
		width: 100%;
		height: 100%;
		background: var(--neutral-100);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--neutral-600);
		font-weight: 500;
	}

	.news-content {
		padding: 1.5rem;
	}

	.news-date {
		color: var(--orange);
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.news-card h3 {
		color: var(--neutral-900);
		margin-bottom: 1rem;
		font-size: 1.1rem;
	}

	.news-card h3 a {
		color: inherit;
		text-decoration: none;
	}

	.news-card h3 a:hover {
		color: var(--violet);
	}

	.news-card h3 a:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
		border-radius: 4px;
	}

	.news-category {
		background: var(--violet);
		color: white;
		font-size: 0.75rem;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		text-transform: uppercase;
		letter-spacing: 0.025em;
		margin-bottom: 0.75rem;
		display: inline-block;
	}

	.news-link {
		color: var(--violet);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
		display: inline-block;
		margin-top: 1rem;
	}

	.news-link:hover {
		color: var(--neutral-900);
		text-decoration: underline;
	}

	.news-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
		border-radius: 4px;
	}

	.news-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.news-card p {
		color: var(--neutral-700); /* Amélioré pour contraste */
		line-height: 1.6;
	}

	@media (prefers-contrast: high) {
		.news-card p {
			color: var(--neutral-700);
		}
	}
</style>
