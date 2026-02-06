<script lang="ts">
	import LogoImg from '../ui/LogoImg.svelte';
</script>

<div class="logo-section">
	<a href="/" class="logo-link" aria-label="BreizhCamp 2026 - Retour à l'accueil">
		<LogoImg />
	</a>
</div>

<style>
	.logo-section {
		display: flex;
		align-items: center;
		flex-shrink: 0;
		width: 140px;
		min-width: 100px;
	}

	.logo-link {
		display: block;
		border-radius: 6px;
		width: 100%;
	}

	.logo-link :global(img) {
		width: 100%;
		height: auto;
		max-width: 140px;
	}

	.logo-link:hover {
		opacity: 0.8;
	}

	.logo-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 4px;
	}

	/* Très petits écrans */
	@media (max-width: 360px) {
		.logo-section {
			width: 140px;
			min-width: 100px;
		}

		.logo-link :global(img) {
			max-width: 140px;
		}
	}

	/* Responsive - Tablet */
	@media (min-width: 640px) {
		.logo-section {
			width: 160px;
		}

		.logo-link :global(img) {
			max-width: 160px;
		}
	}

	/* Responsive - Desktop */
	@media (min-width: 900px) {
		.logo-section {
			width: 140px;
		}

		.logo-link :global(img) {
			max-width: 140px;
		}
	}

	@media (min-width: 1200px) {
		.logo-section {
			width: 160px;
		}

		.logo-link :global(img) {
			max-width: 160px;
		}
	}

	@media (min-width: 1300px) {
		.logo-section {
			width: 180px;
		}

		.logo-link :global(img) {
			max-width: 180px;
		}
	}
</style>
