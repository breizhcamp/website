<script lang="ts">
	import type { Speaker } from '../routes/programme/constants';

	interface Props {
		speaker: string | Speaker;
		size: 'lg' | 'md' | 'sm';
	}

	const { speaker, size }: Props = $props();
</script>

<div class="size-{size}">
	<span class="avatar">
		{#if typeof speaker === 'string'}
			<!-- FIXME this is ridiculous -->
			<img src="/user.svg" alt="" width="30" />
			<p>{speaker}</p>
		{:else}
			{#if speaker.imageProfilURL}
				<img src={speaker.imageProfilURL} class="picture" alt="" width="30" />
			{:else}
				<img src="/user.svg" alt="" width="30" />
			{/if}
			<p>{speaker.firstname} {speaker.lastname}</p>
		{/if}
	</span>
	{#if size === 'lg' && typeof speaker !== 'string'}
		<p class="bio">{speaker.bio.replace(/\n\n/g, '\n')}</p>
	{/if}
</div>

<style>
	.avatar {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.avatar img {
		border-radius: 20px;
		flex-shrink: 0;
		width: 30px;
		aspect-ratio: 1;
	}

	.avatar img.picture {
		border: 3px solid hsl(var(--accent-color));
	}

	.avatar p {
		font-size: 14px;
		line-height: 1.05;
		color: #333333;
	}

	.size-sm img {
		width: 16px;
	}

	.size-sm p {
		font-size: 10px;
	}

	.size-lg .avatar {
		gap: 12px;
	}

	.size-lg + :global(.size-lg) {
		margin-top: 24px;
	}

	.size-lg img {
		width: 36px;
	}

	.size-lg .avatar p {
		font-size: 16px;
	}

	.bio {
		display: block;
		font-size: 14px;
		white-space: pre-line;
		margin: 4px 0 16px;
		line-height: 1;
	}
</style>
