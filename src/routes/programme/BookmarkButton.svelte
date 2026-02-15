<script lang="ts">
	import Star from '$lib/components/ui/Star.svelte';
	import { bookmarks } from './bookmarks.svelte';

	interface Props {
		eventId: string;
	}

	const { eventId }: Props = $props();

	let hovered = $state(false);

	const bookmarked = $derived(bookmarks.isKnown(eventId));
</script>

<button
	onclick={() => bookmarks.toggle(eventId)}
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
	aria-label={bookmarked ? 'retirer des favoris' : 'mettre en favoris'}
>
	<Star {bookmarked} {hovered} />
</button>

<style>
	button {
		position: absolute;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0;

		top: 0;
		right: 0;
		padding: 4px;
		border-radius: 4px;
	}
</style>
