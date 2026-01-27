<script lang="ts">
	import DayNavigation from '../DayNavigation.svelte';
	import Filters from '../Filters.svelte';
	import Schedule from '../Schedule.svelte';
	import '../themes.css';
	import { filterSessions, groupSessionsBySlotsAndRooms } from '../utils';

	const { data } = $props();

	let filter = $state({
		search: '',
		eventTypes: []
	});

	function getDayOfWeek() {
		return data.day ? parseInt(data.day) : data.eventDays[0]!.getDay();
	}

	let currentDayOfWeek = $derived(getDayOfWeek());

	const daySessions = $derived(
		filterSessions(data.schedule, { ...filter, dayOfWeek: currentDayOfWeek })
	);

	const daySessionsBySlots = $derived(
		groupSessionsBySlotsAndRooms(daySessions, data.eventRooms, currentDayOfWeek)
	);
</script>

<h1>Programme</h1>

<DayNavigation days={data.eventDays} {currentDayOfWeek} />
<Filters eventTypes={data.eventTypes} bind:filter />

<Schedule
	data={daySessionsBySlots}
	rooms={data.eventRooms.filter((room) => room !== 'Hall')}
	eventTypes={data.eventTypes}
/>

<style>
	h1 {
		font-size: 36px;
		text-transform: uppercase;
	}
</style>
