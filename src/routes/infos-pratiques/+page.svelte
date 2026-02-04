<script>
	import Button from '../../lib/components/ui/Button.svelte';
	import Card from '../../lib/components/ui/Card.svelte';
	import InfoSection from './InfoSection.svelte';
	import { infoSections } from './constants.ts';
</script>

<svelte:head>
	<title>Infos pratiques - BreizhCamp 2026</title>
	<meta
		name="description"
		content="Toutes les informations pratiques pour participer au BreizhCamp 2026 : conférence, code de conduite, FAQ, équipe, association et plus encore."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="container">
		<h1>Infos pratiques</h1>
		<p class="hero-description">
			Tout ce que vous devez savoir pour profiter pleinement du BreizhCamp 2026. Retrouvez ici
			toutes les informations pratiques, les règles de bonne conduite et les ressources
			utiles.
		</p>
	</div>
</section>

<!-- Navigation rapide -->
<section class="quick-nav">
	<div class="container">
		<nav aria-label="Navigation rapide des infos pratiques">
			<ul class="nav-grid">
				{#each infoSections as section}
					<li>
						<a href="#{section.id}" class="nav-card">
							<div class="nav-icon" aria-hidden="true">
								{@html section.icon}
							</div>
							<h3>{section.title}</h3>
							<p>{section.shortDescription}</p>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</section>

<!-- Sections d'informations -->
{#each infoSections as section}
	<InfoSection {section} />
{/each}

<!-- Éditions précédentes -->
<section class="editions-section" id="editions-precedentes">
	<div class="container">
		<Card>
			<div class="editions-content">
				<h2>Éditions précédentes</h2>
				<p>
					Découvrez les précédentes éditions du BreizhCamp et revivez les moments forts de
					la plus grande conférence tech de Bretagne.
				</p>
				<div class="editions-links">
					{#each [2024, 2023, 2022, 2019, 2018, 2017, 2016, 2015, 2014, 2013] as year}
						<a
							href="https://{year}.breizhcamp.org/"
							target="_blank"
							rel="noopener noreferrer"
							class="edition-link"
							aria-label="Consulter l'édition BreizhCamp {year}"
						>
							BreizhCamp {year}
						</a>
					{/each}
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
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	/* Navigation rapide */
	.quick-nav {
		padding: 4rem 0;
		background: var(--neutral-50);
	}

	.nav-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.5rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.nav-card {
		display: block;
		background: white;
		border: 1px solid var(--neutral-200);
		border-radius: var(--border-radius);
		padding: 2rem;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease;
		height: 100%;
	}

	.nav-card:hover {
		border-color: var(--violet);
		box-shadow: 0 4px 12px rgba(142, 48, 137, 0.1);
		transform: translateY(-2px);
	}

	.nav-card:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
	}

	.nav-icon {
		width: 48px;
		height: 48px;
		margin-bottom: 1rem;
		color: var(--violet);
	}

	.nav-card h3 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: var(--neutral-900);
	}

	.nav-card p {
		color: var(--neutral-600);
		font-size: 0.95rem;
		line-height: 1.5;
		margin: 0;
	}

	/* Éditions précédentes */
	.editions-section {
		padding: 4rem 0;
	}

	.editions-content {
		text-align: center;
		padding: 2rem;
	}

	.editions-content h2 {
		color: var(--neutral-900);
		margin-bottom: 1rem;
		font-size: 2rem;
	}

	.editions-content p {
		color: var(--neutral-700);
		font-size: 1.1rem;
		line-height: 1.6;
		margin-bottom: 2rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.editions-links {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.5rem;
		align-items: center;
	}

	.edition-link {
		color: var(--violet);
		text-decoration: none;
		font-weight: 500;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		transition: all 0.2s ease;
	}

	.edition-link:hover {
		background: var(--violet);
		color: white;
		text-decoration: none;
	}

	.edition-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
	}

	.editions-links::after {
		content: '·';
		color: var(--neutral-400);
		margin: 0 0.25rem;
	}

	.editions-links .edition-link:not(:last-child)::after {
		content: '·';
		color: var(--neutral-400);
		margin-left: 0.5rem;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.hero h1 {
			font-size: 4rem;
		}

		.nav-grid {
			grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
			gap: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.hero {
			padding: 6rem 0;
		}

		.quick-nav {
			padding: 6rem 0;
		}

		.nav-grid {
			gap: 2.5rem;
		}
	}

	/* Accessibilité */
	@media (prefers-contrast: high) {
		.hero-description {
			opacity: 1;
		}

		.nav-card {
			border-width: 2px;
		}

		.nav-card:hover {
			border-color: var(--neutral-900);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		* {
			transition: none !important;
			transform: none !important;
		}
	}
</style>
