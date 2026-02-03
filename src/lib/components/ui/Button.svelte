<script lang="ts">
	type Variant =
		| 'primary'
		| 'secondary'
		| 'tertiary'
		| 'link'
		| 'icon-primary'
		| 'icon-secondary';
	type Props = {
		variant?: Variant;
		type?: 'button' | 'reset' | 'submit';
		href?: string | null;
		fullWidth?: boolean;
	};

	let {
		variant = 'primary',
		type = 'button',
		href = null,
		fullWidth = false,
		children
	}: Props & { children?: import('svelte').Snippet } = $props();
</script>

{#if href}
	<a {href} class={`btn btn-${variant} ${fullWidth ? 'w-full' : ''}`}>
		{@render children?.()}
	</a>
{:else}
	<button {type} class={`btn btn-${variant} ${fullWidth ? 'w-full' : ''}`}>
		{@render children?.()}
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.8rem 1.5rem;
		border-radius: 6px;
		font-weight: 500;
		font-size: 1rem;
		cursor: pointer;
		border: 2px solid transparent;
		transition: all 0.2s ease;
		gap: 0.5rem;
		font-family: inherit;
		text-decoration: none; /* Pas de soulignement pour les boutons */
	}

	.btn:hover,
	.btn:focus,
	.btn:visited {
		text-decoration: none; /* Assure qu'aucun état ne souligne les boutons */
	}
	.w-full {
		width: 100%;
	}

	.btn:hover {
		transform: translateY(-1px);
	}
	.btn:active {
		transform: translateY(0);
	}

	/* Focus pour l'accessibilité - différent des liens */
	.btn:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
		text-decoration: none;
	}

	/* VARIANTS */
	.btn-primary {
		background: var(--violet);
		color: white;
	}
	.btn-primary:hover {
		background: #7a2575;
	}

	.btn-secondary {
		background: white;
		border-color: var(--violet);
		color: var(--violet);
	}
	.btn-secondary:hover {
		background: var(--neutral-50);
	}

	.btn-tertiary {
		background: var(--lime);
		color: black;
	}
	.btn-tertiary:hover {
		background: #d4d43d;
	}

	.btn-icon-primary {
		background: var(--orange);
		color: white;
	}
	.btn-icon-primary:hover {
		background: #c5681c;
	}

	.btn-icon-secondary {
		background: var(--neutral-100);
		color: var(--neutral-800);
	}
	.btn-icon-secondary:hover {
		background: var(--neutral-200);
	}

	.btn-link {
		background: transparent;
		color: var(--violet);
		padding-left: 0;
		justify-content: flex-start;
	}
	.btn-link:hover {
		text-decoration: underline;
		background: transparent;
		transform: none;
	}

	/* Assure que tous les autres boutons n'ont jamais de soulignement */
	.btn-primary,
	.btn-secondary,
	.btn-tertiary,
	.btn-icon-primary,
	.btn-icon-secondary {
		text-decoration: none !important;
	}

	.btn-primary:hover,
	.btn-secondary:hover,
	.btn-tertiary:hover,
	.btn-icon-primary:hover,
	.btn-icon-secondary:hover,
	.btn-primary:focus,
	.btn-secondary:focus,
	.btn-tertiary:focus,
	.btn-icon-primary:focus,
	.btn-icon-secondary:focus {
		text-decoration: none !important;
	}
</style>
