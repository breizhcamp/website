<script lang="ts">
	import { groupBy } from '$lib/shared/utils.js';

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

	const daySessionsPerRoom = $derived(
		groupBy(
			daySessions,
			(session) => session.room,
			data.rooms.map((room) => room.name)
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
	<legend>
		{category.title}
		{#each category.items as { id, name } (id)}
			<label>
				<input type="radio" value={id} bind:group={selectedCategoryItemIds[index]} />
				{name}
			</label>
		{/each}
	</legend>
	<button onclick={() => (selectedCategoryItemIds[index] = undefined)}> RAZ filtre </button>
{/each}

<h2>Programme</h2>

{#each daySessionsPerRoom as [room, sessions] (room)}
	<h2>{room}</h2>
	{#each sessions as session (session.title)}
		<p>{session.title} - {session.categories.map((c) => c.value)}</p>
	{/each}
{/each}
