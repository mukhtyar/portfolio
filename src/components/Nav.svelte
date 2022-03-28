<script>
  export let routes;
  export let currentRoute = "/";
</script>

<style>
  nav {
    display: flex;
    align-items: baseline;
    padding: var(--size-4);
    justify-content: space-between;
  }

  .brand {
    font-family: "Spirax", serif;
    font-weight: 400;
    font-size: var(--size-8);
    color: var(--brand);
    margin-inline: var(--size-2);
    text-transform: capitalize;
  }

  .brand:hover {
    color: var(--grape-9);
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    list-style: none;
  }

  li {
    display: inline-block;
    margin: 0;
  }

  a {
    font-size: 1rem;
    line-height: 1;
    padding: 0.25rem;
    outline: none;
    text-decoration: none;
    color: var(--gray-9);
    text-transform: uppercase;
  }

  a.active {
    text-decoration: underline;
  }

  a:hover {
    color: var(--gray-7);
  }

  @media only screen and (max-width: 768px) {
    nav {
      flex-direction: column;
    }

    ul {
      padding-inline-start: 0;
    }
  }
</style>

<nav>
  <div>
    <a class="brand" href="/">Shruti Mukhtyar</a>
  </div>
  <ul role="menu">
    {#each routes as { path, label, icon }}
      <li>
        <a
          class:active="{currentRoute === path}"
          aria-current="{currentRoute === path}"
          href="{path}"
        >
          {#if icon}
            <svelte:component this="{icon}" height="{20}" width="{20}" />
            <span class="sr-only">{label}</span>
          {:else}
            {label}
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</nav>
