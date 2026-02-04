<script>
	import { onMount } from 'svelte';
	import HeroSection from '../lib/components/home/HeroSection.svelte';
	import StatsSection from '../lib/components/home/StatsSection.svelte';
	import Button from '../lib/components/ui/Button.svelte';
	import Card from '../lib/components/ui/Card.svelte';
	import Badge from '../lib/components/ui/Badge.svelte';

	let articles = $state([]);
	let loading = $state(true);
	let error = $state(null);

	onMount(async () => {
		try {
			const response = await fetch('/api/blog');
			if (response.ok) {
				articles = await response.json();
			} else {
				error = 'Erreur lors du chargement des actualités';
			}
		} catch (e) {
			error = 'Impossible de charger les actualités';
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>BreizhCamp 2026 - La conférence tech incontournable de Bretagne</title>
	<meta
		name="description"
		content="La conférence tech incontournable de Bretagne. 3 jours d'innovation, de partage et de networking du 25-27 juin 2026."
	/>
</svelte:head>

<HeroSection />
<StatsSection />

<!-- Programme Section -->
<section class="programme" aria-labelledby="programme-title">
	<div class="container">
		<div class="programme-header">
			<h2 id="programme-title">Programme 2026</h2>
			<div class="programme-badge">
				<span class="badge-unavailable" aria-label="Programme bientôt disponible">Bientôt disponible</span>
			</div>
		</div>
		<p class="section-subtitle">
			Découvrez les dernières technologies tech avec nos experts internationaux
		</p>

		<div class="tracks-grid">
			<Card>
				<div class="track-card">
					<div class="track-icon violet" aria-hidden="true">
						<span>💻</span>
					</div>
					<h3>Développement & Craft</h3>
					<p>
						Du code, du vrai. Des retours d'expérience, des bonnes pratiques, des débats
						techniques et des approches concrètes pour mieux concevoir, tester et faire
						évoluer nos applications au quotidien.
					</p>
					<div class="track-tags">
						<Badge>Front & Back</Badge>
						<Badge>Java</Badge>
						<Badge>JavaScript</Badge>
						<Badge>Architecture</Badge>
					</div>
				</div>
			</Card>

			<Card>
				<div class="track-card">
					<div class="track-icon orange" aria-hidden="true">
						<span>☁️</span>
					</div>
					<h3>Cloud, Ops & Prod</h3>
					<p>
						Du laptop à la prod (et parfois retour 😅). Infrastructure moderne,
						automatisation, conteneurs, observabilité et tout ce qu'il faut pour faire
						tourner des systèmes fiables dans la vraie vie.
					</p>
					<div class="track-tags">
						<Badge>Docker</Badge>
						<Badge>Kubernetes</Badge>
						<Badge>CI/CD</Badge>
						<Badge>DevOps</Badge>
					</div>
				</div>
			</Card>

			<Card>
				<div class="track-card">
					<div class="track-icon lime" aria-hidden="true">
						<span>🔒</span>
					</div>
					<h3>Data, IA & Futur proche</h3>
					<p>
						Quand la donnée rencontre l'intelligence. IA, machine learning, data
						engineering… mais toujours avec du recul, des cas concrets et des questions
						éthiques bien ancrées dans le réel.
					</p>
					<div class="track-tags">
						<Badge>Data engineering</Badge>
						<Badge>IA & ML</Badge>
						<Badge>Python</Badge>
					</div>
				</div>
			</Card>
		</div>
	</div>
</section>

<!-- Partners Section -->
<section class="partners" aria-labelledby="partners-title">
	<div class="container">
		<h2 id="partners-title">Nos partenaires</h2>
		<p class="section-subtitle">
			Ils nous font confiance et soutiennent l'événement tech breton
		</p>

		<div class="partners-category">
			<h3>Partenaires Platine</h3>
			<div class="partners-grid platine" role="list" aria-label="Liste des partenaires Platine">
				<div class="partner-logo" role="listitem">
					<div class="placeholder-logo" aria-label="Emplacement partenaire 1">Logo 1</div>
				</div>
				<div class="partner-logo" role="listitem">
					<div class="placeholder-logo" aria-label="Emplacement partenaire 2">Logo 2</div>
				</div>
				<div class="partner-logo" role="listitem">
					<div class="placeholder-logo" aria-label="Emplacement partenaire 3">Logo 3</div>
				</div>
				<div class="partner-logo" role="listitem">
					<div class="placeholder-logo" aria-label="Emplacement partenaire 4">Logo 4</div>
				</div>
			</div>
		</div>

		<div class="partners-cta">
			<Button variant="icon-primary" href="/sponsors">Devenir sponsor</Button>
		</div>
	</div>
</section>

<!-- News Section -->
<section class="news" aria-labelledby="news-title">
	<div class="container">
		<h2 id="news-title">Actualités</h2>
		<p class="section-subtitle">Restez informés des dernières nouvelles du BreizhCamp</p>

		<div class="news-grid" role="list" aria-label="Liste des actualités">
			{#if loading}
				<article class="news-card" role="listitem" aria-busy="true">
					<div class="news-image">
						<div class="placeholder-image">Chargement...</div>
					</div>
					<div class="news-content">
						<div class="news-date">--</div>
						<h3>Chargement des actualités...</h3>
						<p>Veuillez patienter pendant le chargement des dernières nouvelles.</p>
					</div>
				</article>
			{:else if error}
				<article class="news-card" role="listitem" aria-live="polite">
					<div class="news-image">
						<div class="placeholder-image">Erreur</div>
					</div>
					<div class="news-content">
						<div class="news-date">--</div>
						<h3>Erreur de chargement</h3>
						<p>{error}</p>
					</div>
				</article>
			{:else}
				{#each articles.slice(0, 3) as article}
					<article class="news-card" role="listitem">
						<div class="news-image">
							{#if article.image}
								<img src={article.image} alt={article.title} />
							{:else}
								<div class="placeholder-image">Image actualité</div>
							{/if}
						</div>
						<div class="news-content">
							<div class="news-date">
								{new Date(article.date)
									.toLocaleDateString('fr-FR', {
										day: '2-digit',
										month: 'short',
										year: 'numeric'
									})
									.toUpperCase()}
							</div>
							{#if article.category}
								<div class="news-category">{article.category}</div>
							{/if}
							<h3>
								<a href="/blog/{article.slug}">{article.title}</a>
							</h3>
							<p>{article.excerpt}</p>
							<a href="/blog/{article.slug}" class="news-link">Lire la suite</a>
						</div>
					</article>
				{/each}
			{/if}
		</div>

		<!-- Lien vers toutes les actualités -->
		<div class="news-footer">
			<a href="/blog" class="all-news-link">
				Toutes les actualités
				<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
					<path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
				</svg>
			</a>
		</div>
	</div>
</section>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	/* Programme Section */
	.programme {
		padding: 6rem 0;
	}

	.programme-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.programme h2 {
		text-align: center;
		color: var(--neutral-900);
		margin: 0;
	}

	.programme-badge {
		display: flex;
		justify-content: center;
	}

	.badge-unavailable {
		background: var(--neutral-200);
		color: var(--neutral-700);
		font-size: 0.85rem;
		font-weight: 600;
		padding: 0.4rem 1rem;
		border-radius: 9999px;
		text-transform: uppercase;
		letter-spacing: 0.025em;
	}

	.section-subtitle {
		text-align: center;
		color: var(--neutral-700); /* Amélioré pour contraste */
		font-size: 1.1rem;
		margin-bottom: 4rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.tracks-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.track-card {
		padding: 2rem;
		text-align: center;
	}

	.track-icon {
		width: 4rem;
		height: 4rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1.5rem;
		font-size: 1.5rem;
	}

	.track-icon.violet {
		background: var(--violet);
	}

	.track-icon.orange {
		background: var(--orange);
	}

	.track-icon.lime {
		background: var(--lime);
	}

	.track-card h3 {
		color: var(--neutral-900);
		margin-bottom: 1rem;
		font-size: 1.25rem;
	}

	.track-card p {
		color: var(--neutral-700); /* Amélioré pour contraste */
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.track-tags {
		display: flex;
		gap: 0.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	/* Partners Section */
	.partners {
		padding: 6rem 0;
		background: var(--neutral-50);
	}

	.partners h2 {
		text-align: center;
		color: var(--neutral-900);
		margin-bottom: 1rem;
	}

	.partners-category {
		margin-bottom: 3rem;
	}

	.partners-category h3 {
		text-align: center;
		color: var(--neutral-700);
		margin-bottom: 2rem;
		font-size: 1.1rem;
	}

	.partners-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.partner-logo {
		background: white;
		padding: 2rem;
		border-radius: var(--border-radius);
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 120px;
		border: 1px solid var(--neutral-200);
	}

	.placeholder-logo {
		color: var(--neutral-600);
		font-weight: 500;
	}

	.partners-cta {
		text-align: center;
	}

	/* News Section */
	.news {
		padding: 6rem 0;
	}

	.news h2 {
		text-align: center;
		color: var(--neutral-900);
		margin-bottom: 1rem;
	}

	.news-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.news-card {
		background: white;
		border-radius: var(--border-radius);
		overflow: hidden;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.news-card:hover {
		/* Hover effect sans animation */
	}

	.news-image {
		height: 200px;
		overflow: hidden;
	}

	.placeholder-image {
		width: 100%;
		height: 100%;
		background: var(--neutral-100);
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--neutral-600);
		font-weight: 500;
	}

	.news-content {
		padding: 1.5rem;
	}

	.news-date {
		color: var(--orange);
		font-size: 0.875rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.news-card h3 {
		color: var(--neutral-900);
		margin-bottom: 1rem;
		font-size: 1.1rem;
	}

	.news-card h3 a {
		color: inherit;
		text-decoration: none;
	}

	.news-card h3 a:hover {
		color: var(--violet);
	}

	.news-card h3 a:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
		border-radius: 4px;
	}

	.news-category {
		background: var(--violet);
		color: white;
		font-size: 0.75rem;
		font-weight: 600;
		padding: 0.25rem 0.75rem;
		border-radius: 12px;
		text-transform: uppercase;
		letter-spacing: 0.025em;
		margin-bottom: 0.75rem;
		display: inline-block;
	}

	.news-link {
		color: var(--violet);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.9rem;
		display: inline-block;
		margin-top: 1rem;
	}

	.news-link:hover {
		color: var(--neutral-900);
		text-decoration: underline;
	}

	.news-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
		border-radius: 4px;
	}

	.news-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.news-card:hover .news-image img {
		/* Hover effect sans animation */
	}

	.news-card p {
		color: var(--neutral-700); /* Amélioré pour contraste */
		line-height: 1.6;
	}

	/* Lien vers toutes les actualités */
	.news-footer {
		display: flex;
		justify-content: center;
		margin-top: 3rem;
	}

	.all-news-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--violet);
		text-decoration: none;
		font-weight: 600;
		font-size: 1rem;
		padding: 0.75rem 1.5rem;
		border: 2px solid var(--violet);
		border-radius: 6px;
		background: white;
	}

	.all-news-link:hover {
		background: var(--violet);
		color: white;
	}

	.all-news-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
	}

	.all-news-link svg {
		flex-shrink: 0;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.tracks-grid {
			gap: 3rem;
		}
	}

	@media (min-width: 1024px) {
		.tracks-grid {
			gap: 3rem;
		}
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.section-subtitle {
			color: var(--neutral-700);
		}

		.track-card p {
			color: var(--neutral-700);
		}

		.news-card p {
			color: var(--neutral-700);
		}
	}

	/* Respect des préférences de mouvement réduit */
	@media (prefers-reduced-motion: reduce) {
		/* Animations déjà supprimées */
	}
</style>
