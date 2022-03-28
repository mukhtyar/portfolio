<script>
  export let project;
</script>

<style>
  .project-item {
    display: flex;
    flex-direction: column;
    min-height: 320px;
    transition: color 300ms ease;
    text-decoration: none;
    color: var(--gray-8);
  }

  .project-item-image {
    overflow: hidden;
    height: 200px;
  }

  .project-item-details {
    padding: var(--size-2);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  h3 {
    font-weight: var(--font-weight-5);
    font-size: var(--font-size-4);
    color: var(--gray-9);
    margin: var(--size-2) 0;
  }

  p {
    color: var(--gray-7);
  }
</style>

<a href="{project.url}" class="project-item">
  <div class="project-item-image">
    <img loading="lazy" src="/assets/{project.img}" alt="{project.title}" />
  </div>
  <div class="project-item-details">
    <h3>{project.description}</h3>
  </div>
</a>
