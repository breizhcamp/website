<script>
	import Badge from '$lib/components/ui/Badge.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	const brandColors = [
		{ name: 'Violet', var: '--violet', hex: '#8E3089', class: 'bg-violet' },
		{ name: 'Lime', var: '--lime', hex: '#E0E04E', class: 'bg-lime' },
		{ name: 'Orange', var: '--orange', hex: '#B45309', class: 'bg-orange' }
	];

	const neutralColors = [
		{ shade: '50', hex: '#F8FAFC', contrast: 'AA' },
		{ shade: '100', hex: '#F1F5F9', contrast: 'AA' },
		{ shade: '200', hex: '#E2E8F0', contrast: 'AA' },
		{ shade: '300', hex: '#CBD5E1', contrast: 'AA' },
		{ shade: '400', hex: '#94A3B8', contrast: 'Fail' },
		{ shade: '500', hex: '#64748B', contrast: 'AA' },
		{ shade: '600', hex: '#475569', contrast: 'AAA' },
		{ shade: '700', hex: '#334155', contrast: 'AAA' },
		{ shade: '800', hex: '#1E293B', contrast: 'AAA' },
		{ shade: '900', hex: '#0F172A', contrast: 'AAA' }
	];

	const utilityCategories = [
		{
			name: 'Layout',
			classes: [
				{
					name: '.container',
					desc: 'Conteneur centré max-width 1200px avec padding responsive'
				},
				{ name: '.section', desc: 'Section avec padding vertical 4rem (6rem sur desktop)' }
			]
		},
		{
			name: 'Flexbox',
			classes: [
				{ name: '.flex', desc: 'display: flex' },
				{ name: '.flex-col', desc: 'flex-direction: column' },
				{ name: '.flex-row', desc: 'flex-direction: row' },
				{ name: '.items-center', desc: 'align-items: center' },
				{ name: '.justify-between', desc: 'justify-content: space-between' },
				{ name: '.gap-4', desc: 'gap: 1rem (aussi: gap-1, gap-2, gap-3, gap-6, gap-8)' }
			]
		},
		{
			name: 'Grid',
			classes: [
				{ name: '.grid', desc: 'display: grid' },
				{ name: '.grid-cols-3', desc: 'grid-template-columns: repeat(3, 1fr)' },
				{ name: '.grid-auto-fit', desc: 'Auto-fit avec minmax(250px, 1fr)' },
				{ name: '.md:grid-cols-3', desc: 'Grid responsive (sm:, md:, lg:)' }
			]
		},
		{
			name: 'Spacing',
			classes: [
				{ name: '.mt-4', desc: 'margin-top: 1rem' },
				{ name: '.mb-8', desc: 'margin-bottom: 2rem' },
				{ name: '.p-4', desc: 'padding: 1rem' },
				{ name: '.gap-4', desc: 'gap: 1rem' }
			]
		},
		{
			name: 'Typography',
			classes: [
				{ name: '.text-sm', desc: 'font-size: 0.875rem' },
				{ name: '.text-lg', desc: 'font-size: 1.125rem' },
				{ name: '.font-semibold', desc: 'font-weight: 600' },
				{ name: '.text-center', desc: 'text-align: center' }
			]
		},
		{
			name: 'Colors',
			classes: [
				{ name: '.text-violet', desc: 'color: var(--violet)' },
				{ name: '.text-neutral-700', desc: 'color: var(--neutral-700)' },
				{ name: '.bg-neutral-50', desc: 'background: var(--neutral-50)' }
			]
		},
		{
			name: 'Composants',
			classes: [
				{ name: '.badge', desc: 'Badge générique' },
				{ name: '.badge-primary', desc: 'Badge violet' },
				{ name: '.badge-success', desc: 'Badge vert' },
				{ name: '.card', desc: 'Carte avec border et shadow' },
				{
					name: '.avatar',
					desc: 'Avatar rond 80x80px (aussi: avatar-sm, avatar-md, avatar-lg)'
				},
				{ name: '.input-field', desc: 'Champ de formulaire stylisé' },
				{ name: '.link', desc: 'Lien avec style violet et underline' },
				{ name: '.placeholder', desc: 'Placeholder gris pour contenu manquant' }
			]
		}
	];
