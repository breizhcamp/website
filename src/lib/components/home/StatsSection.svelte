<section class="stats" aria-label="Statistiques de l'événement">
	<div class="container">
		<div class="stats-grid" role="list">
			<div class="stat" role="listitem">
				<div class="stat-number" aria-label="Plus de 1024 participants">1024+</div>
				<div class="stat-label">Participants</div>
			</div>
			<div class="stat" role="listitem">
				<div class="stat-number" aria-label="Plus de 110 talks">110+</div>
				<div class="stat-label">Talks</div>
			</div>
			<div class="stat" role="listitem">
				<div class="stat-number" aria-label="3 jours d'événement">3</div>
				<div class="stat-label">Jours</div>
			</div>
			<div class="stat" role="listitem">
				<div class="stat-number" aria-label="119 speakers">119</div>
				<div class="stat-label">Speakers</div>
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

	.stats {
		padding: 4rem 0;
		background: var(--neutral-50);
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		text-align: center;
	}

	.stat-number {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--violet);
		margin-bottom: 0.5rem;
	}

	.stat-label {
		color: var(--neutral-700);
		font-weight: 500;
		font-size: 1.1rem;
	}

	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}
	}

	@media (min-width: 1024px) {
		.stats {
			padding: 6rem 0;
		}

		.stats-grid {
			gap: 4rem;
		}
	}
</style>
