<script>
	import Seo from '$lib/components/seo/Seo.svelte';
	import Button from '../../lib/components/ui/Button.svelte';
	import Card from '../../lib/components/ui/Card.svelte';
</script>

<Seo
	title="EcoIndex et démarche éco-responsable"
	description="Découvrez la démarche éco-responsable du site BreizhCamp 2026 et notre score EcoIndex pour un web plus durable."
/>

<!-- Hero Section -->
<section class="hero">
	<div class="container">
		<div class="hero-content">
			<div class="eco-badge-hero eco-badge-pending">
				<span class="eco-score">En cours</span>
				<span class="eco-subtitle">Site en développement</span>
			</div>
			<h1>Démarche éco-responsable</h1>
			<p class="hero-description">
				BreizhCamp s'engage pour un web plus durable en optimisant l'impact environnemental
				de son site web grâce à l'éco-conception. L'EcoIndex sera calculé une fois le site
				finalisé.
			</p>
		</div>
	</div>
</section>

<!-- Contenu principal -->
<main class="main-content">
	<div class="container">
		<!-- Qu'est-ce que l'EcoIndex -->
		<section class="section">
			<Card>
				<h2>Qu'est-ce que l'EcoIndex ?</h2>
				<p>
					L'<strong>EcoIndex</strong> est un outil développé par le collectif GreenIT.fr qui
					permet d'évaluer l'impact environnemental d'un site web. Il mesure la performance
					environnementale d'une page web en analysant sa complexité technique et son impact
					sur les ressources.
				</p>

				<div class="ecoindex-metrics">
					<h3>Les critères mesurés</h3>
					<div class="metrics-grid">
						<div class="metric-card">
							<div class="metric-icon">🌍</div>
							<h4>Émissions de GES</h4>
							<p>Grammes équivalent CO₂ générés par la consultation de la page</p>
						</div>
						<div class="metric-card">
							<div class="metric-icon">💧</div>
							<h4>Consommation d'eau</h4>
							<p>Centilitres d'eau nécessaires pour alimenter les serveurs</p>
						</div>
						<div class="metric-card">
							<div class="metric-icon">📊</div>
							<h4>Complexité technique</h4>
							<p>Nombre de requêtes, poids des pages et éléments DOM</p>
						</div>
					</div>
				</div>
			</Card>
		</section>

		<!-- Notre score -->
		<section class="section">
			<Card>
				<h2>Notre score EcoIndex</h2>
				<div class="score-display">
					<div class="score-badge score-badge-pending">
						<span class="score-letter">?</span>
						<span class="score-description">En attente</span>
					</div>
					<div class="score-details">
						<p>
							Le site BreizhCamp est actuellement <strong
								>en cours de développement</strong
							>. L'EcoIndex sera mesuré une fois le site finalisé et mis en
							production.
						</p>
						<p>
							Nous appliquons dès maintenant les bonnes pratiques d'éco-conception
							pour obtenir le meilleur score possible lors de la mesure finale.
						</p>
					</div>
				</div>

				<div class="measurement-info measurement-info-pending">
					<h3>Prochaines étapes</h3>
					<ul>
						<li><strong>Finalisation du site :</strong> Mars 2026</li>
						<li><strong>Première mesure prévue :</strong> Avril 2026</li>
						<li><strong>Outil utilisé :</strong> Extension EcoIndex officielle</li>
						<li>
							<strong>Référentiel :</strong>
							<a
								href="https://www.ecoindex.fr/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Site officiel EcoIndex - ouvre dans un nouvel onglet"
							>
								EcoIndex.fr
							</a>
						</li>
					</ul>
				</div>
			</Card>
		</section>

		<!-- Nos actions éco-responsables -->
		<section class="section">
			<Card>
				<h2>Nos actions pour un web durable</h2>
				<p>
					Voici les principales mesures que nous avons mises en place pour réduire
					l'impact environnemental de notre site web :
				</p>

				<div class="actions-grid">
					<div class="action-item">
						<div class="action-icon">⚡</div>
						<h3>Optimisation des performances</h3>
						<ul>
							<li>Compression et optimisation des images</li>
							<li>Minification du CSS et JavaScript</li>
							<li>Mise en cache efficace</li>
							<li>Lazy loading des contenus</li>
						</ul>
					</div>

					<div class="action-item">
						<div class="action-icon">🎨</div>
						<h3>Design sobre et efficace</h3>
						<ul>
							<li>Interface épurée et fonctionnelle</li>
							<li>Typographie système privilégiée</li>
							<li>Palette de couleurs optimisée</li>
							<li>Animations CSS légères</li>
						</ul>
					</div>

					<div class="action-item">
						<div class="action-icon">🔧</div>
						<h3>Technologies modernes</h3>
						<ul>
							<li>Framework SvelteKit performant</li>
							<li>Génération statique quand possible</li>
							<li>Code JavaScript minimal</li>
							<li>Polices web optimisées</li>
						</ul>
					</div>

					<div class="action-item">
						<div class="action-icon">🌱</div>
						<h3>Hébergement responsable</h3>
						<ul>
							<li>Serveurs alimentés par des énergies renouvelables</li>
							<li>CDN pour réduire les distances de transfert</li>
							<li>Compression gzip/brotli activée</li>
							<li>Monitoring de la consommation</li>
						</ul>
					</div>
				</div>
			</Card>
		</section>

		<!-- Bonnes pratiques -->
		<section class="section">
			<Card>
				<h2>Bonnes pratiques pour les visiteurs</h2>
				<p>
					Vous aussi, vous pouvez contribuer à réduire l'impact environnemental de votre
					navigation web :
				</p>

				<div class="tips-list">
					<div class="tip-item">
						<span class="tip-number">1</span>
						<div class="tip-content">
							<h4>Utilisez un navigateur récent</h4>
							<p>
								Les navigateurs modernes sont plus efficaces pour traiter les pages
								web et consomment moins d'énergie.
							</p>
						</div>
					</div>

					<div class="tip-item">
						<span class="tip-number">2</span>
						<div class="tip-content">
							<h4>Fermez les onglets inutiles</h4>
							<p>
								Chaque onglet ouvert consomme de la mémoire et de l'énergie, même en
								arrière-plan.
							</p>
						</div>
					</div>

					<div class="tip-item">
						<span class="tip-number">3</span>
						<div class="tip-content">
							<h4>Utilisez les favoris</h4>
							<p>
								Marquez nos pages en favoris plutôt que de les rechercher à chaque
								fois.
							</p>
						</div>
					</div>

					<div class="tip-item">
						<span class="tip-number">4</span>
						<div class="tip-content">
							<h4>Partagez intelligemment</h4>
							<p>
								Partagez directement les liens plutôt que de faire des captures
								d'écran.
							</p>
						</div>
					</div>
				</div>
			</Card>
		</section>

		<!-- Ressources et liens -->
		<section class="section">
			<Card>
				<h2>Pour aller plus loin</h2>
				<p>
					Découvrez d'autres ressources sur l'éco-conception web et le numérique
					responsable :
				</p>

				<div class="resources-grid">
					<div class="resource-item">
						<h4>
							<a
								href="https://www.ecoindex.fr/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="EcoIndex.fr - ouvre dans un nouvel onglet"
							>
								EcoIndex.fr
							</a>
						</h4>
						<p>L'outil officiel pour mesurer l'impact environnemental des sites web</p>
					</div>

					<div class="resource-item">
						<h4>
							<a
								href="https://collectif.greenit.fr/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Collectif GreenIT - ouvre dans un nouvel onglet"
							>
								Collectif GreenIT
							</a>
						</h4>
						<p>Communauté des acteurs du numérique responsable</p>
					</div>

					<div class="resource-item">
						<h4>
							<a
								href="https://ecoresponsable.numerique.gouv.fr/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Guide écoresponsable - ouvre dans un nouvel onglet"
							>
								Guide écoresponsable
							</a>
						</h4>
						<p>Référentiel général d'écoconception de services numériques</p>
					</div>

					<div class="resource-item">
						<h4>
							<a
								href="https://www.greenit.fr/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GreenIT.fr - ouvre dans un nouvel onglet"
							>
								GreenIT.fr
							</a>
						</h4>
						<p>Média de référence sur le numérique responsable</p>
					</div>
				</div>

				<div class="cta-section">
					<Button variant="primary" href="/">Retour à l'accueil</Button>
					<Button variant="secondary" href="mailto:contact@breizhcamp.org">
						Nous contacter
					</Button>
				</div>
			</Card>
		</section>
	</div>
