<script lang="ts">
	import Button from '../../lib/components/ui/Button.svelte';
	import Card from '../../lib/components/ui/Card.svelte';

	interface Props {
		section: {
			id: string;
			title: string;
			shortDescription: string;
			content: string;
			icon: string;
			actions?: Array<{
				label: string;
				href: string;
				variant: 'primary' | 'secondary';
				external?: boolean;
			}>;
		};
	}

	let { section }: Props = $props();
</script>

<section class="info-section" id={section.id}>
	<div class="container">
		<div class="section-header">
			<div class="section-icon" aria-hidden="true">
				{@html section.icon}
			</div>
			<h2>{section.title}</h2>
		</div>

		<Card>
			<div class="section-content">
				<div class="content-text">
					{@html section.content}
				</div>

				{#if section.actions && section.actions.length > 0}
					<div class="section-actions">
						{#each section.actions as action (action.href)}
							<Button
								variant={action.variant}
								href={action.href}
								{...action.external
									? { target: '_blank', rel: 'noopener noreferrer' }
									: {}}
							>
								{action.label}
								{#if action.external}
									<span class="sr-only">(ouvre dans un nouvel onglet)</span>
								{/if}
							</Button>
						{/each}
					</div>
				{/if}
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

	.info-section {
		padding: 3rem 0;
	}

	.info-section:nth-child(even) {
		background: var(--neutral-50);
	}

	.section-header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.section-icon {
		width: 48px;
		height: 48px;
		color: var(--violet);
		flex-shrink: 0;
	}

	.section-header h2 {
		font-size: 2rem;
		color: var(--neutral-900);
		margin: 0;
		font-weight: 600;
	}

	.section-content {
		padding: 2rem;
	}

	.content-text {
		color: var(--neutral-700);
		line-height: 1.7;
		font-size: 1.1rem;
	}

	.content-text :global(h3) {
		color: var(--neutral-900);
		font-size: 1.5rem;
		margin: 2rem 0 1rem 0;
		font-weight: 600;
	}

	.content-text :global(h4) {
		color: var(--neutral-800);
		font-size: 1.25rem;
		margin: 1.5rem 0 0.75rem 0;
		font-weight: 600;
	}

	.content-text :global(p) {
		margin-bottom: 1rem;
	}

	.content-text :global(ul),
	.content-text :global(ol) {
		margin: 1rem 0;
		padding-left: 2rem;
	}

	.content-text :global(li) {
		margin-bottom: 0.5rem;
	}

	.content-text :global(strong) {
		color: var(--neutral-900);
		font-weight: 600;
	}

	.content-text :global(em) {
		color: var(--violet);
		font-style: normal;
		font-weight: 500;
	}

	.section-actions {
		display: flex;
		gap: 1rem;
		margin-top: 2rem;
		flex-wrap: wrap;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	/* Responsive */
	@media (min-width: 768px) {
		.container {
			padding: 0 2rem;
		}

		.section-header h2 {
			font-size: 2.5rem;
		}

		.section-content {
			padding: 3rem;
		}
	}

	@media (min-width: 1024px) {
		.info-section {
			padding: 4rem 0;
		}
	}
</style>
