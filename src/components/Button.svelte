<script>
  export let href = undefined;
  export let tabindex = "0";
  export let type = "button";
  export let disabled = false;
  export let target = false;

  $: buttonProps = {
    type: href && !disabled ? undefined : type,
    tabindex,
    href,
    class: "btn",
    disabled,
    ...(target && { target: "_blank" }),
  };
</script>

<style>
  .btn {
    border: var(--border-size-2) solid currentColor;
    padding: var(--size-2) var(--size-4);
    text-transform: uppercase;
    box-shadow: 4px 4px var(--indigo-5);
    margin-inline: 0;
    text-decoration: none;
  }
</style>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-missing-attribute -->
{#if href}
  <a {...buttonProps} on:click on:mouseover on:mouseenter on:mouseleave>
    <slot />
  </a>
{:else}
  <button {...buttonProps}>
    <slot />
  </button>
{/if}
