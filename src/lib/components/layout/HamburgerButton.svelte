<script lang="ts">
	interface Props {
		open: boolean;
		onToggleMenu: () => void;
	}

	const { open, onToggleMenu }: Props = $props();
</script>

<button
	class="mobile-menu-button"
	aria-expanded={open}
	aria-controls="mobile-menu"
	aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
	onclick={onToggleMenu}
>
	<span class="hamburger-line" class:open></span>
	<span class="hamburger-line" class:open></span>
	<span class="hamburger-line" class:open></span>
</button>

<style>
	/* Bouton Menu Mobile */
	.mobile-menu-button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 2.75rem;
		height: 2.75rem;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 6px;
		gap: 0.25rem;
		flex-shrink: 0;
	}

	.mobile-menu-button:hover {
		background-color: var(--neutral-50);
	}

	.mobile-menu-button:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
	}

	.hamburger-line {
		width: 1.5rem;
		height: 2px;
		background: var(--neutral-800);
		transform-origin: center;
	}

	.hamburger-line.open:nth-child(2) {
		opacity: 0;
	}

	/* Très petits écrans */
	@media (max-width: 360px) {
		.mobile-menu-button {
			width: 2.5rem;
			height: 2.5rem;
		}
	}

	/* Responsive - Desktop */
	@media (min-width: 900px) {
		.mobile-menu-button {
			display: none;
		}
	}
</style>
