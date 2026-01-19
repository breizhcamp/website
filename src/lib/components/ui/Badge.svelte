<script>
	const { color = 'grey', size = 'md', children } = $props(); // pink, yellow, grey | sm, md
</script>

<span class="badge badge-{color} size-{size}">
	{@render children?.()}
</span>

<style>
	.badge {
		display: inline-block;
		border-radius: 4px;
		font-weight: 500;
	}

	.size-md {
		padding: 0.25rem 0.75rem;
		font-size: 0.8rem;
	}
	.size-sm {
		padding: 0.2rem 0.5rem;
		font-size: 0.75rem;
	}

	.badge-pink {
		background: #fce7f3;
		color: #831843;
	}
	.badge-yellow {
		background: var(--lime);
		color: black;
	}
	.badge-grey {
		background: var(--neutral-100);
		color: var(--neutral-700);
	}
	.badge-orange {
		background: var(--orange);
		color: white;
	}
</style>
