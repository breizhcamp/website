<script lang="ts">
	import Filters from './Filters.svelte';
	import Grid from './Schedule.svelte';
	import './themes.css';
	import { filterSessions, groupSessionsBySlotsAndRooms } from './utils';

	const { data } = $props();

	let filter = $state({
		search: '',
		dayOfWeek: data.eventDays[0]!.getDay(),
		eventTypes: []
	});

	const daySessions = $derived(filterSessions(data.schedule, filter));

	const daySessionsBySlots = $derived(
		groupSessionsBySlotsAndRooms(daySessions, data.eventRooms, filter.dayOfWeek)
	);
</script>

<h1>Programme</h1>

<Filters days={data.eventDays} eventTypes={data.eventTypes} bind:filter />

<Grid
	data={daySessionsBySlots}
	rooms={data.eventRooms.filter((room) => room !== 'Hall')}
	eventTypes={data.eventTypes}
/>
