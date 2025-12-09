<script lang="ts">
	import type { Event } from './constants';
	import Slot from './Event.svelte';

	interface Props {
		sessions: Array<Event>;
		eventTypes: Array<string>;
	}

	const { sessions, eventTypes }: Props = $props();
</script>

{#each sessions as session (session.id)}
	<Slot {...session} {eventTypes} />
{/each}