</main>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	/* Hero Section */
	.hero {
		background: linear-gradient(135deg, #15803d 0%, var(--lime) 100%);
		color: white;
		padding: 4rem 0;
		text-align: center;
	}

	.hero-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
	}

	.eco-badge-hero {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	.eco-badge-hero.eco-badge-pending .eco-score {
		background: white;
		color: #64748b;
	}

	.eco-score {
		background: white;
		color: #15803d;
		font-size: 2rem;
		font-weight: 700;
		padding: 1rem 2rem;
		border-radius: 50px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.eco-subtitle {
		font-size: 1rem;
		font-weight: 500;
		opacity: 0.9;
	}

	.hero h1 {
		font-size: 3rem;
		font-weight: 600;
		margin: 0;
		line-height: 1.1;
	}

	.hero-description {
		font-size: 1.25rem;
		opacity: 0.95;
		line-height: 1.6;
		max-width: 700px;
		margin: 0;
	}

	/* Main content */
	.main-content {
		padding: 4rem 0;
		background: var(--neutral-50);
	}

	.section {
		margin-bottom: 2rem;
	}

	.section:last-child {
		margin-bottom: 0;
	}

	/* Typography */
	h2 {
		color: var(--neutral-900);
		font-size: 1.75rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
		line-height: 1.3;
	}

	h3 {
		color: var(--neutral-800);
		font-size: 1.25rem;
		font-weight: 600;
		margin: 1.5rem 0 1rem 0;
		line-height: 1.4;
	}

	h4 {
		color: var(--neutral-800);
		font-size: 1.1rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		line-height: 1.4;
	}

	p {
		color: var(--neutral-700);
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	ul {
		color: var(--neutral-700);
		line-height: 1.6;
		margin-bottom: 1rem;
		padding-left: 1.5rem;
	}

	li {
		margin-bottom: 0.5rem;
	}

	/* EcoIndex metrics */
	.ecoindex-metrics {
		margin-top: 2rem;
	}

	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-top: 1.5rem;
	}

	.metric-card {
		background: var(--neutral-50);
		padding: 1.5rem;
		border-radius: var(--border-radius);
		border: 1px solid var(--neutral-200);
		text-align: center;
	}

	.metric-icon {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	/* Score display */
	.score-display {
		display: flex;
		gap: 2rem;
		align-items: center;
		margin: 2rem 0;
		flex-wrap: wrap;
	}

	.score-badge {
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(135deg, #15803d, #22c55e);
		color: white;
		padding: 2rem;
		border-radius: 1rem;
		min-width: 120px;
	}

	.score-badge-pending {
		background: linear-gradient(135deg, #64748b, #94a3b8);
	}

	.score-letter {
		font-size: 3rem;
		font-weight: 700;
		line-height: 1;
	}

	.score-description {
		font-size: 1rem;
		font-weight: 500;
		margin-top: 0.5rem;
	}

	.score-details {
		flex: 1;
		min-width: 300px;
	}

	.measurement-info {
		background: rgba(21, 128, 61, 0.1);
		padding: 1.5rem;
		border-radius: var(--border-radius);
		border: 1px solid rgba(21, 128, 61, 0.3);
		margin-top: 2rem;
	}

	.measurement-info-pending {
		background: rgba(100, 116, 139, 0.1);
		border-color: rgba(100, 116, 139, 0.3);
	}

	.measurement-info h3 {
		color: #15803d;
		margin-top: 0;
	}

	.measurement-info-pending h3 {
		color: #64748b;
	}

	/* Actions grid */
	.actions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 2rem;
	}

	.action-item {
		background: var(--neutral-50);
		padding: 2rem;
		border-radius: var(--border-radius);
		border: 1px solid var(--neutral-200);
	}

	.action-icon {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		display: block;
	}

	.action-item h3 {
		margin-top: 0;
		margin-bottom: 1rem;
		color: var(--neutral-900);
	}

	.action-item ul {
		margin: 0;
	}

	/* Tips list */
	.tips-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-top: 2rem;
	}

	.tip-item {
		display: flex;
		gap: 1rem;
		align-items: flex-start;
	}

	.tip-number {
		background: var(--lime);
		color: var(--neutral-900);
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 600;
		flex-shrink: 0;
	}

	.tip-content {
		flex: 1;
	}

	.tip-content h4 {
		margin-top: 0;
	}

	.tip-content p {
		margin-bottom: 0;
	}

	/* Resources grid */
	.resources-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin: 2rem 0;
	}

	.resource-item {
		background: var(--neutral-50);
		padding: 1.5rem;
		border-radius: var(--border-radius);
		border: 1px solid var(--neutral-200);
	}

	.resource-item h4 {
		margin-top: 0;
	}

	.resource-item p {
		margin-bottom: 0;
		font-size: 0.95rem;
	}

	/* CTA Section */
	.cta-section {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	/* Links styling */
	a {
		color: #15803d;
		text-decoration: underline;
		text-decoration-color: rgba(21, 128, 61, 0.5);
	}

	a:hover {
		color: var(--lime);
		text-decoration-color: var(--lime);
		background-color: rgba(224, 224, 78, 0.1);
		padding: 0.1em 0.2em;
		margin: -0.1em -0.2em;
		border-radius: 3px;
	}

	a:focus-visible {
		outline: 2px solid #15803d;
		outline-offset: 2px;
		background-color: rgba(21, 128, 61, 0.1);
	}

	a:visited {
		color: #166534;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.hero h1 {
			font-size: 4rem;
		}

		.score-display {
			flex-wrap: nowrap;
		}

		.cta-section {
			flex-wrap: nowrap;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			padding: 6rem 0;
		}

		.main-content {
			padding: 6rem 0;
		}

		.actions-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.hero-description,
		.eco-subtitle {
			opacity: 1;
		}

		.measurement-info {
			border-width: 2px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		/* Animations déjà supprimées */
	}

	/* Print styles */
	@media print {
		.hero {
			background: none !important;
			color: black !important;
		}

		.eco-score {
			background: #f0f0f0 !important;
			color: black !important;
		}

		.cta-section {
			display: none;
		}

		a {
			color: black !important;
			text-decoration: underline !important;
		}

		a[href^='http']:after {
			content: ' (' attr(href) ')';
			font-size: 0.8em;
		}
	}
</style>
