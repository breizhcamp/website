<script lang="ts">
	import Button from '../ui/Button.svelte';
	import Logo from '../ui/Logo.svelte';

	let mobileMenuOpen = $state(false);
	let isScrolled = $state(false);

	// Configuration CFP
	const cfpConfig = {
		isOpen: true, // À changer selon l'état du CFP
		url: 'https://sessionize.com/breizhcamp-2026/'
	};

	const navigationItems = [
		{ label: 'Accueil', href: '/', current: true },
		{ label: 'Programme', href: '/programme' },
		{ label: 'Intervenants', href: '/intervenants' },
		{ label: 'Sponsors', href: '/sponsors' },
		{ label: 'Blog', href: '/blog' },
		{ label: 'Infos pratiques', href: '/infos-pratiques' },
		...(cfpConfig.isOpen
			? [
					{
						label: 'CFP',
						href: cfpConfig.url,
						external: true,
						badge: 'Ouvert',
						ariaLabel: 'CFP — Ouvert (ouvre Sessionize)'
					}
				]
			: [])
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	// Fermer le menu mobile avec Escape
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && mobileMenuOpen) {
			closeMobileMenu();
		}
	}

	// Gérer le scroll pour version sticky compacte
	function handleScroll() {
		isScrolled = window.scrollY > 20;
	}
</script>

<svelte:window on:keydown={handleKeydown} on:scroll={handleScroll} />

