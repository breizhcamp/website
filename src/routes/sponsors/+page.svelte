<script>
	import Button from '../../lib/components/ui/Button.svelte';
	import Card from '../../lib/components/ui/Card.svelte';
	import SponsorCard from './SponsorCard.svelte';
	import { sponsorLevels } from './constants.ts';
</script>

<svelte:head>
	<title>Sponsors & Partenaires - BreizhCamp 2026</title>
	<meta
		name="description"
		content="Le BreizhCamp est possible grâce au soutien de nos sponsors. Découvrez nos partenaires Platinum, Gold, Silver, Bronze et institutionnels."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="container">
		<h1>Sponsors & Partenaires</h1>
		<p class="hero-description">
			Le BreizhCamp est possible grâce au soutien de nos sponsors. N'hésitez pas à nous
			contacter pour devenir vous aussi sponsor de l'évènement.
		</p>
		<div class="hero-cta">
			<Button variant="primary" href="mailto:sponsoring@breizhcamp.org">
				Devenir sponsor
			</Button>
			<Button variant="secondary" href="/sponsors/kit">Kit de sponsoring</Button>
		</div>
	</div>
</section>

<!-- Sponsors Sections -->
{#each sponsorLevels as level}
	<section class="sponsors-section" id={level.id}>
		<div class="container">
			<div class="section-header">
				<h2>{level.name}</h2>
				<p class="section-description">{level.description}</p>
			</div>

			<div class="sponsors-grid {level.gridCols}">
				{#each level.sponsors as sponsor}
					<SponsorCard {sponsor} size={level.logoSize} />
				{/each}
			</div>
		</div>
	</section>
{/each}

<!-- Call to Action -->
<section class="cta-section">
	<div class="container">
		<Card>
			<div class="cta-content">
				<h2>Rejoignez nos sponsors</h2>
				<p>
					Vous souhaitez soutenir la plus grande conférence tech de Bretagne ?
					Contactez-nous pour découvrir nos offres de sponsoring.
				</p>
				<div class="cta-actions">
					<Button variant="primary" href="mailto:sponsoring@breizhcamp.org">
						Contactez-nous
					</Button>
					<Button variant="secondary" href="/sponsors/kit">Télécharger le kit</Button>
				</div>
			</div>
		</Card>
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
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-cta {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	/* Sponsors Sections */
	.sponsors-section {
		padding: 4rem 0;
	}

	.sponsors-section:nth-child(even) {
		background: var(--neutral-50);
	}

	.section-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.section-header h2 {
		font-size: 2rem;
		color: var(--neutral-900);
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.section-description {
		color: var(--neutral-700);
		font-size: 1.1rem;
		max-width: 600px;
		margin: 0 auto;
		line-height: 1.6;
	}

	/* Sponsors Grid */
	.sponsors-grid {
		display: grid;
		gap: 2rem;
		align-items: center;
		justify-items: center;
	}

	/* Grid layouts par niveau */
	.sponsors-grid.grid-cols-2 {
		grid-template-columns: repeat(2, 1fr);
	}

	.sponsors-grid.grid-cols-3 {
		grid-template-columns: repeat(3, 1fr);
	}

	.sponsors-grid.grid-cols-1 {
		grid-template-columns: 1fr;
	}

	/* Responsive grid layouts */
	@media (min-width: 768px) {
		.sponsors-grid.grid-cols-2.md\\:grid-cols-3 {
			grid-template-columns: repeat(3, 1fr);
		}

		.sponsors-grid.grid-cols-3.md\\:grid-cols-4 {
			grid-template-columns: repeat(4, 1fr);
		}

		.sponsors-grid.grid-cols-2.md\\:grid-cols-4 {
			grid-template-columns: repeat(4, 1fr);
		}

		.sponsors-grid.grid-cols-1.md\\:grid-cols-2 {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.sponsors-grid.grid-cols-3.md\\:grid-cols-4.lg\\:grid-cols-5 {
			grid-template-columns: repeat(5, 1fr);
		}

		.sponsors-grid.grid-cols-3.md\\:grid-cols-4.lg\\:grid-cols-6 {
			grid-template-columns: repeat(6, 1fr);
		}

		.sponsors-grid.grid-cols-1.md\\:grid-cols-2.lg\\:grid-cols-3 {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	/* CTA Section */
	.cta-section {
		padding: 4rem 0;
		background: var(--neutral-50);
	}

	.cta-content {
		text-align: center;
		padding: 3rem;
	}

	.cta-content h2 {
		color: var(--neutral-900);
		margin-bottom: 1rem;
		font-size: 2rem;
	}

	.cta-content p {
		color: var(--neutral-700);
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		max-width: 500px;
		margin-left: auto;
		margin-right: auto;
	}

	.cta-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.hero h1 {
			font-size: 4rem;
		}

		.sponsors-grid {
			gap: 2.5rem;
		}

		.sponsor-card {
			padding: 2.5rem;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			padding: 6rem 0;
		}

		.sponsors-section {
			padding: 6rem 0;
		}

		.sponsors-grid {
			gap: 3rem;
		}
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.hero-description {
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			transform: none !important;
		}
	}
</style>
