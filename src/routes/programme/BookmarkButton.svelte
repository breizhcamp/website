<script lang="ts">
	import Star from '$lib/components/ui/Star.svelte';
	import { bookmarks } from './bookmarks.svelte';

	interface Props {
		eventId: string;
		variant: 'sm' | 'lg';
	}

	const { eventId, variant }: Props = $props();

	let hovered = $state(false);

	const bookmarked = $derived(bookmarks.isKnown(eventId));
	const label = $derived(bookmarked ? 'retirer des favoris' : 'mettre en favoris');
</script>

<button
	onclick={() => bookmarks.toggle(eventId)}
	onmouseenter={() => (hovered = true)}
	onmouseleave={() => (hovered = false)}
	aria-label={variant === 'sm' ? label : undefined}
	class={variant}
>
	<Star {bookmarked} {hovered} {variant} />
	{variant === 'lg' ? label : undefined}
</button>

<style>
	button.sm {
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

	button.lg {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 10px 24px;
		border-radius: 6px;
		font-weight: 500;
		font-size: 1rem;
		background: var(--violet);
		color: white;
		cursor: pointer;
		border: 2px solid transparent;
		transition: all 0.2s ease;
		gap: 0.5rem;
		font-family: inherit;
		text-decoration: none; /* Pas de soulignement pour les boutons */
	}

	button.lg:hover {
		background: #7a2575;
	}
</style>
