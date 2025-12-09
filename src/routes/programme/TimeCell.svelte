<script lang="ts">
	import { formatDate, type DaySessionsBySlot } from './utils';

	type Props = DaySessionsBySlot;

	const { startAt, endAt, format }: Props = $props();
</script>

<div>
	{formatDate(startAt)} — {formatDate(endAt)}
</div>
<div class="format">
	{format}
</div>

<style>
	div {
		text-align: center;
	}

	.format {
		font-style: italic;
		font-size: 14px;
		margin-top: 8px;
	}
</style>
