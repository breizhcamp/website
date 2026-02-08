<script lang="ts">
	import { page } from '$app/stores';
	import Button from '../lib/components/ui/Button.svelte';
	import Card from '../lib/components/ui/Card.svelte';
	import { getSuggestionPages } from '../lib/config/site';

	// Messages d'erreur personnalisés selon le code
	function getErrorMessage(status: number) {
		switch (status) {
			case 404:
				return {
					title: 'Page introuvable',
					message:
						"Oups ! Cette page semble s'être perdue dans les méandres du web breton.",
					suggestion: 'Peut-être cherchiez-vous une autre page ?'
				};
			case 500:
				return {
					title: 'Erreur serveur',
					message: 'Notre serveur fait une petite pause galette-saucisse.',
					suggestion: 'Réessayez dans quelques instants !'
				};
			case 403:
				return {
					title: 'Accès interdit',
					message: 'Cette zone est réservée aux organisateurs du BreizhCamp.',
					suggestion: 'Retournez en territoire public !'
				};
			default:
				return {
					title: "Une erreur s'est produite",
					message: "Quelque chose ne s'est pas passé comme prévu.",
					suggestion: 'Essayons de retrouver notre chemin !'
				};
		}
	}

	$: errorInfo = getErrorMessage($page.status);

	// Suggestions de pages populaires depuis la configuration
	const popularPages = getSuggestionPages();
</script>

<svelte:head>
	<title>Erreur {$page.status} - BreizhCamp 2026</title>
	<meta name="description" content="Page d'erreur {$page.status} du site BreizhCamp 2026" />
</svelte:head>

