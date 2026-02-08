<script lang="ts">
	import type { Post } from '$lib/types/blog';
	import BlogPostCard from './BlogPostCard.svelte';

	const { posts }: { posts: Array<Post> } = $props();
</script>

<div class="news-grid" role="list" aria-label="Liste des actualités">
	{#each posts as post (post.title)}
		<BlogPostCard {post} />
	{/each}
</div>

<style>
	.news-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}
</style>
