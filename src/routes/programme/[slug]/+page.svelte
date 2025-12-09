<script lang="ts">
	import Speaker from '$lib/Speaker.svelte';
	import { speakers } from '../constants';
	import LevelIcon from '../LevelIcon.svelte';
	import { formatDate } from '../utils';

	const { data } = $props();
</script>

<article
	class="theme-{data.themeIndex} duration-{data.duration}"
	style:opacity={data.filter === 'visible' ? 1 : 0.15}
>
	<!-- FIXME use correct title level -->
	<h1>{data.name}</h1>

	<h2>Infos pratiques</h2>
	<div class="footer">
		<p class="schedule">{formatDate(data.event_start)} — {formatDate(data.event_end)}</p>
		<div class="flex">
			{#if data.level}
				<span class="level" title={data.level} aria-label="Niveau {data.level}">
					<LevelIcon level={data.level} />
				</span>
			{/if}
			<span class="event-type">{data.event_type}</span>
		</div>
	</div>

	<h2>Description</h2>
	<p>{data.description}</p>

	<h2>Orateur·ice{speakers.length >= 2 ? 's' : ''}</h2>
	{#if data.speakers}
		<div class="speakers" class:too-crowded={data.speakers.length >= 3}>
			{#each data.speakers as speaker (speaker)}
				<Speaker {speaker} size="lg" />
			{/each}
		</div>
	{/if}
</article>

<style>
	h1 {
		font-size: 30px; /* FIXME obsolete with theme? */
	}

	h2 {
		font-size: 24px; /* FIXME obsolete with theme? */
		margin: 24px 0 8px;
	}

	p {
		white-space: pre-line;
	}
</style>
