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
	<div class="max-width">
		<div class="search">
			<label>
				Recherche
				<input bind:value={filter.search} class="input-field" />
			</label>
		</div>
		<div class="themes-wrapper">
			<legend>
				<span>Thèmes</span>
				<div class="themes">
					{#each eventTypes.filter((eventType) => !['Autre...', 'Eat', 'Keynote'].includes(eventType)) as eventType, index (eventType)}
						<label class="theme-{index}">
							<input
								type="checkbox"
								value={eventType}
								bind:group={filter.eventTypes}
							/>
							{eventType}
						</label>
					{/each}
				</div>
			</legend>
			<div class="button-wrapper">
				<button onclick={() => (filter.eventTypes = [])}>
					<img src="/trash.svg" alt="" width="16" />
					Désélectionner tous les filtres
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	.filters {
		background-color: var(--neutral-100);
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	.max-width {
		width: 100%;
		max-width: 1440px;
		margin: auto;
	}

	.search input {
		width: 100%;
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

	.button-wrapper {
		display: flex;
		justify-content: flex-end;
	}

	button {
		height: 28px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		background-color: hsl(230, 24%, 93%);
		margin-top: 8px;
		padding: 2px 10px;
		border-radius: 2px;
		border: none;
		cursor: pointer;
	}

	@media (min-width: 768px) {
		.filter {
			flex-direction: row;
			margin: 32px 0px;
			border-radius: 8px;
		}
		.search input {
			width: 320px;
		}
	}

	@media (min-width: 1024px) {
		.themes-wrapper {
			display: flex;
		}

		button {
			height: 42px;
			margin-top: 24px;
		}
	}
</style>