<header class="header" class:scrolled={isScrolled}>
	<div class="container">
		<!-- Logo -->
		<div class="logo-section">
			<a href="/" class="logo-link" aria-label="BreizhCamp 2026 - Retour à l'accueil">
				<Logo />
			</a>
		</div>

		<!-- Navigation Desktop -->
		<nav class="nav-desktop" aria-label="Navigation principale">
			<ul class="nav-list">
				{#each navigationItems as item}
					<li>
						<a
							href={item.href}
							class="nav-link"
							class:current={item.current}
							aria-current={item.current ? 'page' : undefined}
							aria-label={item.ariaLabel || item.label}
							target={item.external ? '_blank' : undefined}
							rel={item.external ? 'noopener noreferrer' : undefined}
						>
							<span class="nav-text">{item.label}</span>
							{#if item.badge}
								<span class="nav-badge" aria-hidden="true">{item.badge}</span>
							{/if}
							{#if item.external}
								<svg
									class="external-icon"
									width="14"
									height="14"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"
									/>
								</svg>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- CTA Section -->
		<div class="cta-section">
			<div class="cta-disabled">
				<span class="cta-text">Billets</span>
				<span class="cta-badge">Bientôt</span>
			</div>
		</div>

		<!-- Bouton Menu Mobile -->
		<button
			class="mobile-menu-button"
			aria-expanded={mobileMenuOpen}
			aria-controls="mobile-menu"
			aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
			onclick={toggleMobileMenu}
		>
			<span class="hamburger-line" class:open={mobileMenuOpen}></span>
			<span class="hamburger-line" class:open={mobileMenuOpen}></span>
			<span class="hamburger-line" class:open={mobileMenuOpen}></span>
		</button>
	</div>

	<!-- Menu Mobile -->
	{#if mobileMenuOpen}
		<div
			class="mobile-menu-overlay"
			onclick={closeMobileMenu}
			onkeydown={(e) => e.key === 'Enter' && closeMobileMenu()}
			role="button"
			tabindex="0"
			aria-label="Fermer le menu"
		></div>
		<nav class="mobile-menu" id="mobile-menu" aria-label="Navigation mobile">
			<ul class="mobile-nav-list">
				{#each navigationItems as item}
					<li>
						<a
							href={item.href}
							class="mobile-nav-link"
							class:current={item.current}
							aria-current={item.current ? 'page' : undefined}
							aria-label={item.ariaLabel || item.label}
							target={item.external ? '_blank' : undefined}
							rel={item.external ? 'noopener noreferrer' : undefined}
							onclick={closeMobileMenu}
						>
							<span class="nav-text">{item.label}</span>
							{#if item.badge}
								<span class="nav-badge mobile" aria-hidden="true">{item.badge}</span
								>
							{/if}
							{#if item.external}
								<svg
									class="external-icon"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zM19 19H5V5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7z"
									/>
								</svg>
							{/if}
						</a>
					</li>
				{/each}
				<li class="mobile-cta">
					<div class="mobile-cta-disabled">
						<span class="cta-text">Billets</span>
						<span class="cta-badge">Bientôt disponibles</span>
					</div>
				</li>
			</ul>
		</nav>
	{/if}
</header>

<style>
	/* Header principal */
	.header {
		background: white;
		border-bottom: 1px solid var(--neutral-200);
		position: sticky;
		top: 0;
		z-index: 50;
		box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
		transition: all 0.3s ease;
	}

	.header.scrolled {
		padding: 0.5rem 0;
		box-shadow: 0 2px 8px 0 rgb(0 0 0 / 0.15);
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		height: 4.5rem;
		transition: height 0.3s ease;
		min-width: 0; /* Permet la compression */
	}

	.header.scrolled .container {
		height: 4rem;
	}

	/* Logo Section */
	.logo-section {
		display: flex;
		align-items: center;
		flex-shrink: 0;
		width: 140px;
		min-width: 100px;
	}

	.logo-link {
		display: block;
		border-radius: 6px;
		transition: opacity 0.2s ease;
		width: 100%;
	}

	.logo-link :global(img) {
		width: 100%;
		height: auto;
		max-width: 140px;
	}

	.logo-link:hover {
		opacity: 0.8;
	}

	.logo-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 4px;
	}

	/* Navigation Desktop */
	.nav-desktop {
		display: none;
		flex: 1;
		justify-content: center;
		min-width: 0;
		overflow: hidden;
	}

	.nav-list {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 0;
		flex-wrap: nowrap;
		justify-content: center;
		min-width: 0;
		overflow: hidden;
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.25rem;
		padding: 0.5rem 0.4rem;
		color: var(--neutral-700);
		font-weight: 500;
		font-size: 0.75rem;
		border-radius: 6px;
		transition: all 0.2s ease;
		text-decoration: none;
		white-space: nowrap;
		min-width: 0;
		flex-shrink: 1;
	}

	.nav-text {
		flex-shrink: 0;
	}

	.nav-badge {
		background: var(--orange);
		color: white;
		font-size: 0.6rem;
		font-weight: 600;
		padding: 0.15rem 0.3rem;
		border-radius: 8px;
		text-transform: uppercase;
		letter-spacing: 0.025em;
		flex-shrink: 0;
	}

	.nav-badge.mobile {
		font-size: 0.7rem;
		padding: 0.2rem 0.4rem;
	}

	.external-icon {
		flex-shrink: 0;
		opacity: 0.7;
		width: 10px;
		height: 10px;
	}

	.nav-link:hover {
		color: var(--violet);
		background-color: var(--neutral-50);
	}

	/* État actif - soulignement simple */
	.nav-link.current {
		color: var(--violet);
		font-weight: 600;
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 4px;
	}

	.nav-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
	}

	/* CTA Section - Isolée et prioritaire */
	.cta-section {
		display: none;
		flex-shrink: 0;
		min-width: fit-content;
	}

	/* CTA désactivé */
	.cta-disabled {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 0.875rem;
		background: var(--neutral-200);
		color: var(--neutral-600);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.8rem;
		white-space: nowrap;
		cursor: not-allowed;
	}

	.cta-text {
		color: var(--neutral-700);
	}

	.cta-badge {
		background: var(--orange);
		color: white;
		font-size: 0.6rem;
		font-weight: 600;
		padding: 0.15rem 0.3rem;
		border-radius: 8px;
		text-transform: uppercase;
		letter-spacing: 0.025em;
	}

	/* Mobile CTA désactivé */
	.mobile-cta-disabled {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		background: var(--neutral-100);
		color: var(--neutral-600);
		border-radius: 6px;
		font-weight: 600;
		cursor: not-allowed;
		width: 100%;
	}

	.mobile-cta-disabled .cta-text {
		color: var(--neutral-700);
		font-size: 1rem;
	}

	.mobile-cta-disabled .cta-badge {
		font-size: 0.7rem;
		padding: 0.2rem 0.4rem;
	}

	/* Amélioration du bouton CTA pour plus de visibilité */
	.cta-section :global(.btn-primary) {
		font-weight: 600;
		font-size: 0.8rem;
		padding: 0.5rem 0.875rem;
		box-shadow: 0 2px 4px rgba(142, 48, 137, 0.2);
		white-space: nowrap;
	}

	.cta-section :global(.btn-primary:hover) {
		box-shadow: 0 4px 8px rgba(142, 48, 137, 0.3);
		transform: translateY(-1px);
	}

	/* Bouton Menu Mobile */
	.mobile-menu-button {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 2.75rem;
		height: 2.75rem;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
		border-radius: 6px;
		gap: 0.25rem;
		transition: background-color 0.2s ease;
		flex-shrink: 0;
	}

	.mobile-menu-button:hover {
		background-color: var(--neutral-50);
	}

	.mobile-menu-button:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: 2px;
	}

	.hamburger-line {
		width: 1.5rem;
		height: 2px;
		background: var(--neutral-800);
		transition: all 0.3s ease;
		transform-origin: center;
	}

	.hamburger-line.open:nth-child(1) {
		transform: rotate(45deg) translate(0.375rem, 0.375rem);
	}

	.hamburger-line.open:nth-child(2) {
		opacity: 0;
	}

	.hamburger-line.open:nth-child(3) {
		transform: rotate(-45deg) translate(0.375rem, -0.375rem);
	}

	/* Menu Mobile */
	.mobile-menu-overlay {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.5);
		z-index: 40;
		cursor: pointer;
	}

	.mobile-menu {
		position: fixed;
		top: 4.5rem;
		right: 0;
		width: 320px;
		max-width: 90vw;
		background: white;
		border-left: 1px solid var(--neutral-200);
		border-bottom: 1px solid var(--neutral-200);
		box-shadow: -4px 4px 20px 0 rgb(0 0 0 / 0.15);
		z-index: 50;
		max-height: calc(100vh - 4.5rem);
		overflow-y: auto;
	}

	.header.scrolled .mobile-menu {
		top: 4rem;
		max-height: calc(100vh - 4rem);
	}

	.mobile-nav-list {
		list-style: none;
		margin: 0;
		padding: 1.5rem 0;
	}

	.mobile-nav-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		color: var(--neutral-700);
		font-weight: 500;
		font-size: 1rem;
		text-decoration: none;
		border-bottom: 1px solid var(--neutral-100);
		transition: all 0.2s ease;
	}

	.mobile-nav-link .nav-text {
		flex: 1;
	}

	.mobile-nav-link .nav-badge,
	.mobile-nav-link .external-icon {
		margin-left: 0.5rem;
	}

	.mobile-nav-link:hover {
		background-color: var(--neutral-50);
		color: var(--violet);
	}

	.mobile-nav-link.current {
		color: var(--violet);
		font-weight: 600;
		background-color: var(--neutral-50);
		border-left: 4px solid var(--violet);
	}

	.mobile-nav-link:focus-visible {
		outline: 2px solid var(--violet);
		outline-offset: -2px;
	}

	.mobile-cta {
		padding: 2rem 2rem 1rem;
		border-top: 2px solid var(--neutral-200);
		margin-top: 1rem;
	}

	/* Très petits écrans */
	@media (max-width: 360px) {
		.container {
			padding: 0 0.75rem;
			gap: 0.5rem;
		}

		.logo-section {
			width: 140px;
			min-width: 100px;
		}

		.logo-link :global(img) {
			max-width: 140px;
		}

		.mobile-menu-button {
			width: 2.5rem;
			height: 2.5rem;
		}
	}

	/* Responsive - Tablet */
	@media (min-width: 640px) {
		.container {
			padding: 0 1.5rem;
			gap: 1rem;
		}

		.logo-section {
			width: 160px;
		}

		.logo-link :global(img) {
			max-width: 160px;
		}

		.nav-link {
			font-size: 0.8rem;
			padding: 0.625rem 0.5rem;
			gap: 0.375rem;
		}

		.nav-badge {
			font-size: 0.65rem;
			padding: 0.2rem 0.4rem;
		}

		.external-icon {
			width: 12px;
			height: 12px;
		}
	}

	/* Responsive - Desktop */
	@media (min-width: 1100px) {
		.container {
			padding: 0 2rem;
			gap: 1.5rem;
		}

		.logo-section {
			width: 180px;
		}

		.logo-link :global(img) {
			max-width: 180px;
		}

		.nav-desktop {
			display: flex;
		}

		.nav-list {
			gap: 0.125rem;
		}

		.nav-link {
			padding: 0.75rem 0.75rem;
			font-size: 0.85rem;
		}

		.cta-section {
			display: block;
		}

		.cta-section :global(.btn-primary) {
			font-size: 0.85rem;
			padding: 0.625rem 1rem;
		}

		.mobile-menu-button {
			display: none;
		}
	}

	@media (min-width: 1300px) {
		.container {
			gap: 2rem;
			height: 5rem;
		}

		.header.scrolled .container {
			height: 4.5rem;
		}

		.logo-section {
			width: 200px;
		}

		.logo-link :global(img) {
			max-width: 200px;
		}

		.nav-list {
			gap: 0.25rem;
		}

		.nav-link {
			padding: 0.875rem 0.875rem;
			font-size: 0.9rem;
		}

		.cta-section :global(.btn-primary) {
			font-size: 0.9rem;
			padding: 0.75rem 1.25rem;
		}

		.mobile-menu {
			top: 5rem;
			max-height: calc(100vh - 5rem);
		}

		.header.scrolled .mobile-menu {
			top: 4.5rem;
			max-height: calc(100vh - 4.5rem);
		}
	}

	/* Amélioration des contrastes pour l'accessibilité */
	@media (prefers-contrast: high) {
		.nav-link {
			color: var(--neutral-900);
		}

		.nav-link:hover {
			background-color: var(--neutral-100);
		}

		.nav-badge {
			background: var(--neutral-900);
			color: white;
			border: 2px solid var(--orange);
		}

		.mobile-nav-link {
			color: var(--neutral-900);
		}

		.mobile-nav-link:hover {
			background-color: var(--neutral-100);
		}

		.hamburger-line {
			background: var(--neutral-900);
		}
	}

	/* Respect des préférences de mouvement réduit */
	@media (prefers-reduced-motion: reduce) {
		.header,
		.container,
		.nav-link,
		.mobile-nav-link,
		.hamburger-line,
		.mobile-menu-button,
		.logo-link,
		.cta-section :global(.btn-primary) {
			transition: none;
		}

		.cta-section :global(.btn-primary:hover) {
			transform: none;
		}
	}
</style>
