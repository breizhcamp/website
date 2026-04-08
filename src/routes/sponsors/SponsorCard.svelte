<script lang="ts">
	import type { Sponsor } from './constants';

	interface Props {
		sponsor: Sponsor;
		size?: 'small' | 'medium' | 'large';
	}

	let { sponsor, size = 'medium' }: Props = $props();
</script>

<div class="sponsor-card {size}" class:interactive={!!sponsor.url}>
	{#if sponsor.logo && sponsor.url}
		<a
			href={sponsor.url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label="Visiter le site de {sponsor.name}"
		>
			<img src={sponsor.logo} alt="Logo {sponsor.name}" class="sponsor-logo" loading="lazy" />
		</a>
	{:else}
		<div class="sponsor-placeholder">
			<span class="placeholder-text">{sponsor.name}</span>
		</div>
	{/if}
</div>

<style>
	.sponsor-card {
		background: white;
		border: 1px solid var(--neutral-200);
		border-radius: var(--border-radius);
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		aspect-ratio: 3/2;
	}

	.sponsor-card.interactive:hover {
		border-color: var(--violet);
		box-shadow: 0 4px 12px rgba(142, 48, 137, 0.1);
	}

	.large a {
		min-height: 120px;
		padding: 2.5rem;
	}

	.medium a {
		min-height: 100px;
		padding: 2rem;
	}

	.small a {
		min-height: 80px;
		padding: 1.5rem;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		border-radius: 4px;
	}

	a:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
	}

	.sponsor-logo {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}

	.sponsor-placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		color: var(--neutral-600);
		font-weight: 500;
		text-align: center;
	}

	.placeholder-text {
		font-size: 0.9rem;
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.sponsor-card {
			border-width: 2px;
		}

		.sponsor-card:hover {
			border-color: var(--neutral-900);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		/* Animations déjà supprimées */
	}
</style>
