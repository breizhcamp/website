<script lang="ts">
	import type { Formatted } from '$lib/program/program.types';
	import { dayPeriods } from '$lib/shared/constants';
	import { groupBy } from '$lib/shared/utils.js';
	import Grid from './Grid.svelte';
	import Slots from './Slots.svelte';

	const { data } = $props();

	const dayLabels = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
	const days = $derived(Array.from(new Set(data.sessions?.map((session) => session.dayOfWeek))));

	let selectedDay = $state(days[0]);
	let selectedCategoryItemIds = $state(data.categories.map(() => undefined));

	const daySessions = $derived(
		data.sessions
			.filter((session) => session.dayOfWeek === selectedDay)
			.filter((session) =>
				selectedCategoryItemIds.every(
					(selectedCategoryItemId, index) =>
						!selectedCategoryItemId ||
						session.categories[index]?.id === selectedCategoryItemId
				)
			)
	);

	type SessionsPerRoom = Record<Formatted.Room, Array<Formatted.Session>>;

	const daySessionsPerRoom: SessionsPerRoom = $derived(
		Object.fromEntries(
			groupBy(
				daySessions,
				(session) => session.room,
				data.rooms.map((room) => room.name)
			)
		)
	);
</script>

<h1>Programme</h1>

<h2>Filtres</h2>

<legend>
	Jours
	{#each days as day (day)}
		<label>
			<input type="radio" value={day} bind:group={selectedDay} />
			{dayLabels[day - 1]}
		</label>
	{/each}
</legend>

{#each data.categories as category, index (category.id)}
	<label>
		{category.title}
		<select bind:value={selectedCategoryItemIds[index]}>
			<option value={undefined}> Tous </option>
			{#each category.items as { id, name } (id)}
				<option value={id}>
					{name}
				</option>
			{/each}
		</select>
	</label>
{/each}

<h2>Programme</h2>

<Grid
	data={[daySessionsPerRoom]}
	columns={[
		{
			title: 'Heures',
			value: (item: SessionsPerRoom) => 'All day'
		},
		...data.rooms.map((room) => ({
			title: room.name,
			value: (item: SessionsPerRoom) => ({
				sessions: item[room.name] ?? []
			}),
			component: Slots
		}))
	]}
/>

<!-- {#each daySessionsPerRoom as [room, sessions] (room)}
	<h2>{room}</h2>
	{#each sessions as session (session.title)}
		<p>{session.title} - {session.categories.map((c) => c.value)}</p>
	{/each}
{/each} -->

<pre>{JSON.stringify(dayPeriods, null, 2)}</pre>
