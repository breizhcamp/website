<script lang="ts">
	import Button from '../../lib/components/ui/Button.svelte';

	interface Props {
		actions: Array<{
			label: string;
			href: string;
			variant: 'primary' | 'secondary';
			external?: boolean;
		}>;
	}

	let { actions }: Props = $props();
</script>

<div class="section-actions">
	{#each actions as action (action.href)}
		<Button
			variant={action.variant}
			href={action.href}
			{...action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}}
		>
			{action.label}
			{#if action.external}
				<span class="sr-only">(ouvre dans un nouvel onglet)</span>
			{/if}
		</Button>
	{/each}
</div>

<style>
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
</style>
