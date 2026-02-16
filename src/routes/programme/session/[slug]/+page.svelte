<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Speaker from '$lib/Speaker.svelte';
	import BookmarkButton from '../../BookmarkButton.svelte';
	import { speakers } from '../../data/constants';
	import { formatDate, formatDayOfWeek, formatSessionDuration } from '../../utils';
	import { addToGoogleCalendar, downloadIcsFile, share } from './share.utils';

	const { data } = $props();

	const duration = $derived(formatSessionDuration(data));
</script>

<article style:opacity={data.filter === 'visible' ? 1 : 0.15}>
	<div>
		<div class="laptop-card">
			<ul class="infos-utiles-one">
				<li class="type" aria-label="thématique : {data.event_type}">{data.event_type}</li>
				<li class="format" aria-label="Format : {data.format}">{data.format}</li>
				<li class="duration" aria-label="duration : {duration}">{duration}</li>
			</ul>

			<h1>{data.name}</h1>

			<ul class="infos-utiles-two">
				<li>
					<span class="icon"><img src="/icons/calendar.svg" alt="" /></span>
					<span class="label">Date</span>
					<span class="value">{formatDayOfWeek(data.day_of_week)}</span>
				</li>
				<li>
					<span class="icon"><img src="/icons/clock.svg" alt="" /></span>
					<span class="label">Horaire</span>
					<span class="value"
						>{formatDate(data.event_start)} à {formatDate(data.event_end)}</span
					>
				</li>
				<li>
					<span class="icon"><img src="/icons/pin.svg" alt="" /></span>
					<span class="label">Salle</span>
					<span class="value">{data.venue}</span>
				</li>
			</ul>
		</div>

		<div class="laptop-card">
			<h2>Description</h2>
			<p>{data.description}</p>
		</div>

		<div class="laptop-card">
			<h2>Orateur·ice{speakers.length >= 2 ? 's' : ''}</h2>
			{#if data.speakers}
				<div class="speakers" class:too-crowded={data.speakers.length >= 3}>
					{#each data.speakers as speaker (speaker)}
						<Speaker {speaker} size="lg" />
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<div>
		<div class="laptop-card">
			<h2>Actions rapides</h2>

			<div class="button-wrapper">
				<BookmarkButton eventId={data.id} variant="lg" />

				<Button variant="grey" onclick={() => addToGoogleCalendar(data)}>
					<img src="/icons/calendar-plus.svg" alt="" width="20" />
					Ajouter à Google Calendar
				</Button>

				<Button variant="grey" onclick={() => downloadIcsFile(data)}>
					<img src="/icons/calendar-plus.svg" alt="" width="20" />
					Télécharger le fichier ICS
				</Button>

				<div class="mobile-only">
					<Button variant="grey" onclick={() => share(data)}>
						<img src="/icons/share.svg" alt="" width="20" />
						Partager la session
					</Button>
				</div>

				<hr />

				<Button variant="grey" href="/programme">
					<img src="/icons/corner-down-left.svg" alt="" width="20" />
					Retour au programme
				</Button>
			</div>
		</div>
	</div>
</article>

<style>
	article {
		max-width: 1200px;
		margin: auto;
		padding: 24px;
	}

	ul.infos-utiles-one {
		display: flex;
		justify-content: space-between;
		gap: 24px;
		padding: 0;
		margin: 0 0 24px 0;
	}

	ul.infos-utiles-one li {
		list-style: none;
	}

	ul.infos-utiles-one li.type {
		color: var(--violet);
	}
	ul.infos-utiles-one li.format {
		color: var(--violet);
		flex-grow: 1;
	}

	ul.infos-utiles-one li.duration {
		color: #6b7280;
	}

	h1 {
		font-size: 30px;
		font-weight: 700;
	}

	ul.infos-utiles-two {
		border-radius: 8px;
		background-color: #f9fafb;
		padding: 12px 16px;
		margin: 32px 0 0 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	ul.infos-utiles-two li {
		list-style: none;
		display: grid;
		grid-template-areas:
			'icon label'
			'icon value';
		grid-template-columns: 20px auto;
		column-gap: 8px;
		align-items: center;
	}

	ul.infos-utiles-two .icon {
		grid-area: icon;
	}

	ul.infos-utiles-two .label {
		color: #6b7280;
		font-size: 14px;
		grid-area: label;
		margin-bottom: -4px;
	}

	ul.infos-utiles-two .value {
		grid-area: value;
	}

	h2 {
		font-size: 20px;
		font-weight: 700;
		margin: 32px 0 16px;
	}

	p {
		white-space: pre-line;
	}

	.button-wrapper {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.mobile-only :global(button) {
		width: 100%;
	}

	hr {
		margin: 16px 50% 16px 0;
		border: none;
		border-bottom: 1px solid #6b7280;
	}

	@media (min-width: 1024px) {
		article {
			display: grid;
			grid-template-columns: 2fr 1fr;
			gap: 32px;
		}

		.laptop-card {
			background: white;
			border: 1px solid var(--neutral-200);
			border-radius: var(--border-radius);
			padding: 2rem;
			box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
			margin-bottom: 32px;
		}

		h2 {
			margin: 0 0 24px 0;
		}

		.mobile-only {
			display: none;
		}
	}
</style>