</script>

<svelte:head>
	<title>Design System - BreizhCamp 2026</title>
	<meta
		name="description"
		content="Système de design et classes utilitaires du site BreizhCamp"
	/>
</svelte:head>

<!-- Hero -->
<section class="hero">
	<div class="container">
		<h1>Design System <span class="text-violet">BreizhCamp</span></h1>
		<p class="hero-subtitle">
			Système de design complet avec composants réutilisables et classes utilitaires pour un
			développement cohérent et rapide.
		</p>
		<div class="flex justify-center gap-4 flex-wrap">
			<Badge>WCAG 2.1 AAA</Badge>
			<Badge>Éco-conçu</Badge>
			<Badge>Mobile-first</Badge>
		</div>
	</div>
</section>

<div class="container page-content">
	<!-- Couleurs -->
	<section class="content-section">
		<h2 class="section-title">Palette de couleurs</h2>

		<h3 class="subsection-title">Couleurs de marque</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
			{#each brandColors as color (color.name)}
				<div class="color-card {color.class}">
					<div class="color-info">
						<span class="font-semibold">{color.name}</span>
						<span class="text-sm opacity-90">{color.hex}</span>
						<code class="text-xs">var({color.var})</code>
					</div>
				</div>
			{/each}
		</div>

		<h3 class="subsection-title">Couleurs neutres (avec contraste WCAG)</h3>
		<div class="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
			{#each neutralColors as color (color.hex)}
				<div class="neutral-card bg-neutral-{color.shade}">
					<div class="neutral-info">
						<span class="font-semibold">{color.shade}</span>
						<span class="text-xs">{color.hex}</span>
						<span
							class="text-xs badge-contrast {color.contrast === 'AAA'
								? 'badge-success'
								: color.contrast === 'AA'
									? 'badge-warning'
									: 'badge-fail'}">{color.contrast}</span
						>
					</div>
				</div>
			{/each}
		</div>
		<p class="text-sm text-neutral-700 mt-4">
			✓ Utilisez neutral-600 et neutral-700 pour les textes (contraste AAA)
		</p>
	</section>

	<!-- Composants UI -->
	<section class="content-section">
		<h2 class="section-title">Composants UI</h2>

		<h3 class="subsection-title">Boutons</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
			<div>
				<p class="text-sm text-neutral-700 mb-4">Primaire</p>
				<Button variant="primary">Bouton primaire</Button>
			</div>
			<div>
				<p class="text-sm text-neutral-700 mb-4">Secondaire</p>
				<Button variant="secondary">Bouton secondaire</Button>
			</div>
			<div>
				<p class="text-sm text-neutral-700 mb-4">Tertiaire</p>
				<Button variant="tertiary">Bouton tertiaire</Button>
			</div>
		</div>

		<h3 class="subsection-title">Badges</h3>
		<div class="flex gap-4 flex-wrap mb-8">
			<Badge>Badge par défaut</Badge>
			<span class="badge badge-primary">Badge primaire</span>
			<span class="badge badge-success">Badge succès</span>
			<span class="badge badge-warning">Badge warning</span>
			<span class="badge badge-secondary">Badge secondaire</span>
		</div>

		<h3 class="subsection-title">Cartes</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<Card align="center">
				<div class="avatar placeholder mb-4">👤</div>
				<h3>Carte centrée</h3>
				<p class="text-sm text-neutral-700">Contenu de la carte avec alignement centré</p>
			</Card>

			<Card align="left">
				<h3>Carte alignée à gauche</h3>
				<p class="text-sm text-neutral-700 mb-4">
					Contenu de la carte avec alignement à gauche par défaut
				</p>
				<Badge>React</Badge>
			</Card>

			<div class="card">
				<h3>Carte avec classe .card</h3>
				<p class="text-sm text-neutral-700">
					Utilisation directe de la classe utilitaire .card
				</p>
			</div>
		</div>
	</section>

	<!-- Classes utilitaires -->
	<section class="content-section">
		<h2 class="section-title">Classes utilitaires</h2>
		<p class="section-description">
			Classes réutilisables pour un développement rapide et cohérent
		</p>

		{#each utilityCategories as category (category.name)}
			<div class="utility-section">
				<h3 class="subsection-title">{category.name}</h3>
				<div class="utility-grid">
					{#each category.classes as util (util.name)}
						<div class="utility-item">
							<code class="utility-name">{util.name}</code>
							<span class="utility-desc">{util.desc}</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</section>

	<!-- Exemples d'utilisation -->
	<section class="content-section">
		<h2 class="section-title">Exemples d'utilisation</h2>

		<h3 class="subsection-title">Layout avec classes utilitaires</h3>
		<div class="example-box">
			<pre><code
					>&lt;div class="container"&gt;
  &lt;div class="flex justify-between items-center gap-4"&gt;
    &lt;h2 class="text-2xl font-semibold text-violet"&gt;Titre&lt;/h2&gt;
    &lt;span class="badge badge-success"&gt;Nouveau&lt;/span&gt;
  &lt;/div&gt;
&lt;/div&gt;</code
				></pre>
		</div>

		<h3 class="subsection-title mt-8">Grid responsive</h3>
		<div class="example-box">
			<pre><code
					>&lt;div class="grid grid-cols-1 md:grid-cols-3 gap-6"&gt;
  &lt;div class="card"&gt;Carte 1&lt;/div&gt;
  &lt;div class="card"&gt;Carte 2&lt;/div&gt;
  &lt;div class="card"&gt;Carte 3&lt;/div&gt;
&lt;/div&gt;</code
				></pre>
		</div>

		<h3 class="subsection-title mt-8">Formulaire</h3>
		<div class="example-box">
			<pre><code
					>&lt;form class="max-w-md"&gt;
  &lt;div class="form-group"&gt;
    &lt;label class="form-label"&gt;Email&lt;/label&gt;
    &lt;input type="email" class="input-field" /&gt;
  &lt;/div&gt;
  &lt;Button variant="primary" fullWidth&gt;Envoyer&lt;/Button&gt;
&lt;/form&gt;</code
				></pre>
		</div>
	</section>

	<!-- Typographie -->
	<section class="content-section">
		<h2 class="section-title">Typographie</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div>
				<h3 class="subsection-title">Titres</h3>
				<h1 class="mb-4">Titre H1 - 3.5rem</h1>
				<h2 class="mb-4">Titre H2 - 2rem</h2>
				<h3 class="mb-4">Titre H3 - 1.1rem</h3>
			</div>
			<div>
				<h3 class="subsection-title">Tailles de texte</h3>
				<p class="text-xs mb-2">Texte extra small (.text-xs) - 0.75rem</p>
				<p class="text-sm mb-2">Texte small (.text-sm) - 0.875rem</p>
				<p class="text-base mb-2">Texte base (.text-base) - 1rem</p>
				<p class="text-lg mb-2">Texte large (.text-lg) - 1.125rem</p>
				<p class="text-xl mb-2">Texte extra large (.text-xl) - 1.25rem</p>
			</div>
		</div>
	</section>

	<!-- Accessibilité -->
	<section class="content-section accessibility-section">
		<h2 class="section-title">Accessibilité</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="card">
				<h3 class="subsection-title">✓ Contrastes</h3>
				<ul class="text-sm text-neutral-700 space-y-2">
					<li>• Tous les textes respectent WCAG 2.1 AAA</li>
					<li>• neutral-700 pour textes principaux (9.73:1)</li>
					<li>• neutral-600 pour textes secondaires (7.23:1)</li>
					<li>• Éviter neutral-400 et neutral-500</li>
				</ul>
			</div>
			<div class="card">
				<h3 class="subsection-title">✓ Focus visible</h3>
				<ul class="text-sm text-neutral-700 space-y-2">
					<li>• Outline violet 2px sur tous les éléments interactifs</li>
					<li>• Zones de clic minimum 44x44px</li>
					<li>• Navigation clavier complète</li>
					<li>• Support prefers-reduced-motion</li>
				</ul>
			</div>
		</div>
	</section>
</div>

<style>
	/* Hero Section */
	.hero {
		background: linear-gradient(135deg, var(--violet) 0%, var(--orange) 100%);
		color: white;
		text-align: center;
		padding: 4rem 0;
		margin-bottom: 4rem;
	}

	/* Page Content */
	.page-content {
		padding-bottom: 4rem;
	}

	.hero h1 {
		font-size: 2.5rem;
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.hero-subtitle {
		font-size: 1.125rem;
		margin-bottom: 2rem;
		opacity: 0.95;
		line-height: 1.6;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	/* Content Sections */
	.content-section {
		margin-bottom: 5rem;
	}

	.section-title {
		font-size: 2rem;
		font-weight: 600;
		color: var(--neutral-900);
		margin-bottom: 1rem;
		text-align: left;
	}

	.section-description {
		color: var(--neutral-700);
		font-size: 1.1rem;
		margin-bottom: 3rem;
		line-height: 1.6;
	}

	.subsection-title {
		font-size: 1.25rem;
		font-weight: 600;
		color: var(--neutral-900);
		margin-bottom: 1.5rem;
		margin-top: 2rem;
	}

	.subsection-title:first-of-type {
		margin-top: 0;
	}

	.color-card {
		height: 150px;
		border-radius: var(--border-radius);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		color: white;
	}

	.bg-lime {
		color: black;
	}

	.color-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.neutral-card {
		height: 120px;
		border-radius: var(--border-radius);
		padding: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		border: 1px solid var(--neutral-200);
	}

	.bg-neutral-50,
	.bg-neutral-100,
	.bg-neutral-200,
	.bg-neutral-300,
	.bg-neutral-400 {
		color: var(--neutral-900);
	}

	.bg-neutral-500,
	.bg-neutral-600,
	.bg-neutral-700,
	.bg-neutral-800,
	.bg-neutral-900 {
		color: white;
	}

	.neutral-info {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.badge-contrast {
		display: inline-block;
		padding: 0.1rem 0.4rem;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.65rem;
	}

	.badge-success {
		background: #15803d;
		color: white;
	}

	.badge-warning {
		background: var(--orange);
		color: white;
	}

	.badge-fail {
		background: #dc2626;
		color: white;
	}

	.utility-section {
		margin-bottom: 2.5rem;
	}

	.accessibility-section {
		background: var(--neutral-50);
		border-radius: 12px;
		padding: 3rem;
	}

	.utility-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}

	.utility-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		padding: 1rem;
		background: var(--neutral-50);
		border-radius: 6px;
		border: 1px solid var(--neutral-200);
	}

	.utility-name {
		font-family: 'Courier New', monospace;
		font-weight: 600;
		color: var(--violet);
		font-size: 0.9rem;
	}

	.utility-desc {
		font-size: 0.85rem;
		color: var(--neutral-700);
	}

	.example-box {
		background: var(--neutral-900);
		color: #e2e8f0;
		padding: 1.5rem;
		border-radius: var(--border-radius);
		overflow-x: auto;
	}

	.example-box pre {
		margin: 0;
	}

	.example-box code {
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.space-y-2 > * + * {
		margin-top: 0.5rem;
	}

	@media (min-width: 768px) {
		.hero {
			padding: 6rem 0;
		}

		.hero h1 {
			font-size: 3.5rem;
		}

		.hero-subtitle {
			font-size: 1.25rem;
		}

		.accessibility-section {
			padding: 4rem;
		}
	}

	@media (min-width: 1024px) {
		.hero h1 {
			font-size: 4rem;
		}
	}
</style>
