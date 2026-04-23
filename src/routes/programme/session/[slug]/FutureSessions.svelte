<script lang="ts">
	import type { Session } from '../../data/constants';
	import { formatDate, formatTime } from '../../utils';

	interface Props {
		sessions: Array<Session>;
	}

	const { sessions }: Props = $props();
</script>

<ul class="wrapper">
	{#each sessions as session (session.id)}
		<li>
			<ul class="infos-utiles-one">
				<li class="type" aria-label="thématique : {session.event_type}">
					{session.event_type}
				</li>
				<li class="format" aria-label="Format : {session.format}">{session.format}</li>
			</ul>

			<a href="/programme/session/{session.id}">
				<h3>{session.name}</h3>
			</a>

			{#if 'description' in session}
				<p>{session.description}</p>
			{/if}

			<div class="infos-utiles-two">
				<img src="/icons/clock.svg" alt="" width="16" />
				<span class="value">
					{formatDate(session.event_start)}
					{formatTime(session.event_start)} à {formatTime(session.event_end)}
				</span>
				-
				<span>
					<span class="value">{session.venue}</span>
				</span>
			</div>
		</li>
	{/each}
</ul>

<style>
	.wrapper {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}

	.wrapper > li {
		list-style-type: none;
		border-radius: 8px;
		border: 1px solid #e5e7eb;
		padding: 16px;
	}

	ul.infos-utiles-one {
		display: flex;
		gap: 24px;
		padding: 0;
		margin: 0 0 16px 0;
	}

	ul.infos-utiles-one li {
		list-style: none;
		color: var(--violet);
		font-size: 12px;
	}

	a {
		text-decoration: none !important;
		padding: 0px !important;
		color: black !important;
		display: block;
	}

	a:hover {
		color: var(--violet) !important;
	}

	h3 {
		margin-bottom: 4px;
	}

	p {
		color: #4b5563;
		font-size: 14px;

		overflow: hidden;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		-webkit-box-orient: vertical;
		margin: 0 0 16px 0;
	}

	.infos-utiles-two {
		display: flex;
		gap: 4px;
		color: #6b7280;
		font-size: 12px;
	}
</style>
