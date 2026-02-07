<script lang="ts">
	import { page } from '$app/state';
	import { getNavigationItems, siteConfig } from '../../config/site';
	import Badge from '../ui/Badge.svelte';
	import Button from '../ui/Button.svelte';
	import HamburgerButton from './HamburgerButton.svelte';
	import Logo from './Logo.svelte';

	let mobileMenuOpen = $state(false);
	let isScrolled = $state(false);

	// Récupération des éléments de navigation depuis la config
	const navigationItems = getNavigationItems();

	// Fonction pour déterminer si un lien est actif
	function isCurrentPage(href: string | null) {
		if (!href) return false;
		return page.url.pathname === href || (page.url.pathname.startsWith(href) && href !== '/');
	}

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
		<Logo />

		<!-- Navigation Desktop -->
		<nav class="nav-desktop" aria-label="Navigation principale">
			<ul class="nav-list">
				{#each navigationItems as item (item.href)}
					<li>
						{#if item.available}
							<a
								href={item.href}
								class="nav-link"
								class:current={isCurrentPage(item.href)}
								aria-current={isCurrentPage(item.href) ? 'page' : undefined}
								aria-label={item.ariaLabel}
								target={item.external ? '_blank' : undefined}
								rel={item.external ? 'noopener noreferrer' : undefined}
							>
								{#if siteConfig.cfp.isOpen && item.label === 'CFP'}
									<div class="nav-text-container">
										<span class="nav-text">{item.label}</span>
										<Badge color="green" size="sm">{siteConfig.cfp.badge}</Badge
										>
									</div>
								{:else}
									<span class="nav-text">{item.label}</span>
								{/if}
							</a>
						{:else}
							<div class="nav-link-disabled">
								<div class="nav-text-container">
									<span class="nav-text">{item.label}</span>
									<Badge size="sm">Bientôt</Badge>
								</div>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		</nav>

		<!-- CTA Section -->
		<div class="cta-section">
			{#if siteConfig.tickets.available}
				<Button variant="primary" href="/billets">Billets</Button>
			{:else}
				<div class="cta-disabled">
					<div class="cta-text-container">
						<span class="cta-text">Billets</span>
						<Badge color="orange" size="sm">{siteConfig.tickets.badge}</Badge>
					</div>
				</div>
			{/if}
		</div>

		<!-- Bouton Menu Mobile -->
		<HamburgerButton open={mobileMenuOpen} onToggleMenu={toggleMobileMenu} />
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
		<nav class="mobile-menu" aria-label="Navigation mobile">
			<ul class="mobile-nav-list">
				{#each navigationItems as item (item.href)}
					<li>
						{#if item.available}
							<a
								href={item.href}
								class="mobile-nav-link"
								class:current={isCurrentPage(item.href)}
								aria-current={isCurrentPage(item.href) ? 'page' : undefined}
								aria-label={item.ariaLabel}
								target={item.external ? '_blank' : undefined}
								rel={item.external ? 'noopener noreferrer' : undefined}
								onclick={closeMobileMenu}
							>
								<span class="nav-text">{item.label}</span>
								{#if siteConfig.cfp.isOpen && item.label === 'CFP'}
									<Badge color="green" size="sm">{siteConfig.cfp.badge}</Badge>
								{/if}
							</a>
						{:else}
							<div class="mobile-nav-link-disabled">
								<span class="nav-text">{item.label}</span>
								<Badge size="sm">Bientôt</Badge>
							</div>
						{/if}
					</li>
				{/each}
				<li class="mobile-cta">
					{#if siteConfig.tickets.available}
						<Button variant="primary" href="/billets" fullWidth>Billets</Button>
					{:else}
						<div class="mobile-cta-disabled">
							<span class="cta-text">Billets</span>
							<Badge color="orange" size="sm">{siteConfig.tickets.badge}</Badge>
						</div>
					{/if}
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
	}

	.header.scrolled {
		/* padding: 0.5rem 0; */
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
		min-width: 0; /* Permet la compression */
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
		gap: 0.25rem;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		min-width: 0;
		overflow-x: auto;
		overflow-y: hidden;
		scrollbar-width: none; /* Firefox */
		-ms-overflow-style: none; /* IE/Edge */
	}

	.nav-list::-webkit-scrollbar {
		display: none; /* Chrome/Safari */
	}

	.nav-link {
		display: flex;
		align-items: center;
		gap: 0.375rem;
		padding: 0.5rem 0.75rem;
		color: var(--neutral-700);
		font-weight: 500;
		font-size: 0.95rem;
		border-radius: 6px;
		text-decoration: none;
		white-space: nowrap;
		min-width: 0;
		flex-shrink: 1;
	}

	.nav-text {
		flex-shrink: 0;
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

	/* Navigation items disabled */
	.nav-link-disabled {
		padding: 0.5rem 0.75rem;
		color: var(--neutral-700);
		font-weight: 500;
		font-size: 0.95rem;
		border-radius: 6px;
		text-decoration: none;
		white-space: nowrap;
		min-width: 0;
		flex-shrink: 1;
		display: flex;
		align-items: center;
		gap: 0.375rem;
		opacity: 0.7;
		cursor: not-allowed;
	}

	.nav-text-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.1rem;
	}

	.cta-text-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
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
		padding: 0.5rem 1.5rem;
		background: var(--neutral-200);
		color: var(--neutral-800);
		border-radius: 6px;
		font-weight: 600;
		font-size: 0.85rem;
		white-space: nowrap;
		cursor: not-allowed;
	}

	.cta-text {
		color: var(--neutral-700);
		font-size: 0.85rem;
	}

	/* Mobile CTA désactivé */
	.mobile-cta-disabled {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		background: var(--neutral-100);
		color: var(--neutral-800);
		border-radius: 6px;
		font-weight: 600;
		cursor: not-allowed;
		width: 100%;
	}

	.mobile-cta-disabled .cta-text {
		color: var(--neutral-700);
		font-size: 1rem;
	}

	/* Amélioration du bouton CTA pour plus de visibilité */
	.cta-section :global(.btn-primary) {
		font-weight: 600;
		font-size: 0.85rem;
		padding: 0.5rem 1.5rem;
		box-shadow: 0 2px 4px rgba(142, 48, 137, 0.2);
		white-space: nowrap;
	}

	.cta-section :global(.btn-primary:hover) {
		box-shadow: 0 4px 8px rgba(142, 48, 137, 0.3);
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
		height: calc(100vh - 4.5rem);
		overflow-y: auto;
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
	}

	.mobile-nav-link-disabled {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 2rem;
		color: var(--neutral-700);
		font-weight: 500;
		font-size: 1rem;
		border-bottom: 1px solid var(--neutral-100);
		opacity: 0.7;
		cursor: not-allowed;
	}

	.mobile-nav-link .nav-text {
		flex: 1;
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
	}

	/* Responsive - Tablet */
	@media (min-width: 640px) {
		.container {
			padding: 0 1.5rem;
			gap: 1rem;
		}

		.nav-link {
			font-size: 1rem;
			padding: 0.625rem 0.875rem;
			gap: 0.5rem;
		}

		.nav-link-disabled {
			font-size: 1rem;
			padding: 0.625rem 0.875rem;
			gap: 0.5rem;
		}

		.cta-disabled {
			padding: 0.625rem 1.75rem;
			font-size: 0.9rem;
		}

		.cta-text {
			font-size: 0.9rem;
		}
	}

	/* Responsive - Desktop */
	@media (min-width: 900px) {
		.container {
			padding: 0 1rem;
			gap: 0.75rem;
		}

		.nav-desktop {
			display: flex;
		}

		.nav-list {
			gap: 0.5rem;
			justify-content: center;
			overflow: visible;
		}

		.nav-link {
			padding: 0.5rem 0.75rem;
			font-size: 0.95rem;
		}

		.nav-link-disabled {
			padding: 0.5rem 0.75rem;
			font-size: 0.95rem;
		}

		.cta-section {
			display: block;
		}

		.cta-section :global(.btn-primary) {
			font-size: 0.85rem;
			padding: 0.5rem 1.5rem;
		}

		.cta-disabled {
			padding: 0.5rem 1.5rem;
			font-size: 0.85rem;
		}

		.cta-text {
			font-size: 0.85rem;
		}
	}

	@media (min-width: 1200px) {
		.container {
			padding: 0 1.5rem;
			gap: 1rem;
		}

		.nav-list {
			gap: 0.75rem;
			justify-content: center;
			overflow: visible;
		}

		.nav-link {
			padding: 0.625rem 0.875rem;
			font-size: 1rem;
		}

		.nav-link-disabled {
			padding: 0.625rem 0.875rem;
			font-size: 1rem;
		}

		.cta-section :global(.btn-primary) {
			font-size: 0.9rem;
			padding: 0.625rem 1.75rem;
		}

		.cta-disabled {
			padding: 0.625rem 1.75rem;
			font-size: 0.9rem;
		}

		.cta-text {
			font-size: 0.9rem;
		}
	}

	@media (min-width: 1300px) {
		.container {
			gap: 1.5rem;
			height: 5rem;
		}

		.header.scrolled .container {
			height: 4.5rem;
		}

		.nav-list {
			gap: 1rem;
		}

		.nav-link {
			padding: 0.75rem 1rem;
			font-size: 1.05rem;
		}

		.nav-link-disabled {
			padding: 0.75rem 1rem;
			font-size: 1.05rem;
		}

		.cta-section :global(.btn-primary) {
			font-size: 0.95rem;
			padding: 0.75rem 2rem;
		}

		.cta-disabled {
			padding: 0.75rem 2rem;
			font-size: 0.95rem;
		}

		.cta-text {
			font-size: 0.95rem;
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

		.mobile-nav-link {
			color: var(--neutral-900);
		}

		.mobile-nav-link:hover {
			background-color: var(--neutral-100);
		}
	}
</style>
