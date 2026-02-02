<script>
	// Données pour les liens
	const socialLinks = [
		{
			name: 'X (Twitter)',
			url: 'https://x.com/breizhcamp',
			path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z'
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/breizhcamp-%F0%9F%92%BB-26991589/',
			path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 4a2 2 0 1 1-2 2 2 0 0 1 2-2z'
		},
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/user/BreizhCamp',
			path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
		},
		{
			name: 'Bluesky',
			url: 'https://bsky.app/profile/breizhcamp.org',
			path: 'M18.5 9c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5zm-13 0C4.67 9 4 8.33 4 7.5S4.67 6 5.5 6 7 6.67 7 7.5 6.33 9 5.5 9zm6.5 7c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z'
		}
	];

	const years = [2024, 2023, 2022, 2019, 2018, 2017, 2016, 2015, 2014, 2013];

	// Toutes les éditions utilisent le pattern https://YYYY.breizhcamp.org/
	function getEditionUrl(year) {
		return `https://${year}.breizhcamp.org/`;
	}

	// État pour les sections collapsibles sur mobile
	let expandedSections = $state({
		navigation: false,
		informations: false,
		editions: false
	});

	function toggleSection(section) {
		expandedSections[section] = !expandedSections[section];
	}
</script>

<footer>
	<div class="footer-inner">
		<div class="footer-col brand">
			<p class="tagline">La conférence tech de référence en Bretagne depuis 2011.</p>

			<div class="socials">
				{#each socialLinks as link (link.name)}
					<a
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={link.name}
						class="social-icon"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
							<path d={link.path} />
						</svg>
					</a>
				{/each}
			</div>
		</div>

		<nav class="footer-nav" aria-label="Footer">
			<ul class="footer-columns">
				<!-- Navigation Section -->
				<li class="footer-col">
					<button
						class="footer-title mobile-toggle"
						onclick={() => toggleSection('navigation')}
						aria-expanded={expandedSections.navigation}
						aria-controls="nav-links"
					>
						<span>Navigation</span>
						<svg
							class="chevron"
							class:expanded={expandedSections.navigation}
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M7 10l5 5 5-5z" />
						</svg>
					</button>
					<span class="footer-title desktop-title">Navigation</span>
					<ul
						id="nav-links"
						class="footer-links"
						class:expanded={expandedSections.navigation}
					>
						<li><a class="footer-link" href="/">Accueil</a></li>
						<li><a class="footer-link" href="/programme">Programme</a></li>
						<li><a class="footer-link" href="/sponsors">Sponsors</a></li>
						<li><a class="footer-link" href="/infos-pratiques">Infos pratiques</a></li>
					</ul>
				</li>

				<!-- Informations Section -->
				<li class="footer-col">
					<button
						class="footer-title mobile-toggle"
						onclick={() => toggleSection('informations')}
						aria-expanded={expandedSections.informations}
						aria-controls="info-links"
					>
						<span>Informations</span>
						<svg
							class="chevron"
							class:expanded={expandedSections.informations}
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M7 10l5 5 5-5z" />
						</svg>
					</button>
					<span class="footer-title desktop-title">Informations</span>
					<ul
						id="info-links"
						class="footer-links"
						class:expanded={expandedSections.informations}
					>
						<li>
							<a class="footer-link" href="/infos-pratiques#code-de-conduite"
								>Code de conduite</a
							>
						</li>
						<li><a class="footer-link" href="/infos-pratiques#faq">FAQ</a></li>
						<li>
							<a class="footer-link" href="mailto:contact@breizhcamp.org">Contact</a>
						</li>
						<li>
							<a class="footer-link" href="/infos-pratiques"
								>Accessibilité : conforme</a
							>
						</li>
					</ul>
				</li>

				<!-- Éditions précédentes Section -->
				<li class="footer-col">
					<button
						class="footer-title mobile-toggle"
						onclick={() => toggleSection('editions')}
						aria-expanded={expandedSections.editions}
						aria-controls="editions-content"
					>
						<span>Éditions précédentes</span>
						<svg
							class="chevron"
							class:expanded={expandedSections.editions}
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M7 10l5 5 5-5z" />
						</svg>
					</button>
					<span class="footer-title desktop-title">Éditions précédentes</span>
					<div
						id="editions-content"
						class="editions-content"
						class:expanded={expandedSections.editions}
					>
						<!-- Historique compact sur une ligne avec points -->
						<p class="editions-inline">
							{#each years as year, index}
								<a
									href={getEditionUrl(year)}
									class="edition-link-inline"
									target="_blank"
									rel="noopener noreferrer"
									aria-label="BreizhCamp {year} (ouvre dans un nouvel onglet)"
								>
									BreizhCamp {year}
								</a>{index < years.length - 1 ? ' · ' : ''}
							{/each}
						</p>

						<div class="eco-badge-container">
							<span class="eco-badge">EcoIndex A</span>
						</div>
					</div>
				</li>
			</ul>
		</nav>
	</div>
</footer>

<style>
	footer {
		background-color: #0f172a;
		color: white;
		padding: 2rem 1rem;
		margin-top: auto;
	}

	.footer-inner {
		max-width: 1200px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.brand {
		text-align: center;
		padding-bottom: 2rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.tagline {
		color: #e2e8f0; /* Amélioré pour contraste sur fond sombre */
		font-size: 0.95rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		max-width: 320px;
		margin-left: auto;
		margin-right: auto;
	}

	.socials {
		display: flex;
		gap: 1.25rem;
		justify-content: center;
	}

	.social-icon {
		color: white;
		opacity: 0.8;
		transition: opacity 0.2s;
		padding: 0.5rem;
		border-radius: 6px;
	}

	.social-icon:hover {
		opacity: 1;
		background-color: rgba(255, 255, 255, 0.1);
	}

	.social-icon:focus-visible,
	a:focus-visible,
	button:focus-visible {
		outline: 2px solid var(--lime);
		outline-offset: 2px;
	}

	.footer-nav {
		align-self: start;
	}

	.footer-columns {
		display: grid;
		grid-template-columns: 1fr;
		gap: 0;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer-col {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.footer-col:last-child {
		border-bottom: none;
	}

	/* Titres des sections */
	.footer-title {
		display: block;
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 1rem;
		color: white;
	}

	/* Mobile Toggle Buttons */
	.mobile-toggle {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: none;
		border: none;
		color: white;
		font-size: 1rem;
		font-weight: 600;
		padding: 1.25rem 0;
		cursor: pointer;
		text-align: left;
	}

	.mobile-toggle:hover {
		color: var(--lime);
	}

	.desktop-title {
		display: none;
	}

	.chevron {
		transition: transform 0.3s ease;
		flex-shrink: 0;
	}

	.chevron.expanded {
		transform: rotate(180deg);
	}

	/* Liens et contenu */
	.footer-links {
		list-style: none;
		padding: 0;
		margin: 0;
		max-height: 0;
		overflow: hidden;
		transition:
			max-height 0.3s ease,
			padding 0.3s ease;
	}

	.footer-links.expanded {
		max-height: 300px;
		padding-bottom: 1.25rem;
	}

	.footer-links li {
		margin-bottom: 0.75rem;
	}

	.editions-content {
		max-height: 0;
		overflow: hidden;
		transition:
			max-height 0.3s ease,
			padding 0.3s ease;
	}

	.editions-content.expanded {
		max-height: 200px;
		padding-bottom: 1.25rem;
	}

	.editions-inline {
		color: #e2e8f0; /* Amélioré pour contraste */
		font-size: 0.95rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}

	.edition-link-inline {
		color: #cbd5e1;
		text-decoration: underline;
		font-weight: 500;
		transition: color 0.2s;
		display: inline;
		white-space: nowrap;
	}

	.edition-link-inline:hover {
		color: white;
	}

	.years-label {
		font-weight: 600;
		color: #e2e8f0;
		margin-right: 0.5rem;
	}

	a {
		color: #e2e8f0; /* Amélioré pour contraste sur fond sombre */
		text-decoration: none;
		font-size: 0.95rem;
		transition: color 0.2s;
		display: block;
		padding: 0.25rem 0;
	}

	a:hover {
		color: white;
		text-decoration: underline;
	}

	/* Override spécifique pour les liens d'éditions */
	.editions-inline a {
		display: inline !important;
		padding: 0 !important;
		margin: 0 !important;
		color: #cbd5e1;
		text-decoration: underline;
		text-decoration-color: rgba(203, 213, 225, 0.5);
	}

	.editions-inline a:hover {
		color: white;
		text-decoration-color: white;
		background-color: rgba(255, 255, 255, 0.1);
		padding: 0.1em 0.2em !important;
		margin: -0.1em -0.2em !important;
		border-radius: 4px;
	}

	.editions-inline a:visited {
		color: #a5b4fc; /* Bleu clair pour les liens visités */
	}

	.editions-inline a:focus-visible {
		outline: 2px solid var(--lime);
		outline-offset: 2px;
		background-color: rgba(224, 224, 78, 0.2);
	}

	.footer-link {
		color: #e2e8f0; /* Amélioré pour contraste */
		font-size: 0.95rem;
		text-decoration: underline;
		text-decoration-color: rgba(226, 232, 240, 0.5);
		transition: all 0.2s ease;
	}

	.footer-link:hover {
		color: white;
		text-decoration-color: white;
		background-color: rgba(255, 255, 255, 0.1);
		padding: 0.2em 0.4em;
		margin: -0.2em -0.4em;
		border-radius: 4px;
	}

	.footer-link:visited {
		color: #a5b4fc;
	}

	.footer-link:focus-visible {
		outline: 2px solid var(--lime);
		outline-offset: 2px;
		background-color: rgba(224, 224, 78, 0.2);
	}

	.years-cloud {
		color: #cbd5e1;
		font-size: 0.95rem;
		line-height: 1.8;
		margin-bottom: 1.5rem;
	}

	.eco-badge-container {
		display: flex;
		justify-content: center;
	}

	.eco-badge {
		display: inline-block;
		background-color: #15803d;
		color: white;
		font-weight: 600;
		font-size: 0.85rem;
		padding: 0.4rem 1rem;
		border-radius: 9999px;
	}

	/* Tablet responsive */
	@media (min-width: 640px) {
		footer {
			padding: 3rem 2rem;
		}

		.footer-columns {
			grid-template-columns: 1fr 1fr;
			gap: 2rem;
		}

		.footer-col:nth-child(3) {
			grid-column: 1 / -1;
		}

		.brand {
			text-align: left;
		}

		.socials {
			justify-content: flex-start;
		}

		.tagline {
			margin-left: 0;
			margin-right: 0;
		}
	}

	/* Desktop responsive */
	@media (min-width: 900px) {
		footer {
			padding: 3rem 2rem;
		}

		.footer-inner {
			grid-template-columns: 1.5fr 3fr;
			gap: 4rem;
		}

		.brand {
			border-bottom: none;
			padding-bottom: 0;
		}

		.footer-columns {
			grid-template-columns: 1fr 1fr 1.5fr;
			gap: 3rem;
		}

		.footer-col {
			border-bottom: none;
		}

		.footer-col:nth-child(3) {
			grid-column: auto;
		}

		/* Masquer les boutons mobile, afficher les titres desktop */
		.mobile-toggle {
			display: none;
		}

		.desktop-title {
			display: block;
			margin-bottom: 1.5rem;
		}

		/* Toujours afficher le contenu sur desktop */
		.footer-links {
			max-height: none;
			overflow: visible;
			padding-bottom: 0;
		}

		.editions-content {
			max-height: none;
			overflow: visible;
			padding-bottom: 0;
		}

		.eco-badge-container {
			justify-content: flex-start;
		}
	}

	/* Large desktop */
	@media (min-width: 1200px) {
		.footer-inner {
			max-width: 1400px;
		}
	}

	/* Respect des préférences de mouvement réduit */
	@media (prefers-reduced-motion: reduce) {
		.footer-links,
		.editions-content,
		.chevron,
		.social-icon {
			transition: none;
		}
	}

	/* Amélioration des contrastes */
	@media (prefers-contrast: high) {
		.tagline {
			color: #e2e8f0;
		}

		a {
			color: #e2e8f0;
		}

		.footer-link {
			color: #e2e8f0;
		}

		.years-cloud {
			color: #e2e8f0;
		}

		.edition-link-inline {
			color: #e2e8f0;
		}

		.footer-link {
			color: #e2e8f0;
			text-decoration-color: #e2e8f0;
		}

		.footer-link:hover {
			background-color: var(--lime);
			color: var(--neutral-900);
		}

		.editions-inline a {
			color: #e2e8f0 !important;
			text-decoration-color: #e2e8f0 !important;
		}

		.editions-inline a:hover {
			background-color: var(--lime) !important;
			color: var(--neutral-900) !important;
		}
	}
</style>
