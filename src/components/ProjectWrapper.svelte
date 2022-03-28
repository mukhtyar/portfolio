<script>
  import ProjectPreview from "./ProjectPreview.svelte";
  import Card from "./Card.svelte";

  export let projects;
</script>

<style>
  .project-grid {
    margin: var(--size-6) 0;
    display: grid;
    grid-gap: var(--size-6);
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
  }

  @media only screen and (max-width: 768px) {
    .project-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="project-grid" role="list">
  {#each projects as item}
    <div role="listitem">
      <Card>
        <ProjectPreview project="{item}" />
      </Card>
    </div>
  {/each}
</div>
