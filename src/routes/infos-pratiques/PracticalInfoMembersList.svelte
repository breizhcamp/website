<script lang="ts">
	import type { TeamMember } from '$lib/config/team';

	interface Props {
		members: Array<TeamMember>;
	}

	let { members }: Props = $props();
</script>

{#each members as member, i (member.nom)}
	{#if i > 0},
	{/if}
	{member.nom}
{/each}
