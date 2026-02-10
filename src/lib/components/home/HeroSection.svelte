<script lang="ts">
	let currentSlide = $state(0);

	const slides = [
		{
			src: '/home/conference-salle.jpeg',
			alt: 'Conférence BreizhCamp - Salle plénière avec participants'
		},
		{
			src: '/home/conference-presentation.jpeg',
			alt: 'Conférence BreizhCamp - Présentation technique'
		},
		{
			src: '/home/conference-atelier.jpeg',
			alt: 'Conférence BreizhCamp - Atelier et networking'
		}
	];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % slides.length;
	}

	function prevSlide() {
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	}

	function goToSlide(index: number) {
		currentSlide = index;
	}
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
						<span>24-26 juin 2026</span>
					</div>
					<div class="location">
						<span class="icon" aria-hidden="true">📍</span>
						<span>Université de Rennes</span>
					</div>
				</div>
				<div class="hero-actions">
					<div class="hero-cta-disabled">
						<span class="cta-text">Réserver mes billets</span>
						<span class="cta-badge">Bientôt disponibles</span>
					</div>
				</div>
			</div>
			<div class="hero-image" role="region" aria-label="Galerie d'images de l'événement">
				<div class="carousel">
					{#each slides as slide, index (slide.src)}
						<img
							src={slide.src}
							alt={slide.alt}
							class="carousel-image"
							class:active={currentSlide === index}
							loading={index === 0 ? 'eager' : 'lazy'}
						/>
					{/each}

					<!-- Navigation buttons -->
					<button
						class="carousel-btn carousel-btn-prev"
						onclick={prevSlide}
						aria-label="Image précédente"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
							<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
						</svg>
					</button>
					<button
						class="carousel-btn carousel-btn-next"
						onclick={nextSlide}
						aria-label="Image suivante"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
							<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
						</svg>
					</button>

					<!-- Dots navigation -->
					<div class="carousel-dots">
						{#each slides as slide, index (slide.src)}
							<button
								class="carousel-dot"
								class:active={currentSlide === index}
								onclick={() => goToSlide(index)}
								aria-label="Aller à l'image {index + 1}"
								aria-current={currentSlide === index ? 'true' : undefined}
							></button>
						{/each}
					</div>
				</div>
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
		position: relative;
	}

	.carousel {
		position: relative;
		width: 100%;
		max-width: 500px;
		height: 300px;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
	}

	.carousel-image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 0.5s ease-in-out;
	}

	.carousel-image.active {
		opacity: 1;
	}

	.carousel-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10;
		transition: background 0.2s;
	}

	.carousel-btn:hover {
		background: rgba(0, 0, 0, 0.7);
	}

	.carousel-btn:focus-visible {
		outline: 2px solid white;
		outline-offset: 2px;
	}

	.carousel-btn-prev {
		left: 1rem;
	}

	.carousel-btn-next {
		right: 1rem;
	}

	.carousel-dots {
		position: absolute;
		bottom: 1rem;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		gap: 0.5rem;
		z-index: 10;
	}

	.carousel-dot {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.5);
		border: none;
		cursor: pointer;
		transition: background 0.2s;
		padding: 0;
	}

	.carousel-dot:hover {
		background: rgba(255, 255, 255, 0.8);
	}

	.carousel-dot.active {
		background: white;
	}

	.carousel-dot:focus-visible {
		outline: 2px solid white;
		outline-offset: 2px;
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
	@media (prefers-reduced-motion: reduce) {
		.carousel-image {
			transition: none;
		}
	}
</style>
