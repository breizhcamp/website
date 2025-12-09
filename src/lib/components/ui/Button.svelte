<script>
  export let variant = 'primary'; // primary, secondary, tertiary, link, icon-primary, icon-secondary
  export let type = 'button';
  export let href = null;
  export let fullWidth = false;
</script>

{#if href}
  <a {href} class="btn btn-{variant} {fullWidth ? 'w-full' : ''}" role="button">
    <slot />
  </a>
{:else}
  <button {type} class="btn btn-{variant} {fullWidth ? 'w-full' : ''}" on:click>
    <slot />
  </button>
{/if}

<style>
  .btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 1.5rem;
    border-radius: 6px;
    font-weight: 500;
    font-size: 1rem;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.2s ease;
    gap: 0.5rem;
    font-family: inherit;
  }
  .w-full { width: 100%; }
  
  .btn:hover { transform: translateY(-1px); }
  .btn:active { transform: translateY(0); }

  /* VARIANTS */
  .btn-primary { background: var(--violet); color: white; }
  .btn-primary:hover { background: #7A2575; }

  .btn-secondary { background: white; border-color: var(--violet); color: var(--violet); }
  .btn-secondary:hover { background: var(--neutral-50); }

  .btn-tertiary { background: var(--lime); color: black; }
  .btn-tertiary:hover { background: #D4D43D; }

  .btn-icon-primary { background: var(--orange); color: white; }
  .btn-icon-primary:hover { background: #C5681C; }

  .btn-icon-secondary { background: var(--neutral-100); color: var(--neutral-800); }
  .btn-icon-secondary:hover { background: var(--neutral-200); }

  .btn-link { background: transparent; color: var(--violet); padding-left: 0; justify-content: flex-start; }
  .btn-link:hover { text-decoration: underline; background: transparent; transform: none; }
</style>