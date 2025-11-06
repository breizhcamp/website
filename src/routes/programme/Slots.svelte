<script lang="ts">
	import type { Formatted } from '$lib/program/program.types';
	import Slot from './Slot.svelte';

	interface Props {
		sessions: Array<Formatted.Session>;
	}

	const { sessions }: Props = $props();
</script>

{#each sessions as { title }}
	<Slot {title} />
{/each}
