<script lang="ts">
	import DayNavigation from '../DayNavigation.svelte';
	import Filters from '../Filters.svelte';
	import LaptopSchedule from '../LaptopSchedule.svelte';
	import MobileSchedule from '../MobileSchedule.svelte';
	import '../themes.css';
	import { filterSessions } from '../utils';

	const { data } = $props();

	let filter = $state({
		search: '',
		eventTypes: []
	});

	function getDayOfWeek() {
		return data.day ? parseInt(data.day) : data.eventDays[0]!.getDay();
	}

	let currentDayOfWeek = $derived(getDayOfWeek());

	const filteredSessions = $derived(
		filterSessions(data.schedule, { ...filter, dayOfWeek: currentDayOfWeek })
	);
</script>

<div class="max-width">
	<h1>Programme</h1>

	<DayNavigation days={data.eventDays} {currentDayOfWeek} />
</div>

<Filters eventTypes={data.eventTypes} bind:filter />

<div class="max-width schedule-wrapper">
	<div class="mobile-only">
		<MobileSchedule
			sessions={filteredSessions}
			eventTypes={data.eventTypes}
			{currentDayOfWeek}
		/>
	</div>
	<div class="laptop-only">
		<LaptopSchedule
			sessions={filteredSessions}
			rooms={data.eventRooms}
			eventTypes={data.eventTypes}
			{currentDayOfWeek}
		/>
	</div>
</div>

<style>
	.max-width {
		width: 100%;
		max-width: 1440px;
		margin: auto;
		padding: 0 16px;
	}

	.schedule-wrapper {
		margin-bottom: 120px;
	}

	h1 {
		font-size: 36px;
		margin-top: 36px;
	}

	.laptop-only {
		display: none;
	}
	@media (min-width: 1024px) {
		.mobile-only {
			display: none;
		}
		.laptop-only {
			display: block;
		}
	}
</style>
