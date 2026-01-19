<script>
	import Button from '$lib/components/ui/Button.svelte';
	import Logo from '$lib/components/ui/Logo.svelte';
</script>

<header>
	<div class="header-inner">
		<a href="/" class="logo" aria-label="BreizhCamp - Accueil">
			<Logo width="250" />
		</a>

		<nav>
			<ul class="nav-list">
				<li><a href="/">Accueil</a></li>
				<li><span>Programme</span></li>
				<li><span>Intervenants</span></li>
				<li><span>Sponsors</span></li>
				<li><span>Infos pratiques</span></li>
			</ul>
		</nav>

		<div class="cta-wrapper">
			<Button variant="primary">Billets</Button>
		</div>
	</div>
</header>

<style>
	header {
		border-bottom: 1px solid var(--neutral-100);
		background-color: #ffffff;
		position: sticky;
		top: 0;
		z-index: 50;
	}

	.header-inner {
		display: flex;
		align-items: center;
		padding: 2rem 3rem;
		min-height: 0;
		max-width: 1440px;
		margin: 0 auto;
	}

	.logo {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
		flex-shrink: 0;
		height: 40px;
	}

	:global(.logo svg) {
		max-height: 100%;
		width: auto;
	}

	nav {
		display: flex;
		margin-left: auto;
	}

	.nav-list {
		display: flex;
		gap: 2rem;
		align-items: center;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.nav-list a,
	.nav-list span {
		color: var(--neutral-700);
		font-weight: 500;
		font-size: 0.95rem;
		text-decoration: none;
		transition: color 0.2s;
		line-height: 1;
	}

	.nav-list a:hover {
		color: var(--violet);
	}

	.cta-wrapper {
		margin-left: 2rem;
	}

	@media (max-width: 900px) {
		.header-inner {
			flex-direction: column;
			gap: 1rem;
			padding: 1rem;
		}

		.logo {
			height: auto;
		}

		nav {
			margin-left: 0;
			text-align: center;
		}

		.nav-list {
			flex-wrap: wrap;
			justify-content: center;
			gap: 1rem;
		}

		.cta-wrapper {
			margin-left: 0;
		}
	}
</style>
