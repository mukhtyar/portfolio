<script>
  export let routes;
  export let currentRoute;
</script>

<style>
  footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: var(--size-8) var(--size-2);
    text-align: center;
    color: var(--grape-9);
  }

  a {
    color: var(--grape-9);
  }

  a.active {
    text-decoration: underline;
  }

  a:hover,
  a:visited {
    color: var(--grape-9);
  }

  ul {
    list-style-type: none;
    display: flex;
    justify-content: center;
    padding: 0;
    text-transform: uppercase;
  }

  li {
    padding: var(--size-2);
  }
</style>

<footer>
  <ul role="menu">
    <li>
      <a
        class:active="{currentRoute === '/'}"
        aria-current="{currentRoute === '/'}"
        href="/"
      >
        Home
      </a>
    </li>
    {#each routes as { path, label, icon }}
      {#if !icon}
        <li>
          <a
            class:active="{currentRoute === path}"
            aria-current="{currentRoute === path}"
            href="{path}"
          >
            {label}
          </a>
        </li>
      {/if}
    {/each}
  </ul>

  <div>
    🚀 Built with <a href="https://astro.build/" target="_blank">Astro</a>,
    <a href="https://svelte.dev/" target="_blank">Svelte</a>
    & <a href="https://open-props.style" target="_blank">Open Props</a>
  </div>
</footer>
