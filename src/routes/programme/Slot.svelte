<script lang="ts">
	interface Props {
		title: string;
	}

	const { title }: Props = $props();
</script>

<p>{title}</p>
