<script lang="ts" generics="T, U extends Record<string, any>">
	import type { Component } from 'svelte';

	type Column = {
		title: string;
	} & (
		| { value: (item: T) => string }
		| {
				value: (item: T) => U;
				component: Component<U>;
		  }
	);

	interface Props {
		data: Array<T>;
		columns: Array<Column>;
	}

	const { data, columns }: Props = $props();
</script>

<table role="grid">
	<thead>
		<tr>
			{#each columns as column}
				<th scope="col">{column.title}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each data as row}
			<tr>
				{#each columns as column}
					{@const value = column.value(row)}
					<td>
						{#if 'component' in column && typeof value !== 'string'}
							<column.component {...value} />
						{:else}
							{value}
						{/if}
					</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
