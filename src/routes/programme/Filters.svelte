<script lang="ts">
	interface Props {
		eventTypes: Array<string>;
		filter: {
			search: string;
			eventTypes: Array<string>;
		};
	}

	let { eventTypes, filter = $bindable() }: Props = $props();
</script>

<div class="filters">
	<div class="search">
		<label>
			Recherche
			<input bind:value={filter.search} class="input-field" />
		</label>
	</div>
	<div>
		<legend>
			<span>Thèmes</span>
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
	.days input {
		display: none;
	}

	.filters {
		margin: 32px 0;
		background-color: var(--neutral-100);
		border-radius: 8px;
		padding: 24px;
		display: flex;
		gap: 32px;
	}

	.search input {
		width: 320px;
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
		height: 28px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background-color: hsl(230, 24%, 93%);
		padding: 2px 10px;
		border-radius: 2px;
		border: none;
		cursor: pointer;
	}
</style>
