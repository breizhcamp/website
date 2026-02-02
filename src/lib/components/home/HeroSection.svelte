<script>
	import Button from '../ui/Button.svelte';
</script>

<section class="hero">
	<div class="container">
		<div class="hero-content">
			<div class="hero-text">
				<h1>BreizhCamp <span class="year">2026</span></h1>
				<p class="hero-description">
					La conférence tech incontournable de Bretagne. 3 jours d'innovation, de partage
					et de networking à Rennes.
				</p>
				<div class="hero-meta">
					<div class="date">
						<span class="icon" aria-hidden="true">📅</span>
						<span>25-27 juin 2026</span>
					</div>
					<div class="location">
						<span class="icon" aria-hidden="true">📍</span>
						<span>Université Rennes 1</span>
					</div>
				</div>
				<div class="hero-actions">
					<div class="hero-cta-disabled">
						<span class="cta-text">Réserver mes billets</span>
						<span class="cta-badge">Bientôt disponibles</span>
					</div>
					<Button variant="secondary" href="/programme">Découvrir le programme</Button>
				</div>
			</div>
			<div class="hero-image">
				<img
					src="/conference-photo.jpg"
					alt="Salle de conférence BreizhCamp remplie de participants avec leurs ordinateurs portables, écoutant une présentation"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.hero {
		background: linear-gradient(135deg, var(--violet) 0%, var(--orange) 100%);
		color: white;
		padding: 4rem 0;
		min-height: 500px;
	}

	.hero-content {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		align-items: center;
	}

	.hero h1 {
		font-size: 3.5rem;
		font-weight: 600;
		margin-bottom: 1rem;
		line-height: 1.1;
	}

	.year {
		color: var(--lime);
	}

	.hero-description {
		font-size: 1.25rem;
		margin-bottom: 2rem;
		opacity: 0.95;
		line-height: 1.6;
	}

	.hero-meta {
		display: flex;
		gap: 2rem;
		margin-bottom: 2rem;
		flex-wrap: wrap;
	}

	.hero-meta > div {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: 500;
	}

	.icon {
		font-size: 1.2rem;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	/* CTA désactivé dans le hero */
	.hero-cta-disabled {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.5rem;
		background: rgba(255, 255, 255, 0.2);
		color: white;
		border-radius: 6px;
		font-weight: 500;
		font-size: 1rem;
		cursor: not-allowed;
		border: 2px solid rgba(255, 255, 255, 0.3);
	}

	.hero-cta-disabled .cta-text {
		color: rgba(255, 255, 255, 0.9);
	}

	.hero-cta-disabled .cta-badge {
		background: var(--orange);
		color: white;
		font-size: 0.7rem;
		font-weight: 600;
		padding: 0.2rem 0.4rem;
		border-radius: 8px;
		text-transform: uppercase;
		letter-spacing: 0.025em;
	}

	.hero-image {
		display: flex;
		justify-content: center;
	}

	.hero-image img {
		width: 100%;
		max-width: 500px;
		height: 300px;
		object-fit: cover;
		border-radius: var(--border-radius);
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.hero-content {
			grid-template-columns: 1fr 1fr;
		}

		.hero h1 {
			font-size: 4rem;
		}

		.hero-meta {
			flex-wrap: nowrap;
		}

		.hero-actions {
			flex-wrap: nowrap;
		}
	}

	@media (min-width: 1024px) {
		.hero {
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
