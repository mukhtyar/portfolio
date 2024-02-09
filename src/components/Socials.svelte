<script>
  export let data;
</script>

<style>
  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin: 0;
    list-style: none;
    padding: 0;
  }

  li {
    display: inline-block;
    padding: 0;
    margin: 0;
  }

  a {
    font-size: 1rem;
    line-height: 1;
    padding: 0.25rem;
    outline: none;
    color: var(--gray-9);
    text-transform: uppercase;
    text-decoration: underline;
  }

  a:hover {
    color: var(--gray-7);
  }

  @media only screen and (max-width: 768px) {
    ul {
      padding-inline-start: 0;
    }
  }
</style>

<ul>
  {#each data as { path, label, icon }}
    <li>
      <a href="{path}">
        <span>{label}</span>
      </a>
    </li>
  {/each}
</ul>
