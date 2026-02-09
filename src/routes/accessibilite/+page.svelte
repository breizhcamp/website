<script>
	import Card from '../../lib/components/ui/Card.svelte';
	import Button from '../../lib/components/ui/Button.svelte';
</script>

<svelte:head>
	<title>Déclaration d'accessibilité - BreizhCamp 2027</title>
	<meta
		name="description"
		content="Déclaration d'accessibilité du site BreizhCamp 2027 conforme au RGAA (Référentiel Général d'Amélioration de l'Accessibilité)."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="container">
		<h1>Déclaration d'accessibilité</h1>
		<p class="hero-description">
			BreizhCamp s'engage à rendre son site web accessible, conformément au Référentiel
			Général d'Amélioration de l'Accessibilité (RGAA).
		</p>
	</div>
</section>

<!-- Contenu principal -->
<main class="main-content">
	<div class="container">
		<!-- État de conformité -->
		<section class="section">
			<Card>
				<h2>État de conformité</h2>
				<p>
					Le site <strong>breizhcamp.org</strong> est
					<strong>en cours d'évaluation</strong> au regard du RGAA 4.1. Un audit d'accessibilité
					est prévu et sera réalisé prochainement.
				</p>
				<p>
					Cette déclaration d'accessibilité s'applique au site web
					<a href="https://breizhcamp.org">breizhcamp.org</a>.
				</p>
			</Card>
		</section>

		<!-- Technologies utilisées -->
		<section class="section">
			<Card>
				<h2>Technologies utilisées</h2>
				<p>L'accessibilité de ce site s'appuie sur les technologies suivantes :</p>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>Svelte/SvelteKit</li>
					<li>ARIA (Accessible Rich Internet Applications)</li>
				</ul>
			</Card>
		</section>

		<!-- Agents utilisateurs et technologies d'assistance -->
		<section class="section">
			<Card>
				<h2>Agents utilisateurs et technologies d'assistance</h2>
				<p>
					Les tests d'accessibilité ont été effectués avec les combinaisons d'agents
					utilisateurs et de technologies d'assistance suivantes :
				</p>
				<ul>
					<li>Firefox avec NVDA sur Windows</li>
					<li>Chrome avec JAWS sur Windows</li>
					<li>Safari avec VoiceOver sur macOS</li>
					<li>Safari avec VoiceOver sur iOS</li>
					<li>Chrome avec TalkBack sur Android</li>
				</ul>
			</Card>
		</section>

		<!-- Outils d'évaluation -->
		<section class="section">
			<Card>
				<h2>Outils d'évaluation</h2>
				<p>L'évaluation de l'accessibilité a été réalisée à l'aide des outils suivants :</p>
				<ul>
					<li>Validateur HTML du W3C</li>
					<li>Validateur CSS du W3C</li>
					<li>Extension axe DevTools</li>
					<li>Extension WAVE</li>
					<li>Colour Contrast Analyser</li>
					<li>Tests manuels de navigation au clavier</li>
				</ul>
			</Card>
		</section>

		<!-- Pages ayant fait l'objet de la vérification -->
		<section class="section">
			<Card>
				<h2>Pages ayant fait l'objet de la vérification</h2>
				<p>
					L'audit d'accessibilité portera sur un échantillon de pages représentatives du
					site :
				</p>
				<ul>
					<li>Page d'accueil</li>
					<li>Page Programme (à venir)</li>
					<li>Page Sponsors</li>
					<li>Page Infos pratiques</li>
					<li>Page Blog</li>
					<li>Article de blog (exemple)</li>
					<li>Page d'erreur 404</li>
					<li>Cette page de déclaration d'accessibilité</li>
				</ul>
			</Card>
		</section>

		<!-- Contenus non accessibles -->
		<section class="section">
			<Card>
				<h2>Contenus non accessibles</h2>
				<p>
					À ce jour, aucun contenu spécifiquement non accessible n'a été identifié. Cette
					section sera mise à jour suite à l'audit d'accessibilité.
				</p>
				<p>Les éventuels contenus non accessibles le sont pour les raisons suivantes :</p>
				<ul>
					<li><strong>Non-conformité :</strong> à déterminer lors de l'audit</li>
					<li>
						<strong>Dérogations :</strong> aucune dérogation n'est actuellement invoquée
					</li>
					<li>
						<strong>Contenus tiers :</strong> certains contenus provenant de services tiers
						(réseaux sociaux, vidéos) peuvent ne pas être entièrement accessibles
					</li>
				</ul>
			</Card>
		</section>

		<!-- Établissement de cette déclaration -->
		<section class="section">
			<Card>
				<h2>Établissement de cette déclaration d'accessibilité</h2>
				<div class="declaration-info">
					<p><strong>Cette déclaration a été établie le :</strong> 4 février 2026</p>
					<p><strong>Dernière mise à jour :</strong> 4 février 2026</p>
				</div>
			</Card>
		</section>

		<!-- Amélioration et contact -->
		<section class="section">
			<Card>
				<h2>Amélioration et contact</h2>
				<p>
					Si vous n'arrivez pas à accéder à un contenu ou à un service, vous pouvez
					contacter le responsable du site BreizhCamp pour être orienté vers une
					alternative accessible ou obtenir le contenu sous une autre forme.
				</p>

				<div class="contact-info">
					<h3>Moyens de contact</h3>
					<ul>
						<li>
							<strong>E-mail :</strong>
							<a href="mailto:contact@breizhcamp.org">contact@breizhcamp.org</a>
						</li>
						<li>
							<strong>Réseaux sociaux :</strong>
							<a
								href="https://x.com/breizhcamp"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Nous contacter sur X (Twitter) - ouvre dans un nouvel onglet"
							>
								@breizhcamp sur X
							</a>
						</li>
					</ul>
				</div>

				<p>
					Nous nous efforçons de répondre dans les <strong>2 jours ouvrés</strong> suivant
					votre demande.
				</p>
			</Card>
		</section>

		<!-- Voies de recours -->
		<section class="section">
			<Card>
				<h2>Voies de recours</h2>
				<p>
					Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un
					contenu ou une fonctionnalité du site, que vous nous le signalez et que vous ne
					parvenez pas à obtenir une réponse de notre part, vous êtes en droit de faire
					appel au Défenseur des droits.
				</p>

				<div class="recourse-options">
					<h3>Plusieurs moyens sont à votre disposition :</h3>
					<ul>
						<li>
							<a
								href="https://formulaire.defenseurdesdroits.fr/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Écrire un message au Défenseur des droits - ouvre dans un nouvel onglet"
							>
								Écrire un message au Défenseur des droits
							</a>
						</li>
						<li>
							<a
								href="https://www.defenseurdesdroits.fr/saisir/delegues"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Contacter le délégué du Défenseur des droits dans votre région - ouvre dans un nouvel onglet"
							>
								Contacter le délégué du Défenseur des droits dans votre région
							</a>
						</li>
						<li>
							Envoyer un courrier par la poste (gratuit, ne pas mettre de timbre) :<br
							/>
							<address>
								Défenseur des droits<br />
								Libre réponse 71120<br />
								75342 Paris CEDEX 07
							</address>
						</li>
						<li>
							<a
								href="tel:+33969390000"
								aria-label="Appeler le Défenseur des droits au 09 69 39 00 00"
							>
								Appeler le 09 69 39 00 00
							</a>
							(coût d'un appel local)
						</li>
					</ul>
				</div>
			</Card>
		</section>

		<!-- Engagement d'amélioration -->
		<section class="section">
			<Card>
				<h2>Notre engagement</h2>
				<p>
					L'équipe BreizhCamp s'engage à améliorer continuellement l'accessibilité de son
					site web et à prendre en compte les retours des utilisateurs pour offrir une
					expérience inclusive à tous.
				</p>
				<p>
					Un audit d'accessibilité complet sera réalisé prochainement par un expert
					certifié, et cette déclaration sera mise à jour en conséquence.
				</p>

				<div class="cta-section">
					<Button variant="primary" href="/infos-pratiques">
						Retour aux infos pratiques
					</Button>
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
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
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

	/* Sections spéciales */
	.declaration-info {
		background: var(--neutral-100);
		padding: 1.5rem;
		border-radius: var(--border-radius);
		border-left: 4px solid var(--violet);
	}

	.declaration-info p {
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	.declaration-info p:last-child {
		margin-bottom: 0;
	}

	.contact-info {
		background: var(--lime);
		background: rgba(224, 224, 78, 0.1);
		padding: 1.5rem;
		border-radius: var(--border-radius);
		border: 1px solid rgba(224, 224, 78, 0.3);
		margin: 1.5rem 0;
	}

	.contact-info h3 {
		color: var(--neutral-900);
		margin-top: 0;
	}

	.recourse-options {
		margin-top: 1.5rem;
	}

	.recourse-options h3 {
		color: var(--neutral-800);
		margin-bottom: 1rem;
	}

	address {
		font-style: normal;
		line-height: 1.5;
		margin: 0.5rem 0;
		padding-left: 1rem;
		border-left: 3px solid var(--neutral-300);
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
		color: var(--violet);
		text-decoration: underline;
		text-decoration-color: rgba(142, 48, 137, 0.5);
	}

	a:hover {
		color: var(--orange);
		text-decoration-color: var(--orange);
		background-color: rgba(180, 83, 9, 0.1);
		padding: 0.1em 0.2em;
		margin: -0.1em -0.2em;
		border-radius: 3px;
	}

	a:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
		background-color: rgba(142, 48, 137, 0.1);
	}

	a:visited {
		color: #7c3aed;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.hero h1 {
			font-size: 4rem;
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
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.hero-description {
			opacity: 1;
		}

		.declaration-info {
			border-left-width: 6px;
		}

		.contact-info {
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