<main class="error-page">
	<div class="container">
		<!-- Hero Error -->
		<section class="error-hero">
			<div class="error-visual">
				<div class="error-code">{$page.status}</div>
				<div class="error-icon">
					{#if $page.status === 404}
						<!-- Icône boussole perdue -->
						<svg viewBox="0 0 100 100" fill="none">
							<circle
								cx="50"
								cy="50"
								r="45"
								stroke="var(--violet)"
								stroke-width="3"
								fill="none"
								opacity="0.3"
							/>
							<circle
								cx="50"
								cy="50"
								r="35"
								stroke="var(--orange)"
								stroke-width="2"
								fill="none"
							/>
							<path
								d="M50 15 L55 35 L50 50 L45 35 Z"
								fill="var(--violet)"
								opacity="0.7"
							/>
							<path
								d="M85 50 L65 55 L50 50 L65 45 Z"
								fill="var(--orange)"
								opacity="0.7"
							/>
							<circle cx="50" cy="50" r="3" fill="var(--neutral-800)" />
							<text
								x="50"
								y="25"
								text-anchor="middle"
								font-size="8"
								fill="var(--violet)"
								font-weight="bold">N</text
							>
						</svg>
					{:else if $page.status === 500}
						<!-- Icône serveur en panne -->
						<svg viewBox="0 0 100 100" fill="none">
							<rect
								x="20"
								y="30"
								width="60"
								height="40"
								rx="4"
								stroke="var(--violet)"
								stroke-width="3"
								fill="none"
							/>
							<rect
								x="25"
								y="35"
								width="50"
								height="8"
								fill="var(--orange)"
								opacity="0.7"
							/>
							<rect x="25" y="47" width="50" height="8" fill="var(--neutral-300)" />
							<circle cx="30" cy="60" r="2" fill="var(--lime)" />
							<circle cx="38" cy="60" r="2" fill="var(--orange)" />
							<circle cx="46" cy="60" r="2" fill="var(--violet)" />
							<path
								d="M35 20 L45 10 L55 20"
								stroke="var(--neutral-400)"
								stroke-width="2"
								fill="none"
							/>
							<path
								d="M65 20 L75 10 L85 20"
								stroke="var(--neutral-400)"
								stroke-width="2"
								fill="none"
							/>
						</svg>
					{:else}
						<!-- Icône générique -->
						<svg viewBox="0 0 100 100" fill="none">
							<circle
								cx="50"
								cy="50"
								r="40"
								stroke="var(--violet)"
								stroke-width="3"
								fill="none"
							/>
							<path
								d="M35 35 L65 65 M65 35 L35 65"
								stroke="var(--orange)"
								stroke-width="4"
								stroke-linecap="round"
							/>
						</svg>
					{/if}
				</div>
			</div>

			<div class="error-content">
				<h1>{errorInfo.title}</h1>
				<p class="error-message">{errorInfo.message}</p>
				<p class="error-suggestion">{errorInfo.suggestion}</p>

				<div class="error-actions">
					<Button variant="primary" href="/">Retour à l'accueil</Button>
					<Button variant="secondary" onclick={() => history.back()}
						>Page précédente</Button
					>
				</div>
			</div>
		</section>

		<!-- Suggestions de navigation -->
		<section class="suggestions">
			<h2>Où souhaitez-vous aller ?</h2>
			<div class="suggestions-grid">
				{#each popularPages as page (page.href)}
					<Card interactive={!page.unavailable}>
						{#if page.unavailable}
							<div class="suggestion-unavailable">
								<h3>{page.label}</h3>
								<p>{page.description}</p>
								<span class="unavailable-badge">Bientôt disponible</span>
							</div>
						{:else}
							<a href={page.href} class="suggestion-link">
								<h3>{page.label}</h3>
								<p>{page.description}</p>
							</a>
						{/if}
					</Card>
				{/each}
			</div>
		</section>

		<!-- Message d'encouragement -->
		<section class="encouragement">
			<Card>
				<div class="encouragement-content">
					<h3>Besoin d'aide ?</h3>
					<p>
						Si vous pensez qu'il s'agit d'une erreur ou si vous ne trouvez pas ce que
						vous cherchez, n'hésitez pas à nous contacter. L'équipe BreizhCamp est là
						pour vous aider !
					</p>
					<div class="contact-actions">
						<Button variant="link" href="mailto:contact@breizhcamp.org">
							Nous contacter
						</Button>
						<Button variant="link" href="/infos-pratiques#faq">Consulter la FAQ</Button>
					</div>
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

	.error-page {
		padding: 2rem 0 4rem;
		min-height: 70vh;
	}

	/* Hero Error */
	.error-hero {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3rem;
		align-items: center;
		text-align: center;
		padding: 4rem 0;
	}

	.error-visual {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.error-code {
		font-size: 8rem;
		font-weight: 800;
		color: var(--violet);
		line-height: 1;
		opacity: 0.8;
	}

	.error-icon {
		width: 120px;
		height: 120px;
	}

	.error-icon svg {
		width: 100%;
		height: 100%;
	}

	.error-content h1 {
		font-size: 2.5rem;
		color: var(--neutral-900);
		margin-bottom: 1.5rem;
		font-weight: 600;
	}

	.error-message {
		font-size: 1.25rem;
		color: var(--neutral-700);
		margin-bottom: 1rem;
		line-height: 1.6;
	}

	.error-suggestion {
		font-size: 1.1rem;
		color: var(--neutral-700);
		margin-bottom: 2.5rem;
		font-style: italic;
	}

	.error-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	/* Suggestions */
	.suggestions {
		padding: 4rem 0;
		text-align: center;
	}

	.suggestions h2 {
		font-size: 2rem;
		color: var(--neutral-900);
		margin-bottom: 3rem;
		font-weight: 600;
	}

	.suggestions-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
	}

	.suggestion-link {
		display: block;
		text-decoration: none;
		color: inherit;
		padding: 1.5rem;
		height: 100%;
		border-radius: var(--border-radius);
	}

	.suggestion-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
	}

	.suggestion-link h3 {
		color: var(--violet);
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.suggestion-link p {
		color: var(--neutral-700);
		font-size: 0.95rem;
		line-height: 1.5;
		margin: 0;
	}

	.suggestion-link:hover h3 {
		color: var(--orange);
	}

	.suggestion-unavailable {
		display: block;
		text-decoration: none;
		color: inherit;
		padding: 1.5rem;
		height: 100%;
		border-radius: var(--border-radius);
		text-align: center;
		opacity: 0.7;
	}

	.suggestion-unavailable h3 {
		color: var(--neutral-700);
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.suggestion-unavailable p {
		color: var(--neutral-700);
		font-size: 0.95rem;
		line-height: 1.5;
		margin: 0 0 1rem 0;
	}

	.unavailable-badge {
		background: var(--neutral-200);
		color: var(--neutral-700);
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0.3rem 0.8rem;
		border-radius: 9999px;
		text-transform: uppercase;
		letter-spacing: 0.025em;
	}

	/* Encouragement */
	.encouragement {
		padding: 2rem 0;
	}

	.encouragement-content {
		text-align: center;
		padding: 2rem;
	}

	.encouragement-content h3 {
		color: var(--neutral-900);
		font-size: 1.5rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.encouragement-content p {
		color: var(--neutral-700);
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.contact-actions {
		display: flex;
		gap: 2rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.error-hero {
			grid-template-columns: 1fr 1fr;
			text-align: left;
		}

		.error-visual {
			justify-self: center;
		}

		.error-actions {
			justify-content: flex-start;
		}

		.suggestions-grid {
			gap: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.error-page {
			padding: 4rem 0 6rem;
		}

		.error-hero {
			padding: 6rem 0;
		}

		.suggestions {
			padding: 6rem 0;
		}

		.suggestions-grid {
			gap: 2.5rem;
		}
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.error-message,
		.error-suggestion {
			color: var(--neutral-800);
		}

		.suggestion-link p {
			color: var(--neutral-700);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		/* Animations déjà supprimées */
	}
</style>
