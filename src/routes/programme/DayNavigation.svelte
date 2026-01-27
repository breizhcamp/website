<script lang="ts">
	import { formatDay } from './utils';

	interface Props {
		days: Array<Date>;
		currentDayOfWeek: number;
	}

	let { days, currentDayOfWeek }: Props = $props();
</script>

<nav aria-label="Selection du jour du programme">
	{#each days as day, index (day)}
		{@const formattedDay = formatDay(day)}
		<a
			href="/programme/{day.getDay()}"
			aria-current={day.getDay() === currentDayOfWeek ? 'true' : undefined}
		>
			Jour {index + 1} - {formattedDay}
		</a>
	{/each}
</nav>

<style>
	nav {
		border-bottom: 1px solid #e5e7eb;
	}

	nav a {
		display: inline-block;
		padding: 12px 24px;
		font-weight: 500;
		cursor: pointer;
	}

	nav a[aria-current] {
		color: var(--violet);
		border-bottom: 3px solid var(--violet);
	}
</style>
