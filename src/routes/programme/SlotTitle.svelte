<script lang="ts">
	import type { PeriodTime } from './constants';
	import { formatDate } from './utils';

	type Props = PeriodTime;

	const { startAt, endAt, label }: Props = $props();
</script>

<div class="date">
	{formatDate(startAt)} - {formatDate(endAt)}
</div>
<div class="label">
	{label}
</div>

<style>
	div {
		text-align: center;
	}

	.date {
		font-size: 16px;
	}

	.label {
		font-style: italic;
		font-size: 14px;
		margin-top: 8px;
	}
</style>
