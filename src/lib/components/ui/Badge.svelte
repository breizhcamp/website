<script>
	export let color = 'grey'; // pink, yellow, grey
	export let size = 'md'; // sm, md
</script>

<span class="badge badge-{color} size-{size}">
	<slot />
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
