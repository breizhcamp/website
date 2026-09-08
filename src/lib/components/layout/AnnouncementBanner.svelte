<script lang="ts">
	import { siteConfig } from '../../config/site';

	const announcement = siteConfig.announcement;

	let dismissed = $state(false);

	function dismiss() {
		dismissed = true;
	}
</script>

{#if announcement.enabled && !dismissed}
	<aside class="announcement" aria-label="Annonce">
		<div class="container">
			<p class="message">
				<span class="icon" aria-hidden="true">📣</span>
				<span class="text">{announcement.text}</span>
				<a
					class="link"
					href={announcement.href}
					target={announcement.external ? '_blank' : undefined}
					rel={announcement.external ? 'noopener noreferrer' : undefined}
				>
					{announcement.linkLabel}
					<span aria-hidden="true">→</span>
				</a>
			</p>
			<button class="close" type="button" onclick={dismiss} aria-label="Fermer l'annonce">
				<span aria-hidden="true">✕</span>
			</button>
		</div>
	</aside>
{/if}

<style>
	.announcement {
		background: var(--violet);
		color: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0.625rem 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.75rem;
	}

	.message {
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: 0.25rem 0.5rem;
		font-size: 0.875rem;
		line-height: 1.4;
		text-align: center;
	}

	.icon {
		flex-shrink: 0;
	}

	.link {
		color: white;
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 3px;
		white-space: nowrap;
	}

	.link:hover {
		text-decoration-thickness: 2px;
	}

	.link:focus-visible {
		outline: 2px solid white;
		outline-offset: 2px;
		border-radius: 2px;
	}

	.close {
		flex-shrink: 0;
		margin-left: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 1.75rem;
		height: 1.75rem;
		padding: 0;
		background: transparent;
		border: none;
		border-radius: 4px;
		color: white;
		font-size: 0.875rem;
		line-height: 1;
		cursor: pointer;
	}

	.close:hover {
		background: rgba(255, 255, 255, 0.15);
	}

	.close:focus-visible {
		outline: 2px solid white;
		outline-offset: 2px;
	}

	@media (min-width: 900px) {
		.container {
			padding: 0.625rem 1.5rem;
		}

		.message {
			font-size: 0.95rem;
		}
	}

	@media (prefers-contrast: high) {
		.announcement {
			border-bottom: 2px solid white;
		}
	}
</style>
