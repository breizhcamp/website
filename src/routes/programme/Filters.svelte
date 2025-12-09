<script lang="ts">
	interface Props {
		days: Array<Date>;
		eventTypes: Array<string>;
		filter: {
			search: string;
			dayOfWeek: number;
			eventTypes: Array<string>;
		};
	}

	let { days, eventTypes, filter = $bindable() }: Props = $props();
</script>

<h2>Filtres</h2>

<legend class="days">
	<h3>Jours</h3>
	<div class="inputs">
		{#each days as day, index (day)}
			{@const formattedDay = day.toLocaleDateString('fr-FR', { weekday: 'long' })}
			<input
				id={formattedDay}
				type="radio"
				value={day.getDay()}
				bind:group={filter.dayOfWeek}
			/>
			<label for={formattedDay}>
				Jour {index + 1} - {formattedDay}
			</label>
		{/each}
	</div>
</legend>

<div class="filters">
	<div class="search">
		<label>
			Recherche
			<input bind:value={filter.search} />
		</label>
	</div>
	<div>
		<legend>
			<h3>Thèmes</h3>
			<div class="themes">
				{#each eventTypes as eventType, index (eventType)}
					<label class="theme-{index}">
						<input type="checkbox" value={eventType} bind:group={filter.eventTypes} />
						{eventType}
					</label>
				{/each}
				<!-- FIXME accessibility should not be there? -->
				<button onclick={() => (filter.eventTypes = [])}>
					<img src="/trash.svg" alt="" width="16" />
					Désélectionner tous les filtres
				</button>
			</div>
		</legend>
	</div>
</div>

<style>
	.days {
		border-bottom: 1px solid #e5e7eb;
	}

	.days label {
		display: inline-block;
		padding: 12px 24px;
		font-weight: 500;
		cursor: pointer;
	}

	.days :checked + label {
		color: #8e3089; /* FIXME use css variable from theme */
		border-bottom: 2px solid #8e3089;
	}

	.days input {
		display: none;
	}

	h3 {
		display: block;
	}

	.filters {
		margin: 32px 0;
		background-color: #f9fafb;
		border-radius: 8px;
		padding: 24px;
		display: flex;
		gap: 32px;
	}

	.search input {
		width: 320px;
		border-radius: 8px;
		border: 1px solid #d1d5db;
	}

	.themes {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.themes label {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 2px 10px;
		border-radius: 2px;
		background-color: hsla(var(--bg-color), 1);
		border-left: 4px solid hsla(var(--accent-color), 1);
		cursor: pointer;
	}

	button {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background-color: hsl(230, 24%, 93%);
		padding: 2px 10px;
		border-radius: 2px;
	}
</style>
